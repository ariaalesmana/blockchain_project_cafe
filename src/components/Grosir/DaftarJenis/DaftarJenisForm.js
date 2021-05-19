import { React } from "react";
import { Field, reduxForm } from "redux-form";

const DaftarJenisForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="component grosir">
        <div>
          <label>
            <h2 className="grosir">Nama Jenis</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="namaJenis"
              component="input"
              type="text"
              placeholder="Masukkan Nama Jenis"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Deskripsi Jenis</h2>
          </label>
          <div>
            <Field
              className="textAreaInput grosir"
              name="deskripsiJenis"
              component="textarea"
            />
          </div>
        </div>

        <div className="footer grosir">
          <button
            className="cancelButton grosir"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            CLEAR
          </button>
          <button
            className="submitButton grosir"
            type="submit"
            disabled={pristine || submitting}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "daftarJenis", // a unique identifier for this form
})(DaftarJenisForm);
