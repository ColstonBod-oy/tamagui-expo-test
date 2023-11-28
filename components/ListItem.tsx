import {
  ListItemFrame,
  ListItemProps,
  ListItemSubtitle,
  ListItemText,
  ListItemTitle,
  styled,
  useListItem
} from "tamagui";

const CustomListItemFrame = styled(ListItemFrame, {
  backgroundColor: "#EC472E",
  paddingVertical: "$3"
});

const CustomListItemTitle = styled(ListItemTitle, {
  color: "#FFFFFF"
});

const CustomListItemSubtitle = styled(ListItemSubtitle, {
  color: "#f3f4f6"
});

const CustomListItemText = styled(ListItemText, {
  color: "#FFFFFF"
});

export const ListItem = CustomListItemFrame.styleable<ListItemProps>(
  (propsIn, ref) => {
    const { props } = useListItem(propsIn, {
      Title: CustomListItemTitle,
      Text: CustomListItemText,
      Subtitle: CustomListItemSubtitle
    }) as any;

    return (
      <CustomListItemFrame
        {...props}
        ref={ref}
      />
    );
  }
);
