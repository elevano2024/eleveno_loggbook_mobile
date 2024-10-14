import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function SignUpScreen() {
  return (
    <View className="flex items-center">
      <Text>sign-up screen</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-primary mt-4">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
