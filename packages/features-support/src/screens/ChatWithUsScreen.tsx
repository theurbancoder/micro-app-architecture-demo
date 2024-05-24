import { useNavigation } from "expo-router";
import { StyleSheet } from "react-native";

import { StyledPageLayout, StyledText } from "@micro/core-components";
import { useEffect } from "react";

export const ChatWithUsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Chat with Us",
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <StyledPageLayout>
      <StyledText style={styles.title}>
        All our agents are busy right now
      </StyledText>
    </StyledPageLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});
