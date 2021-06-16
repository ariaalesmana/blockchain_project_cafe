import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/Roaster/Roaster.css"
import "./components/Roaster/RoasterMedia.css"
import Header from "./components/Header/Header";
import HalamanUtama from "./components/Roaster/HalamanUtama/HalamanUtama";
import ProductLists from "./components/Roaster/Products/ProductLists";
import RoastingLists from "./components/Roaster/Roasting/RoastingLists";

import Login from "./components/login.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import "./scss/style.scss";
import AddProducts from "./components/Roaster/Products/AddProducts";
import AddRoasting from "./components/Roaster/Roasting/AddRoasting";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser } = this.state;
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      history.push("/login");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user !== null) {
        const exampleJWT = user.token;
        function getPayload(jwt) {
          return atob(jwt.split(".")[1]);
        }
        const payload = getPayload(exampleJWT);
        if (payload.exp < Date.now() / 1000) {
          localStorage.removeItem("user");
          history.push("/login");
        }
      }
    }

    return (
      <Router history={history}>
        {currentUser && (
          <div>
            <Header logoutClick={this.logOut} />
          </div>
        )}
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={HalamanUtama} />
        <Route path="/products" exact component={ProductLists} />
        <Route path="/products/addProducts" exact component={AddProducts} />
        <Route path="/roasting" exact component={RoastingLists} />
        <Route path="/roasting/addRoasting" exact component={AddRoasting} />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { isLoggedIn } = state.auth;
  return {
    user,
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(App);
