import React, { useEffect, useRef, useState } from "react";
import { FlatList, Keyboard, View } from "react-native";
import { ChevronRight, Info, MessageCircle } from "@tamagui/lucide-icons";
import { Sheet } from "@tamagui/sheet";
import { Button, Input, TextArea, YGroup, YStack } from "tamagui";

import { ListItem } from "../../components/ListItem";

export default function Messages() {
  const [open, setOpen] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  if (!open) {
    Keyboard.dismiss();
    inputRef.current?.clear();
    textAreaRef.current?.clear();
  }

  const submitHandler = (inputValue, textAreaValue) => {
    setData((prevData) => {
      return [
        {
          value: { subject: inputValue, details: textAreaValue },
          key: Math.random().toString()
        },
        ...prevData
      ];
    });
  };

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
        onPress={() => {
          setOpen(true);
          setInputValue("");
          setTextAreaValue("");
        }}
      />
      <YStack
        alignSelf="center"
        margin={"5%"}
        width={"90%"}
      >
        <FlatList
          data={data}
          contentContainerStyle={{ borderRadius: 6, overflow: "hidden" }}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "transparent" }} />
          )}
          renderItem={({ item }) => (
            <ListItem
              title={item.value.subject}
              subTitle={item.value.details}
              icon={Info}
              iconAfter={ChevronRight}
              color={"#FFFFFF"}
            />
          )}
        />
      </YStack>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={true}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[50]}
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
          justifyContent={isKeyboardVisible ? "flex-start" : "center"}
          alignItems="center"
        >
          <YGroup
            padding="$2"
            width={"85%"}
          >
            <Input
              placeholder="Subject"
              onChangeText={(val) => setInputValue(val)}
              ref={inputRef}
            />
            <TextArea
              placeholder="Enter details..."
              rows={4}
              onChangeText={(val) => setTextAreaValue(val)}
              ref={textAreaRef}
            />
            <Button
              onPress={() => {
                setOpen(false);
                submitHandler(inputValue, textAreaValue);
              }}
            >
              Send
            </Button>
          </YGroup>
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
