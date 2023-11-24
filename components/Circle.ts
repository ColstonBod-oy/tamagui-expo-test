import { GetProps, Stack, styled } from "tamagui"; // or '@tamagui/core'

export const Circle = styled(Stack, {
  name: "Circle", // useful for debugging, and Component themes
  borderRadius: 100_000_000,
  w: 50,
  h: 50,
  padding: 50
});

// helper to get props for any TamaguiComponent
export type CircleProps = GetProps<typeof Circle>;
