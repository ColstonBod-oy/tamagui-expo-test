import React from "react";
import AnimatedSplashScreen from "./components/AnimatedSplashScreen";
import HomeScreen from "./screens/HomeScreen";
import MessagesScreen from "./screens/MessagesScreen";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { createConfig } from "@gluestack-ui/themed";
import { config as defaultConfig } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<AnimatedSplashScreen image={require("./assets/images/splash.png")}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name="Messages" component={MessagesScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</AnimatedSplashScreen>
		</GluestackUIProvider>
	);
}
