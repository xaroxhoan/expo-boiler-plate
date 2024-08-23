import { Redirect, Stack } from "expo-router";
import { useSelector } from "react-redux";

export default function AppLayout() {

  return (
    <Stack>
        <Stack.Screen name="auth" options={{headerShown: false}} />

        <Stack.Screen name="(home)" options={{headerShown: false}} />
    </Stack>
  );
}
