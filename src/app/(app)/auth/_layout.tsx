import { Redirect, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import styled from "rn-css/.";

export default function AuthLayout() {
  const isLoggedIn = useSelector((s: any) => s.auth.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    console.log({ isLoggedIn });
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn]);

  return (
    <Stack
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="index" options={{ title: "SignIn" }} />

      <Stack.Screen name="signup" options={{ title: "SignUp" }} />
    </Stack>
  );
}

function Header(props: any) {
  const { options } = props;

  return (
    <HeaderContainer>
      <Text>{options.title}</Text>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View.attrs({
  style: {
    elevation: 3,
  },
})`
  flex-direction: row;
  justify-content: center;
  height: 4rem;
  padding: 0.5rem 1rem;
  background-color: white;
  align-items: center;
`;
