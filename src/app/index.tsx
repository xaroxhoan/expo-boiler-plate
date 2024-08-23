import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function Home() {
  const isLoggedIn = useSelector((s: any) => s.auth.isLoggedIn);

  return isLoggedIn ? <Redirect href="(home)" /> : <Redirect href="auth" />;
}
