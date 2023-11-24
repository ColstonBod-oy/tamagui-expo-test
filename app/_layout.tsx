import { Suspense } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import AnimatedSplashScreen from "../components/AnimatedSplashScreen";
import { MySafeAreaView } from "../components/MySafeAreaView";
import config from "../tamagui.config";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            <MySafeAreaView>
              <AnimatedSplashScreen
                image={require("../assets/images/splash.png")}
              >
                <Stack
                  screenOptions={{
                    headerShown: false
                  }}
                />
              </AnimatedSplashScreen>
            </MySafeAreaView>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
