import { Stack, useSegments } from "expo-router";
import { View, Text } from "react-native";

export default function RootLayout() {
  const segments = useSegments();
  const currentRoute = segments.join("/");

  // Define different layouts
  const AppLayout = (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(main)/dashboard/page" />
    </Stack>
  );

  const AuthLayout = (
    <Stack>
      <Stack.Screen name="(auth)/sign-in/page" />
      <Stack.Screen name="(auth)/sign-up/page" />
      <Stack.Screen name="(auth)/reset-password/page" />
    </Stack>
  );

  // Conditionally render layouts based on the current route
  return currentRoute.includes("(auth)") ? AuthLayout : AppLayout;
}
