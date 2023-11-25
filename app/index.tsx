import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View
} from "react-native";
import { Asset } from "expo-asset";
import Constants from "expo-constants";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Button, Text } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

interface SplashScreenProps {
  children: React.ReactNode;
  image: ImageSourcePropType;
}

export default function Home() {
  return (
    <AnimatedAppLoader image={require("../assets/images/splash.png")}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

function AnimatedAppLoader({ children, image }: SplashScreenProps) {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await Asset.fromModule(image as string).downloadAsync();
      setSplashReady(true);
    }

    prepare();
  }, [image]);

  if (!isSplashReady) {
    return null;
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children, image }: SplashScreenProps) {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  function cacheImages(images) {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  function cacheFonts(fonts) {
    return fonts.map((font) => Font.loadAsync(font));
  }

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      // Load stuff
      const imageAssets = cacheImages([require("../assets/images/logo.png")]);
      const fontAssets = cacheFonts([
        {
          SFProBold: require("../assets/fonts/SF-Pro-Text-Bold.otf")
        }
      ]);
      await Promise.all([...imageAssets, ...fontAssets]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.expoConfig.splash.backgroundColor,
              opacity: animation
            }
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: Constants.expoConfig.splash.resizeMode || "contain",
              transform: [
                {
                  scale: animation
                }
              ]
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

function MainScreen() {
  return (
    <MySafeAreaView>
      <View style={styles.homeScreenContainer}>
        <Image source={require("../assets/images/logo.png")} />
        <Text>Helpmate</Text>
        <Button>Scan</Button>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
