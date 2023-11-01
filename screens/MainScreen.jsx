import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";

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

export default function MainScreen() {
	const [mainScreenIsReady, setMainScreenIsReady] = useState(false);

	// Load any resources or data that you need before rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				const imageAssets = cacheImages([]);

				const fontAssets = cacheFonts([
					Entypo.font,
					{
						SFProBold: require("../assets/fonts/SF-Pro-Text-Bold.otf"),
					},
				]);

				await Promise.all([...imageAssets, ...fontAssets]);
			} catch (e) {
				// You might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setMainScreenIsReady(true);
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	if (!mainScreenIsReady) {
		return null;
	}

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontFamily: "SFProBold" }}>SplashScreen Demo! 👋</Text>
			<Entypo name="rocket" size={30} />
		</View>
	);
}
