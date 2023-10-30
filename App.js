import React from "react";
import AnimatedSplashScreen from "./components/AnimatedSplashScreen";
import MainScreen from "./screens/MainScreen";

export default function App() {
	return (
		<AnimatedSplashScreen image={require("./assets/splash.png")}>
			<MainScreen />
		</AnimatedSplashScreen>
	);
}
