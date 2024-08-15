import { Text, TouchableOpacity, View } from "react-native";
import styled from "rn-css/.";
import Form from "../../components/Form/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CText } from "../../global/Styles";
import yup from "../../config/yup";
import { useDispatch } from "react-redux";
import Password from "../../components/Password/Password";
import { useState } from "react";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
export default function Login() {
  const dispatch = useDispatch();
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <Container>
      <LogoCard>
        <LogoImg source={require("../../../assets/img/logo.png")} />
      </LogoCard>

      <LoginFormCard>
        <Form form={form} onSubmit={handleSubmit}>
          <InputField>
            <InputLabel>{"ایمیل"}</InputLabel>
            <Form.Item name="email">
              <Input />
            </Form.Item>
          </InputField>

          <InputField>
            <InputLabel>کلمه عبور</InputLabel>

            <Form.Item name="password">
              <Password />
            </Form.Item>
          </InputField>

          <SubmitBtn>
            <SubmitBtnTxt>ورود</SubmitBtnTxt>
          </SubmitBtn>
        </Form>
      </LoginFormCard>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 1rem;
  gap: 2rem;
`;

const LogoCard = styled.View.attrs({
  style: {
    elevation: 2,
  },
})`
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 6rem;
  width: 6rem;
  border-radius: 3rem;
  z-index: 2;
`;

const LogoImg = styled.Image`
  height: 4rem;
  width: 4rem;
  z-index: 3;
`;

const LoginFormCard = styled.View.attrs({
  style: { elevation: 2 },
})`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1rem;
  align-self: stretch;
  gap: 1rem;
`;

const InputField = styled.View``;

const InputLabel = styled(CText)`
  font-weight: 400;
  &::after {
    content: "*";
  }
`;

const Input = styled.TextInput`
  height: 3rem;
  background-color: #ede7f6;
  border-radius: 0.5rem;
  padding: 0 0.5rem;

  &:focus {
    border: 2px solid #651fff;
    outline: none;
  }
`;

const SubmitBtn = styled(Form.Submit)`
  height: 3rem;
  align-self: stretch;
  background-color: #673ab7;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

const SubmitBtnTxt = styled(CText)`
  color: white;
  font-size: 1.25rem;
`;
