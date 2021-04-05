import styled from "styled-components";

export const LoginWrapper = styled.div`
  margin: 100px auto;
  width: 500px;
  height: 300px;
  text-align: center;
  background: #ddd;
  border-radius: 10px;
  box-shadow: 10px 10px 20px #ddd;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 70px 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 0.3fr 1fr;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.1fr;
  grid-gap: 3px;
`;

export const FormField = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  font-weight: 600;
`;
export const Input = styled.input`
  border-radius: 5px;
  outline: none;
  border: 1px solid #fff;
  border-color: ${(props) => (props.name ? "red" : "")};
`;

export const Span = styled.span`
  font-size: 1rem;
  padding-left: 100px;
  color: red;
  ::before {
    content: "*";
  }
`;
export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr;
  padding-left: 150px;
  padding-right: 5px;
`;
export const Button = styled.button`
  font-size: 1.1rem;
  outline: none;
  border: 1px solid cornflowerblue;
  background-color: cornflowerblue;
  cursor: pointer;
`;
