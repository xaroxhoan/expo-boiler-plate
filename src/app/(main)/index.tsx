import { View, Text } from "react-native";
import styled from "rn-css/.";

export default function Main() {
  return (
    <Container>
      <Text>One</Text>
      <Text>Two</Text>
    </Container>
  );
}
const Container = styled.View`
  gap: 1rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;
