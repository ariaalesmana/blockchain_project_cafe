import { React, useState } from "react";
import { Field, reduxForm } from "redux-form";

const HarvestForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <form onSubmit={handleSubmit}>
      <div className="component harvest">
        <div>
          <label>
            <h2 className="harvest">Batch ID</h2>
          </label>
          <div>
            <Field
              className="textInput harvest"
              name="batchID"
              component="input"
              type="text"
              placeholder="Batch ID"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="harvest">Product ID</h2>
          </label>
          <div>
            <Field
              className="textInput harvest"
              name="productID"
              component="input"
              type="text"
              placeholder="Product ID"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="harvest">Supplier ID</h2>
          </label>
          <div>
            <Field
              className="textInput harvest"
              name="supplierID"
              component="input"
              type="text"
              placeholder="Supplier ID"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="harvest">Alamat Supplier</h2>
          </label>
          <div>
            <Field
              className="textAreaInput harvest"
              name="alamatSupplier"
              component="textarea"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="harvest">Foto Panen</h2>
          </label>
          <div>
            <input
              className="textInput harvest"
              name="fileInput"
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="harvest">Tanggal Panen</h2>
          </label>
          <div>
            <Field
              className="textInput harvest"
              name="tanggalPanen"
              component="input"
              type="date"
            />
          </div>
        </div>
      </div>

      <div className="garis harvest"></div>

      <div className="footer harvest">
        <button
          className="cancelButton harvest"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
        <button
          className="submitButton harvest"
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
  form: "harvest", // a unique identifier for this form
})(HarvestForm);
