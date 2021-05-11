import { React, useState } from "react";
import { Field, reduxForm } from "redux-form";

const RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="component register">
        <div>
          <label>
            <h2 className="register">Email</h2>
          </label>
          <div>
            <Field
              className="textInput register"
              name="email"
              component="input"
              type="email"
              placeholder="Masukkan Email"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="register">Nama Lengkap</h2>
          </label>
          <div>
            <Field
              className="textInput register"
              name="namaLengkap"
              component="input"
              type="text"
              placeholder="Masukkan Nama Lengkap"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="register">Username</h2>
          </label>
          <div>
            <Field
              className="textInput register"
              name="username"
              component="input"
              type="text"
              placeholder="Masukkan Username"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="register">Password</h2>
          </label>
          <div>
            <Field
              className="textInput register"
              name="password"
              component="input"
              type="password"
              placeholder="Masukkan Password"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="register">Tipe Akun</h2>
          </label>
          <div>
            <Field
              className="textInput register"
              name="tipeAkun"
              component="select"
            >
              <option></option>
              <option value="grosir">Grosir</option>
              <option value="roastery">Roastery</option>
              <option value="kafe">Kafe</option>
            </Field>
          </div>
        </div>
      </div>

      <div className="garis register"></div>

      <div className="footer register">
        <button
          className="cancelButton register"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
        <button
          className="submitButton register"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "register", // a unique identifier for this form
})(RegisterForm);
