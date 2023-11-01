import React from "react";
import AnimatedSplashScreen from "./components/AnimatedSplashScreen";
import MainScreen from "./screens/MainScreen";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<AnimatedSplashScreen image={require("./assets/images/splash.png")}>
				<MainScreen />
			</AnimatedSplashScreen>
		</GluestackUIProvider>
	);
}
