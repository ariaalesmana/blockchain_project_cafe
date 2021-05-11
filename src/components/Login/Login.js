import { Fragment } from "react";
import "./Login.css";
import "./LoginMedia.css";

const Login = () => {
  return (
    <Fragment>
      <div className="title login">
        <span className="lingkaran login"></span>
        <div className="heading login">
          <span className="login">Masuk</span>
          <h1 className="login">Login</h1>
        </div>
      </div>

      <div className="garis login"></div>
    </Fragment>
  );
};

export default Login;
