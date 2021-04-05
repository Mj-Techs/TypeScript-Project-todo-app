import React, { useState } from "react";
import {
  Form,
  InputWrapper,
  Label,
  LoginWrapper,
  Input,
  Span,
  FormField,
  Button,
  ButtonWrapper,
} from "./Login-styled-components";

interface Props {
  history: {
    push: (url: string) => void;
  };
}

interface IError {
  username?: string;
  password?: string;
}

export const Login: React.FC<Props> = (props: Props) => {
  console.log(props);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<IError>({});
  const errors: IError = {};
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const runValidation = (): void => {
    if (username.length === 0) {
      errors.username = "username can't be empty";
    } else if (username.length < 4) {
      errors.username = "username should must have atleast 4 characters";
    }
    if (password.length === 0) {
      errors.password = "password can't be empty";
    } else if (password.length < 8) {
      errors.password = "password should must have atleast 8 characters";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      setLoginError({});
      props.history.push(`/todo/${username}`);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      setLoginError(errors);
    }
  };
  return (
    <LoginWrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <FormField>
            <Label>Username</Label>
            <Input
              type="text"
              value={username}
              onChange={handleUsername}
              name={loginError.username}
            />
          </FormField>
          <div>{loginError.username && <Span>{loginError.username}</Span>}</div>
        </InputWrapper>
        <InputWrapper>
          <FormField>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={handlePassword}
              name={loginError.password}
            />
          </FormField>
          <div>{loginError.password && <Span>{loginError.password}</Span>}</div>
        </InputWrapper>
        <ButtonWrapper>
          <Button type="submit">Login</Button>
        </ButtonWrapper>
      </Form>
    </LoginWrapper>
  );
};
