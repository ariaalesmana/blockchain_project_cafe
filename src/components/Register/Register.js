import { Fragment } from "react";
import "./Register.css";
import "./RegisterMedia.css";
import RegisterForm from "./RegisterForm";
import showResults from "../showResults/showResults";

const Register = () => {
  return (
    <Fragment>
      <div className="title register">
        <span className="lingkaran register"></span>
        <div className="heading register">
          <span className="register">Daftar</span>
          <h1 className="register">Register</h1>
        </div>
      </div>

      <div className="garis register"></div>

      <RegisterForm onSubmit={showResults} />
    </Fragment>
  );
};

export default Register;
