import { Redirect, Stack } from "expo-router";
import { useSelector } from "react-redux";

export default function HomeLayout() {
  const isLoggedIn = useSelector((s: any) => s.auth.isLoggedIn);

  if (!isLoggedIn) return <Redirect href="auth" />;

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
