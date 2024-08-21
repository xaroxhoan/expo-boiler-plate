import { forwardRef, useState } from "react";
import { KeyboardAvoidingView, Pressable, View } from "react-native";
import styled from "rn-css/.";
import Ant from "@expo/vector-icons/Ionicons";

const Password: React.FC<any> = forwardRef(function (props, ref) {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <KeyboardAvoidingView>
      <Container focusable={true}>
        <EyeBtn onPress={() => setshowPassword((curr) => !curr)}>
          {showPassword ? (
            <Ant name="eye-off-outline" size={24} color="blue" />
          ) : (
            <Ant name="eye-outline" size={24} color="blue" />
          )}
        </EyeBtn>

        <Input secureTextEntry={!showPassword} ref={ref} {...props} />
      </Container>
    </KeyboardAvoidingView>
  );
});
const Container = styled.View<any>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  height: 3rem;
  background-color: #ede7f6;
  border-radius: 0.5rem;
  padding: 0 0.5rem;

  &:focus-within {
  }

  &:focus {
    border: 2px solid #651fff;
    outline: none;
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

const EyeBtn = styled(Pressable)``;
export default Password;
