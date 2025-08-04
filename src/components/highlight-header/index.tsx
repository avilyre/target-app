import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "@/theme/colors";
import { Text, View } from "react-native";
import { Separator } from "../separator";
import { Summary } from "../summary";

const summaryData = {
  total: 'R$ 2.563,00',
  output: {
    label: 'Saidas',
    value: 'R$ 832,00'
  },
  input: {
    label: 'Entradas',
    value: 'R$ 2.435,00'
  }
}

export function HighlightHeader() {
  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>Total que você possui:</Text>
        <Text style={styles.total}>{summaryData.total}</Text>
      </View>

      <Separator color={colors.blue[400]} />

      <View style={styles.summaryContainer}>
        <Summary
          data={summaryData.input}
          icon={{
            name: 'arrow-upward',
            color: colors.green[500]
          }}
        />
        <Summary
          data={summaryData.output}
          icon={{
            name: 'arrow-downward',
            color: colors.red[400]
          }}
          isRight
        />
      </View>
    </LinearGradient>
  )
}