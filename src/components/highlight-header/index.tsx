import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "@/theme/colors";
import { Text, View } from "react-native";
import { Separator } from "../separator";

export type HighlightHeaderProps = {
  total: string;
}

type Props = {
  data: HighlightHeaderProps;
}

export function HighlightHeader(props: Props) {
  const { data } = props;

  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>Total que você possui:</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>
      <Separator color={colors.blue[400]} />
    </LinearGradient>
  )
}