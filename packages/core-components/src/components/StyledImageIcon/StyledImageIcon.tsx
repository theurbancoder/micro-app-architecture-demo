import { Image, View } from "react-native";
import { microColors } from "../../colors";

interface Props {
  uri: string;
  outlined?: boolean;
  size?: number;
}

export const StyledImageIcon = ({
  uri,
  outlined = false,
  size = 48,
}: Props) => {
  return (
    <View
      style={[
        outlined
          ? {
              alignItems: "center",
              justifyContent: "center",
            }
          : {},
        {
          width: size,
          height: size,
          borderColor: microColors.darkGrey,
          borderWidth: 1,
          borderRadius: 16,
        },
      ]}
    >
      <Image
        width={outlined ? size / 2 : size}
        height={outlined ? size / 2 : size}
        source={{ uri }}
        style={{ borderRadius: 16 }}
      />
    </View>
  );
};
