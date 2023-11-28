import React from "react";
import { ChevronRight, Info } from "@tamagui/lucide-icons";
import { ScrollView, Separator, YGroup } from "tamagui";

import { ListItem } from "../../components/ListItem";

export default function Messages() {
  return (
    <ScrollView>
      <YGroup
        alignSelf="center"
        bordered
        padding={"5%"}
        size="$5"
        separator={<Separator />}
      >
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
        <ListItem
          title="Lorem Ipsum"
          subTitle="Lorem ipsum dolor sit amet..."
          icon={Info}
          iconAfter={ChevronRight}
          color={"#FFFFFF"}
        />
      </YGroup>
    </ScrollView>
  );
}
