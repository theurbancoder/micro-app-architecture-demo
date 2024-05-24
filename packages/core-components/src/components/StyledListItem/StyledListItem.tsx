import { ReactNode } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { microColors } from "../../colors";
import { StyledText } from "../StyledText";
import { ChevronRight } from "./Chevron";

interface Props {
  title: string;
  subtitle?: string;
  caption?: string;
  style?: ViewStyle;
  icon?: ReactNode;
  borderBottom?: boolean;
  showChevron?: boolean;
  isExpandable?: boolean;
  onPress?: () => void;
}

export const StyledListItem = ({
  style,
  title,
  subtitle,
  caption,
  icon,
  borderBottom = false,
  showChevron = false,
  isExpandable = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, borderBottom ? styles.borderBottom : {}, style]}
    >
      <View style={{ flexDirection: "row" }}>
        {icon}
        <View style={{ justifyContent: "center" }}>
          <StyledText style={styles.text}>{title}</StyledText>
          {subtitle && (
            <StyledText style={styles.text} type="caption">
              {subtitle}
            </StyledText>
          )}
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 16 }}>
        {caption && <StyledText>{caption}</StyledText>}
        {(showChevron || isExpandable) && (
          <View
            style={isExpandable ? { transform: [{ rotate: "90deg" }] } : {}}
          >
            <ChevronRight />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderBottom: {
    borderColor: microColors.darkGrey,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    marginLeft: 16,
  },
});
