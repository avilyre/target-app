import { ColorValue, View } from "react-native";
import { styles } from "./styles";

type Props = {
  color: ColorValue;
}

export function Separator(props: Props) {
  const { color } = props;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color, }
      ]}
    />
  );
}