import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./Components/Login";

const App: React.FC = () => {
  return (
    <div>
      <div>Todo App</div>
      <Router>
        <Route exact path={["/", "/login"]} component={Login} />
      </Router>
    </div>
  );
};

export default App;
