import {
  StyledIcon,
  StyledListItem,
  Widget,
  microColors,
} from "@micro/core-components";
import { StyleSheet } from "react-native";

export const AccountWidget = () => (
  <Widget
    title="My accounts"
    subtitle="Total balance: £340.80"
    buttonLabel="Add +"
    style={{ marginTop: 16 }}
  >
    <StyledListItem
      title="Main account"
      caption="£140.80"
      style={styles.firstListItem}
      icon={<StyledIcon name="card" color={microColors.blue} />}
    />
    <StyledListItem
      title="Savings"
      caption="£200.00"
      icon={<StyledIcon name="savings" color={microColors.blue} />}
    />
  </Widget>
);

const styles = StyleSheet.create({
  firstListItem: {
    marginBottom: 16,
  },
});
