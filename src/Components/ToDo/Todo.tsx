import React, { useState } from "react";
import { Span } from "../Login/Login-styled-components";
import {
  AddButton,
  Container,
  FormContainer,
  HeaderContainer,
  List,
  LogoutButton,
  LogoutWrapper,
  NameContainer,
  TodoForm,
  TodoList,
} from "./Todo-styled-components";
interface Props {
  history: {
    push: (url: string) => void;
  };
}

interface IError {
  todo?: string;
}

interface IList {
  title: string;
  date: string;
}

export const Todo: React.FC<Props> = (props: Props) => {
  const [todo, setTodo] = useState<string>("");
  const [date, setDate] = useState<number>(new Date().getDate());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [todoList, setTodoList] = useState<Array<IList>>([]);
  const [todoError, setTodoError] = useState<IError>({});
  const errros: IError = {};
  console.log(todoList);
  const month_names_short: Array<string> = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  // !Validating the field
  const runValidation = () => {
    if (todo.length === 0) {
      errros.todo = "Todo field can not be empty";
    } else if (todo.length < 10) {
      errros.todo = "Todos can be of minimum 10 characters long";
    }
  };
  // ! delete Todo
  const handleDelete = (title: string): void => {
    const result = todoList.filter((ele) => ele.title !== title);
    setTodoList([...result]);
  };

  // !Logout event
  const handleLogout = (): void => {
    localStorage.clear();
    props.history.push("/");
  };
  //! Todo submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errros).length === 0) {
      setTodoError({});
      const todoData = {
        title: todo,
        date: `${date} ${month_names_short[month]}`,
      };
      setTodoList([...todoList, todoData]);
      setTodo("");
      setDate(new Date().getDate());
      setMonth(new Date().getMonth());
    } else {
      setTodoError(errros);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <NameContainer>
          Hello <span id="name">{localStorage.getItem("username")}</span>
        </NameContainer>
        <LogoutWrapper>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </LogoutWrapper>
      </HeaderContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <TodoForm>
            <input type="text" value={todo} onChange={handleTodoChange} />
            <AddButton type="submit" className="btn">
              Add
            </AddButton>
            {todoError.todo && <Span>{todoError.todo}</Span>}
          </TodoForm>
        </form>
      </FormContainer>
      <TodoList>
        {todoList.map((ele, i) => {
          return (
            <List key={i}>
              <p>{i + 1}</p>
              <p onDoubleClick={() => handleDelete(ele.title)}>{ele.title}</p>
              <p>{ele.date}</p>
            </List>
          );
        })}
      </TodoList>
    </Container>
  );
};
