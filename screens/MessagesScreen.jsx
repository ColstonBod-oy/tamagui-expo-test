import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Spinner } from "@gluestack-ui/themed";
export default function MessagesScreen() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);
	return (
		<View style={styles.messagesScreenContainer}>
			{isLoading ? (
				<Spinner size={"xl"} color={"#EC472E"} />
			) : (
				<Text>MessagesScreen</Text>
			)}
		</View>
	);
}
const styles = StyleSheet.create({
	messagesScreenContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
