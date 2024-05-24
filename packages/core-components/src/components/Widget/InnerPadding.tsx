import { PropsWithChildren } from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";

const { ids, styles } = StyleSheet.create({
  container: {
    padding: 16,
    "@media (min-width: 600px)": {
      padding: 48,
    },
  },
});

interface Props extends PropsWithChildren {
  noPadding?: boolean;
}

export const InnerPadding = ({ children, noPadding }: Props) => {
  return (
    <View
      style={noPadding ? {} : styles.container}
      dataSet={{ media: ids.container }}
    >
      {children}
    </View>
  );
};
