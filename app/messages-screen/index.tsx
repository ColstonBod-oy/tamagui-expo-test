import React from "react";
import { ChevronRight, Moon } from "@tamagui/lucide-icons";
import { Text, YStack } from "tamagui";

import { ListItem } from "../../components/ListItem";

export default function Messages() {
  return (
    <YStack>
      <ListItem
        title="Moon"
        subTitle="Subtitle"
        icon={Moon}
        iconAfter={ChevronRight}
      />
      <Text>Messages Screen</Text>
    </YStack>
  );
}
