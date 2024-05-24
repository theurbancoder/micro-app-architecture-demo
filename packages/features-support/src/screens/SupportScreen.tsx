import { StyledPageLayout, StyledText } from "@micro/core-components";
import { StyleSheet } from "react-native";

import { ContactUsWidget } from "../widgets";

export const SupportScreen = () => {
  return (
    <StyledPageLayout>
      <StyledText style={styles.title}>Support</StyledText>
      <ContactUsWidget />
    </StyledPageLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});
