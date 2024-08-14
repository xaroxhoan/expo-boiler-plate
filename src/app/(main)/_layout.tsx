import { Redirect, Stack } from "expo-router";
import { useSession } from "../../providers/session";

export default function MainLayout() {
  const { isLoggedIn } = useSession();

  if (!isLoggedIn) return <Redirect href="/login" />;

  return <Stack />;
}
