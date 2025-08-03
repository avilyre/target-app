import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>In Progress: {id}</Text>
      <Button
        title="Voltar"
        onPress={() => router.back()}
      />
    </View>
  )
}