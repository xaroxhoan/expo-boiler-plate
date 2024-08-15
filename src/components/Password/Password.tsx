import { forwardRef, useState } from "react";
import { View } from "react-native";
import styled from "rn-css/.";
import Ionicons from "@react-native-vector-icons/ionicons";

const Password: React.FC<any> = forwardRef(function (ref, props) {
  const [focused, setFocused] = useState(false);

  return (
    <Container focusable={true}>
      <Input secureTextEntry={true} {...props} ref={ref} />
      <View>
        <Ionicons />
      </View>
    </Container>
  );
});
const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  height: 3rem;
  background-color: #ede7f6;
  border-radius: 0.5rem;
  padding: 0 0.5rem;

  &:focus-within {
    border: 2px solid #651fff;
  }
`;

const Input = styled.TextInput`
  width: 100%;
  flex: 1;
  height: 3rem;
  &:focus {
    border: none;
    outline: none;
  }
`;
export default Password;
