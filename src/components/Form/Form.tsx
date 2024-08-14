import React, { ReactNode, useContext, useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, View, Text } from "react-native";
import styled from "rn-css/.";

type FormType = {
  form: any;
  onSubmit?: (props?: any) => any;
  children?: ReactNode;
};

type FormItemType = {
  type?: string;
  name: string;
  children?: any;
};

type FormSubmitType = {
  type?: string;
  children?: ReactNode;
};

type FormSectionType = {
  Item?: any;
  Submit?: any;
};

const FormContext = React.createContext<any>({});

const Form: React.FC<FormType> & FormSectionType = ({
  children,
  form,
  onSubmit,
}) => {
  const submit = (data: any) => {
    onSubmit && onSubmit(data);
  };

  console.log(form);

  return (
    <FormContext.Provider value={{ ...form, submit }}>
      {children}
    </FormContext.Provider>
  );
};

const FormItem: React.FC<FormItemType> = ({ children, name }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useContext(FormContext);

  useEffect(() => console.log(errors), [errors]);

  return (
    <Controller
      name={name}
      control={control}
      render={(props: any) => {
        const {
          field: { value, onBlur, onChange },
        } = props;
        return (
          <View>
            {React.cloneElement(children, {
              value,
              onBlur,
              onChangeText: onChange,
            })}
            <View>
              {errors[name] && (
                <ErrorMessage>{errors[name]?.message}</ErrorMessage>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const FormSubmit: React.FC<FormSubmitType> = ({ children, ...rest }) => {
  const { submit, handleSubmit } = useContext(FormContext);
  return (
    <Pressable onPress={handleSubmit(submit)} {...rest}>
      {children}
    </Pressable>
  );
};

Form.Item = FormItem as any;
Form.Submit = FormSubmit as any;

const ErrorMessage = styled.Text`
  color: #f44336;
`;
export default Form;
