import { StyledImageIcon, StyledText, Widget } from "@micro/core-components";
import { View } from "react-native";
import { NETFLIX_LOGO } from "./logos";

export const UpcomingPaymentWidget = () => {
  return (
    <Widget style={{ marginTop: 16, padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginRight: 40, width: "55%", alignItems: "center" }}>
          <StyledText
            type="bold"
            style={{ marginBottom: 10, textAlign: "center" }}
          >
            Upcoming payment
          </StyledText>
          <StyledText type="caption" style={{ textAlign: "center" }}>
            You have a £9 payment to Netflix scheduled to be taken tomorrow
          </StyledText>
        </View>
        <StyledImageIcon uri={NETFLIX_LOGO} size={64} />
      </View>
    </Widget>
  );
};
