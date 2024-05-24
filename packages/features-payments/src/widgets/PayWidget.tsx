import {
  StyledIcon,
  StyledListItem,
  Widget,
  microColors,
} from "@micro/core-components";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export const PayWidget = () => {
  const router = useRouter();
  return (
    <Widget style={{ marginTop: 16 }}>
      <StyledListItem
        title="Pay"
        subtitle="Make payments to others"
        borderBottom
        showChevron
        icon={<StyledIcon name="send-money" color={microColors.blue} />}
        onPress={() => router.navigate("(payments)/pay")}
      />
      <StyledListItem
        title="Add money"
        subtitle="Transfer money from another bank"
        icon={<StyledIcon name="add-money" color={microColors.blue} />}
        showChevron
        style={styles.lastListItem}
      />
    </Widget>
  );
};

const styles = StyleSheet.create({
  lastListItem: {
    marginTop: 16,
  },
});
