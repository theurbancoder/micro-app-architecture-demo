import { StyleSheet } from "react-native";

import { StyledPageLayout, StyledText } from "@micro/core-components";
import { PayWidget } from "../widgets";

export const PaymentScreen = () => (
  <StyledPageLayout>
    <StyledText style={styles.title}>Payments</StyledText>
    <PayWidget />
  </StyledPageLayout>
);

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});
