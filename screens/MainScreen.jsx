import React from "react";
import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function MainScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>SplashScreen Demo! 👋</Text>
			<Entypo name="rocket" size={30} />
		</View>
	);
}
