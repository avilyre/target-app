import { fontFamily } from "@/theme/font-family";
import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 24
      }}
    >
      <Text style={{ fontFamily: fontFamily.bold }}>
        React native!
      </Text>
      <Button
        title="Nova meta"
        onPress={() => router.push("/target")}
      />
      <Button
        title="Transação"
        onPress={() => router.push("/transaction/123")}
      />
      <Button
        title="Em progresso"
        onPress={() => router.push("/in-progress/12345")}
      />
    </View>
  );
}