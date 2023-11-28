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
  backgroundColor: "orange" // or "$color", etc.
});

const CustomListItemTitle = styled(ListItemTitle, {
  color: "blue"
});

const CustomListItemSubtitle = styled(ListItemSubtitle, {
  color: "pink"
});

const CustomListItemText = styled(ListItemText, {
  color: "red"
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
