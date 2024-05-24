import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { microColors } from "../../colors";
import { StyledText } from "../StyledText";
import { InnerPadding } from "./InnerPadding";

interface Props extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  style?: ViewStyle;
  noPadding?: boolean;
}

export const Widget = ({
  children,
  style,
  title,
  subtitle,
  buttonLabel,
  noPadding = false,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      {title && (
        <View style={styles.header}>
          <View>
            <StyledText type="bold">{title}</StyledText>
            {subtitle && <StyledText type="caption">{subtitle}</StyledText>}
          </View>
          {buttonLabel && (
            <View style={styles.button}>
              <StyledText type="bold" style={{ color: microColors.darkBlue }}>
                {buttonLabel}
              </StyledText>
            </View>
          )}
        </View>
      )}
      <InnerPadding>{children}</InnerPadding>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: microColors.white,
    borderRadius: 20,
    borderColor: microColors.darkGrey,
    borderWidth: 0,
  },
  header: {
    borderColor: microColors.darkGrey,
    borderBottomWidth: 1,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: microColors.lightBlue,
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});
