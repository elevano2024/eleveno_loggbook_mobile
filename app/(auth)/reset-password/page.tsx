import { View, Text, StyleSheet } from "react-native";

export default function ResetPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text>reset password screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
