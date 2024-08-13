import { Link } from "expo-router";
import { View, Text } from "react-native";
import styled from "rn-css/.";

export default function Header() {
  return (
    <Conainer>
      <NavLink href="/about">
        <Text>About</Text>
      </NavLink>
    </Conainer>
  );
}

const Conainer = styled.View`
  padding: 0.5rem 1rem;
  height: 4rem;
  background-color: red;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)``;
