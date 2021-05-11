import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Harvest from "./components/Harvest/Harvest";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/harvest">
            <Harvest />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
