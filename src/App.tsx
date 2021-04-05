import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { Todo, Login } from "./Components";

const Wrapper = styled.div`
  display: grid;
  grid-template: 0.1fr 1fr/ 1fr;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
const Header = styled.div`
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: black;
`;
const App: React.FC = () => {
  return (
    <Wrapper>
      <Header>Todo App</Header>
      <div>
        <Router>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/todo/:name" component={Todo} />
        </Router>
      </div>
    </Wrapper>
  );
};

export default App;
