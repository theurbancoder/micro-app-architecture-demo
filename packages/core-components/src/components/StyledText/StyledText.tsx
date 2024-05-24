import { StyleSheet, Text, TextStyle } from "react-native";

type TextType = "default" | "bold" | "caption";

interface Props {
  type?: TextType;
  children: string;
  style?: TextStyle;
}

const getStyle = (type?: TextType) => {
  switch (type) {
    case "bold":
      return styles.bold;
    case "caption":
      return styles.caption;
    case "default":
    default:
      return styles.text;
  }
};

export const StyledText = ({ type, children, style }: Props) => {
  return <Text style={[getStyle(type), style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  bold: {
    fontSize: 18,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 16,
    color: "#636B7C",
  },
});
