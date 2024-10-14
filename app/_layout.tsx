import SnackbarComponent from "@/components/SnackbarComponent";
import { SnackbarProvider } from "@/context/SnackbarContext";
import { Stack, useSegments } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView, StatusBar } from "react-native";
import "./tailwind.css"; // Import Tailwind CSS styles

export default function RootLayout() {
  const segments = useSegments();
  const currentRoute = segments.join("/");
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  const AppLayout = (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F2F3FF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(main)/dashboard" />
    </Stack>
  );

  const AuthLayout = (
    <Stack
      screenOptions={{
        title: "Auth",
        headerShown: false,
        headerStyle: { backgroundColor: "#eee" },
      }}
    >
      <Stack.Screen name="(auth)" />
    </Stack>
  );
  return (
    <SafeAreaView className="bg-background-50 flex-1">
      <SnackbarProvider>
        <>
          <StatusBar barStyle="dark-content" />
          {currentRoute.includes("(auth)") ? AuthLayout : AppLayout}
          <SnackbarComponent />
        </>
      </SnackbarProvider>
    </SafeAreaView>
  );
}
