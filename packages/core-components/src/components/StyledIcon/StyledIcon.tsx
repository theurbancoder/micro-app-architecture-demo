import { View } from "react-native";
import { microColors } from "../../colors";
import { AddMoney } from "./icons/AddMoney";
import { Call } from "./icons/Call";
import { Card } from "./icons/Card";
import { Chat } from "./icons/Chat";
import { Savings } from "./icons/Savings";
import { SendMoney } from "./icons/SendMoney";

interface Props {
  name: "card" | "savings" | "send-money" | "add-money" | "call" | "chat";
  color?: string;
}

const getIcon = (name: Props["name"], color?: string) => {
  switch (name) {
    case "chat":
      return <Chat color={color} />;
    case "call":
      return <Call color={color} />;
    case "add-money":
      return <AddMoney color={color} />;
    case "send-money":
      return <SendMoney color={color} />;
    case "savings":
      return <Savings color={color} />;
    case "card":
      return <Card color={color} />;
    default:
      return null;
  }
};

export const StyledIcon = ({ name, color }: Props) => {
  return (
    <View
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
          borderColor: microColors.darkGrey,
          borderWidth: 1,
          borderRadius: 16,
        },
      ]}
    >
      {getIcon(name, color)}
    </View>
  );
};
