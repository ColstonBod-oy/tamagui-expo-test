import React, { useState } from "react";
import { ChevronRight, Info, MessageCircle, Send } from "@tamagui/lucide-icons";
import { Sheet } from "@tamagui/sheet";
import {
  Button,
  Input,
  ScrollView,
  Separator,
  TextArea,
  YGroup
} from "tamagui";

import { ListItem } from "../../components/ListItem";

export default function Messages() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="$6"
        circular
        icon={MessageCircle}
        backgroundColor={"#e5e7eb"}
        position={"absolute"}
        zIndex={100_000}
        top={"86%"}
        left={"80%"}
        onPress={() => setOpen(true)}
      />
      <ScrollView>
        <YGroup
          alignSelf="center"
          bordered
          borderColor={"black"}
          margin={"5%"}
          size="$5"
          separator={
            <Separator
              y={-0.1}
              borderColor={"black"}
            />
          }
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
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={true}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[65, 50, 25]}
        dismissOnSnapToBottom
        zIndex={100_000}
        animation="medium"
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame
          padding="$4"
          justifyContent="center"
          alignItems="center"
          space="$5"
        >
          <Input
            placeholder="Header"
            width={"80%"}
          />
          <TextArea
            placeholder="Enter details..."
            width={"80%"}
          />
          <Button
            size="$6"
            circular
            icon={Send}
            onPress={() => setOpen(false)}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
