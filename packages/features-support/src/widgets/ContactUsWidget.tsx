import {
  StyledIcon,
  StyledListItem,
  Widget,
  microColors,
} from "@micro/core-components";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export const ContactUsWidget = () => {
  const router = useRouter();
  return (
    <Widget style={{ marginTop: 16 }}>
      <StyledListItem
        title="Call us"
        borderBottom
        showChevron
        icon={<StyledIcon name="call" color={microColors.blue} />}
        onPress={() => router.navigate("/(support)/call-us")}
      />
      <StyledListItem
        title="Chat with us"
        icon={<StyledIcon name="chat" color={microColors.blue} />}
        showChevron
        style={{ marginTop: 16 }}
        onPress={() => router.navigate("/(support)/chat-with-us")}
      />
    </Widget>
  );
};

const styles = StyleSheet.create({
  firstListItem: {
    marginBottom: 16,
  },
});
