import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HalamanUtama from "./components/Grosir/HalamanUtama/HalamanUtama";
import DaftarJenis from "./components/Grosir/Jenis/DaftarJenis";
import ListJenis from "./components/Grosir/Jenis/ListJenis";
import DaftarSupplier from "./components/Grosir/Supplier/DaftarSupplier";
import ListSupplier from "./components/Grosir/Supplier/ListSupplier";
import DaftarBatch from "./components/Grosir/Batch/DaftarBatch";
import ListBatch from "./components/Grosir/Batch/ListBatch";
import DaftarProduk from "./components/Grosir/Produk/DaftarProduk";
import ListProduk from "./components/Grosir/Produk/ListProduk";

import Login from "./components/login.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './helpers/history';

import "./scss/style.scss";

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
    }

    return (
      <Router history={history}>
        { currentUser && 
          <Header />
        }
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={HalamanUtama} />
        <Route path="/listJenis" exact component={ListJenis} />
        <Route path="/listSupplier" exact component={ListSupplier} />
        <Route path="/listBatch" exact component={ListBatch} />
        <Route path="/listProduk" exact component={ListProduk} />
        <Route path="/listJenis/daftar" exact component={DaftarJenis} />
        <Route path="/listSupplier/daftar" exact component={DaftarSupplier} />
        <Route path="/listBatch/daftar" exact component={DaftarBatch} />
        <Route path="/listProduk/daftar" exact component={DaftarProduk} />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { isLoggedIn } = state.auth;
  return {
    user,
    isLoggedIn
  };
}

export default connect(mapStateToProps)(App);
