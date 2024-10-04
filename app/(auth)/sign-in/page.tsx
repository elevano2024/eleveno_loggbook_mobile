import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign-in screen</Text>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>navigate to:</Text>
        <Link
          style={{ textDecorationLine: "underline", color: "blue" }}
          href="/(auth)/sign-up/page"
        >
          Sign-up
        </Link>
        <Link
          style={{ textDecorationLine: "underline", color: "blue" }}
          href="/(auth)/reset-password/page"
        >
          Reset-Password
        </Link>
        <Link
          style={{ textDecorationLine: "underline", color: "blue" }}
          href="/(main)/dashboard/page"
        >
          Dashboard
        </Link>
      </View>
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
