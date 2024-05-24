import { StyleSheet } from "react-native";

import { StyledPageLayout, StyledText } from "@micro/core-components";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export const PayScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Send money",
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <StyledPageLayout>
      <StyledText style={styles.title}>Send a payment</StyledText>
    </StyledPageLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});
