import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ResetPasswordScreen() {
  return (
    <View className="flex items-center">
      <Text>reset password screen</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-primary mt-4">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
