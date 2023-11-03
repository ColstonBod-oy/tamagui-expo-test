import React from "react";
import AnimatedSplashScreen from "./components/AnimatedSplashScreen";
import MainScreen from "./screens/MainScreen";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { createConfig } from "@gluestack-ui/themed";
import { config as defaultConfig } from "@gluestack-ui/config"; // Optional if you want to use default theme
const config = createConfig({
	...defaultConfig,
	tokens: {
		...defaultConfig.tokens,
		fonts: {
			heading: "SFProBold", // Heading component uses this by default
			body: "SFProBold", // Text component uses this by default
			mono: "SFProBold",
		},
	},
});
export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<AnimatedSplashScreen image={require("./assets/images/splash.png")}>
				<MainScreen />
			</AnimatedSplashScreen>
		</GluestackUIProvider>
	);
}
