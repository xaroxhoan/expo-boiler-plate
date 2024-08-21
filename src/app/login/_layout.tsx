import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function LoginLayout() {
  const isLoggedIn = useSelector((x: any) => x.auth.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn]);
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Login", headerShown: false }}
      />
    </Stack>
  );
}
