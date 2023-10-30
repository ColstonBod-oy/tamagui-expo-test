import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function AnimatedSplashScreen({ children, image }) {
	const animation = useMemo(() => new Animated.Value(1), []);
	const [isAppReady, setAppReady] = useState(false);
	const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

	useEffect(() => {
		if (isAppReady) {
			Animated.timing(animation, {
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			}).start(() => setAnimationComplete(true));
		}
	}, [isAppReady]);

	const onFontLoaded = useCallback(async () => {
		try {
			await SplashScreen.hideAsync();
			// Pre-load fonts, make any API calls you need to do here
			await Font.loadAsync(Entypo.font);
			await Promise.all([]);
		} catch (e) {
			console.warn(e);
		} finally {
			setAppReady(true);
		}
	}, []);

	return (
		<View style={{ flex: 1 }}>
			{isAppReady && children}
			{!isSplashAnimationComplete && (
				<Animated.View
					pointerEvents="none"
					style={[
						StyleSheet.absoluteFill,
						{
							backgroundColor: "white",
							opacity: animation,
						},
					]}
				>
					<Animated.Image
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
							transform: [
								{
									scale: animation,
								},
							],
						}}
						source={image}
						onLoadEnd={onFontLoaded}
						fadeDuration={0}
					/>
				</Animated.View>
			)}
		</View>
	);
}
