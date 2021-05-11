import { React, useState } from "react";
import { Field, reduxForm } from "redux-form";

const DaftarProdukForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <form onSubmit={handleSubmit}>
      <div className="component grosir">
        <div>
          <label>
            <h2 className="grosir">Nama Produk</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="namaProduk"
              component="input"
              type="text"
              placeholder="Masukkan nama produk"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Deskripsi Produk</h2>
          </label>
          <div>
            <Field
              className="textAreaInput grosir"
              name="deskripsiProduk"
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
  form: "daftarProduk", // a unique identifier for this form
})(DaftarProdukForm);
