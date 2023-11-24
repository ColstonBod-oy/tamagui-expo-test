import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Button, Text } from "tamagui";

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

export default function HomeScreen() {
  const [homeScreenIsReady, setHomeScreenIsReady] = useState(false);
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isSplashReady, setIsSplashReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  // Load any resources or data that you need before rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const imageAssets = cacheImages([require("../assets/images/logo.png")]);
        const fontAssets = cacheFonts([
          {
            SFProBold: require("../assets/fonts/SF-Pro-Text-Bold.otf")
          }
        ]);
        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        // You might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setHomeScreenIsReady(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    if (isSplashReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start(() => setAnimationComplete(true));
    }
  }, [isSplashReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
    } finally {
      setIsSplashReady(true);
    }
  }, []);

  return (
    <>
      {!isSplashReady &&
      !homeScreenIsReady ? null : !isSplashAnimationComplete ? (
        <View
          style={{
            flex: 1
          }}
        >
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: "white",
                opacity: animation
              }
            ]}
          >
            <Animated.Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
                transform: [
                  {
                    scale: animation
                  }
                ]
              }}
              source={require("../assets/images/splash.png")}
              onLoadEnd={onImageLoaded}
              fadeDuration={0}
            />
          </Animated.View>
        </View>
      ) : (
        <View style={styles.homeScreenContainer}>
          <Image source={require("../assets/images/logo.png")} />
          <Text>Helpmate</Text>
          <Button>Scan</Button>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
