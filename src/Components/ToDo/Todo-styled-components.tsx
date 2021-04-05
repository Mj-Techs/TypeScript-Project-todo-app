import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: grid;
  grid-template: 0.1fr 0.1fr 1fr/1fr;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template: 1fr / 0.3fr 1fr;
  margin: 10px;
`;

export const NameContainer = styled.div`
  font-size: 1.2rem;
  padding-left: 10px;
  border-bottom: 1px solid #aaa;
  #name {
    color: dodgerblue;
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
`;

export const LogoutWrapper = styled.div`
  display: grid;
  justify-items: end;
  margin-right: 50px;
  height: 20px;
`;

export const LogoutButton = styled.button`
  font-size: 1.3rem;
  width: 100px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  :hover {
    color: red;
  }
`;

export const FormContainer = styled.div`
  padding: 10px;
`;

export const TodoForm = styled.div`
  display: grid;
  grid-template: 1fr/0.5fr 0.1fr 1fr;
  grid-gap: 5px;
  font-size: 1.3rem;
`;

export const AddButton = styled.button`
  background-color: dodgerblue;
  font-size: 1.3rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const TodoList = styled.div`
  border: 1px solid #aaa;
  border-radius: 10px;
  display: grid;
  grid-template: auto/ 1fr;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const List = styled.div`
  display: grid;
  grid-template: 0.1fr/0.015fr 1fr 0.1fr;
  border: 1px solid;
  height: 30px;
  padding-left: 10px;
  align-content: center;
  overflow: auto;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
`;
