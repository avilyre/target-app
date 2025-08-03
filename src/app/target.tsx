import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Target() {
  const router = useRouter();

  return (
    <View>
      <Text>
        Target Screen
      </Text>
      <Button 
        title="Voltar"
        onPress={() => router.back()}
      />
    </View>
  )
}