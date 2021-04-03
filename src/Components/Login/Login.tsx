import React, { useState } from "react";

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
    }
    if (password.length === 0) {
      errors.password = "password can't be empty";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      setLoginError({});
      props.history.push(`/Todos/${username}`);
    } else {
      setLoginError(errors);
    }
    // console.log("form Data", username, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={handleUsername} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePassword} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
