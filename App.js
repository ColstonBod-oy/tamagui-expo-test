import React from "react";
import AnimatedSplashScreen from "./components/AnimatedSplashScreen";
import HomeScreen from "./screens/HomeScreen";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { createConfig } from "@gluestack-ui/themed";
import { config as defaultConfig } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from "@react-navigation/native";
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
		<NavigationContainer>
			<GluestackUIProvider config={config}>
				<AnimatedSplashScreen image={require("./assets/images/splash.png")}>
					<HomeScreen />
				</AnimatedSplashScreen>
			</GluestackUIProvider>
		</NavigationContainer>
	);
}
