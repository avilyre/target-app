import { HighlightHeader } from "@/components/highlight-header";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <HighlightHeader
        data={{
          total: "R$ 2.456,00"
        }}
      />
    </View>
  );
}