import { Stack } from "expo-router";

const SettingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="modal"
        options={{ presentation: "fullScreenModal" }}
      />
    </Stack>
  );
};
export default SettingLayout;
