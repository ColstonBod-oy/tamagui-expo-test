import {
	Box,
	Center,
	Button,
	ButtonText,
	ButtonIcon,
	ButtonGroup,
	Icon,
	AddIcon,
	InfoIcon,
	ButtonSpinner,
	ArrowUpIcon,
	Heading,
	Text,
	HStack,
	VStack,
	ThreeDotsIcon,
	Input,
	InputField,
} from "@gluestack-ui/themed";
import { EditIcon, ArrowLeftIcon } from "lucide-react-native";

import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
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

	// Load any resources or data that you need before rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				const imageAssets = cacheImages([require("../assets/images/logo.png")]);
				const fontAssets = cacheFonts([
					{
						SFProBold: require("../assets/fonts/SF-Pro-Text-Bold.otf"),
					},
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
	if (!homeScreenIsReady) {
		return null;
	}
	return (
		<View style={styles.homeScreenContainer}>
			<Image source={require("../assets/images/logo.png")} />
			<Text size={"5xl"} color={"#EC472E"} letterSpacing={-2.2}>
				{"Helpmate"}
			</Text>
			<Button
				action={"primary"}
				variant={"outline"}
				size={"xl"}
				borderColor={"#EC472E"}
				borderWidth={"$4"}
				mt={"$16"}
				h={"$16"}
			>
				<ButtonText size={"2xl"} color={"#EC472E"}>
					Scan
				</ButtonText>
			</Button>
		</View>
	);
}
const styles = StyleSheet.create({
	homeScreenContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
