import { Activity } from "@tamagui/lucide-icons";
import { Button, styled } from "tamagui";

export const StyledButton = styled(Button, {
  name: "StyledButton",
  color: "$backgroundStrong",
  alignSelf: "center",
  iconAfter: Activity,
  size: "$6",
  backgroundColor: "#EC472E",

  pressStyle: {
    backgroundColor: "#D91F29",
    borderColor: "#EC472E"
  }
});
