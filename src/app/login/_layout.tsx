import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Login" }} />
    </Stack>
  );
}
