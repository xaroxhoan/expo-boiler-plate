import { Link } from "expo-router";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import styled from "rn-css/.";
import { setLogout } from "../../../store/auth";

export default function Main() {
  const dispatch = useDispatch();

  const logout = () => dispatch(setLogout());

  return (
    <View>
      <Container>
        <Text>One</Text>
        <Text>Two</Text>
      </Container>

      <Button title="logout" onPress={logout} />
    </View>
  );
}
const Container = styled.View`
  gap: 1rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;
