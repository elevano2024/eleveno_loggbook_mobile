import { Slot } from "expo-router";
import { Image, Text, View } from "react-native";

export default function AuthLayout() {
  return (
    <>
      <View className="bg-background-50 flex flex-col p-5 h-screen relative">
        <View className="flex flex-row gap-1 items-center">
          <Image
            source={require("@/assets/images/logo/logo.png")}
            className="w-5 h-5"
            resizeMode="contain"
          />
          <Text className="text-lg font-bold">Logbook</Text>
        </View>

        <View className="flex flex-1 flex-col justify-between text-black pt-8 gap-8 relative">
          <View className="flex flex-col justify-center items-center">
            <Text className="text-[#122E44] text-2xl font-semibold mb-7">
              When Every Move Counts!
            </Text>
            <View className="font-normal flex items-center flex-col">
              <Text className="text-base text-[#677F92]">
                Your partner for stevedoring
              </Text>
              <Text className="text-base text-[#677F92]">
                equipment maintenance and repair
              </Text>
            </View>
          </View>
          <View
            className={
              "relative bg-white rounded-lg flex-col flex flex-1 py-6 px-4"
            }
          >
            <Slot />
          </View>
        </View>
      </View>
    </>
  );
}
