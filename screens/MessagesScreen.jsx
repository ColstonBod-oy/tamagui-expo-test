import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
	Spinner,
	FabIcon,
	Fab,
	Box,
	Alert,
	AlertIcon,
	AlertText,
	VStack,
} from "@gluestack-ui/themed";
import {
	MailPlus,
	Send,
	InfoIcon,
	AlertTriangle,
	AlertOctagon,
} from "lucide-react-native";
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
				<Box h={"95%"} w={"95%"} borderRadius="$md">
					<VStack space="md">
						<Alert
							mx="$2.5"
							action="info"
							variant="accent"
							bg="$info200"
							borderColor="$info700"
						>
							<AlertIcon as={InfoIcon} mr="$3" color="$info700" />
							<AlertText color="$textLight900">
								Suspect is small. May have robbed a couple of trash cans. We
								los...
							</AlertText>
						</Alert>
						<Alert
							mx="$2.5"
							action="warning"
							variant="accent"
							bg="$warning200"
							borderColor="$warning700"
						>
							<AlertIcon as={AlertOctagon} mr="$3" color="$warning700" />
							<AlertText color="$textLight900">
								so my husband climbed up to get the cat and now he's stuck
								too...
							</AlertText>
						</Alert>
						<Alert
							mx="$2.5"
							action="error"
							variant="accent"
							bg="$error200"
							borderColor="$error700"
						>
							<AlertIcon as={AlertTriangle} mr="$3" color="$error700" />
							<AlertText color="$textLight900">
								over turned vehicle, flames showing, and body parts everywhere,
								how...
							</AlertText>
						</Alert>
					</VStack>
					<Fab bg="#EC472E" size="lg" placement="bottom right">
						<FabIcon as={MailPlus} size="xl" />
					</Fab>
				</Box>
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
