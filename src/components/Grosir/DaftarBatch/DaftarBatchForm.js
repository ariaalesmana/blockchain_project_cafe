import { React } from "react";
import { Field, reduxForm } from "redux-form";

const DaftarBatchForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  // const [selectedFile, setSelectedFile] = useState(null);

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
              name="batchID"
              component="input"
              type="text"
              placeholder="Masukkan Batch ID"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Pilih Produk</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="pilihProduk"
              component="select"
            >
              <option />
              <option value="ff0000">Green Beans</option>
              <option value="00ff00">Roasted Beans</option>
              <option value="0000ff">...</option>
            </Field>
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Pilih Supplier</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="pilihSupplier"
              component="select"
            >
              <option />
              <option value="ff0000">Lokasi A</option>
              <option value="00ff00">Lokasi B</option>
              <option value="0000ff">...</option>
            </Field>
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Gambar Panen</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="gambarPanen"
              component="input"
              type="file"
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
  form: "daftarBatch", // a unique identifier for this form
})(DaftarBatchForm);
