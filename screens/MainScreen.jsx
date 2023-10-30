import React from "react";
import { Image, Text, View } from "react-native";
//import Entypo from "@expo/vector-icons/Entypo";

export default function MainScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Image source={require("../assets/Light_Theme_01.png")} />
		</View>
	);
}
