import { React, useState } from "react";
import { Field, reduxForm } from "redux-form";

const DaftarSupplierForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <form onSubmit={handleSubmit}>
      <div className="component grosir">
        <div>
          <label>
            <h2 className="grosir">Batch ID</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="namaProduk"
              component="input"
              type="text"
              placeholder="Batch ID"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Product ID</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="productID"
              component="input"
              type="text"
              placeholder="Product ID"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Supplier ID</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="supplierID"
              component="input"
              type="text"
              placeholder="Supplier ID"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Alamat Supplier</h2>
          </label>
          <div>
            <Field
              className="textAreaInput grosir"
              name="alamatSupplier"
              component="textarea"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Foto Panen</h2>
          </label>
          <div>
            <input
              className="textInput grosir"
              name="fileInput"
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Tanggal Panen</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="tanggalPanen"
              component="input"
              type="date"
            />
          </div>
        </div>
      </div>

      <div className="garis grosir"></div>

      <div className="footer grosir">
        <button
          className="cancelButton grosir"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
        <button
          className="submitButton grosir"
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
  form: "daftarSupplier", // a unique identifier for this form
})(DaftarSupplierForm);
