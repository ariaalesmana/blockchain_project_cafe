import { React } from "react";
import { Field, reduxForm } from "redux-form";

const DaftarSupplierForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="component grosir">
        <div>
          <label>
            <h2 className="grosir">Nama Supplier</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="namaSupplier"
              component="input"
              type="text"
              placeholder="Nama Supplier"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Lokasi Supplier</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="lokasiSupplier"
              component="input"
              type="text"
              placeholder="Lokasi Supplier"
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
  form: "daftarSupplier", // a unique identifier for this form
})(DaftarSupplierForm);
