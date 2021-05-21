import { React, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import firebase from "../../../firebase";

const DaftarProdukForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const [batch, setBatch] = useState([]);

  const getBatch = async () => {
    const events = await firebase
      .firestore()
      .collection("batch")
      .orderBy("tanggalPanen", "desc");
    events.get().then((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() });
      });
      setBatch(tempDoc);
    });
  };

  useEffect(() => {
    getBatch();
  }, []);

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
              component="select"
            >
              <option value="-----">----</option>
              {batch &&
                batch.map((value) => {
                  return (
                    <option key={value.id} value={value.id}>
                      {value.batchID}
                    </option>
                  );
                })}
            </Field>
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">SKU</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="sku"
              component="input"
              type="text"
              placeholder="Masukkan SKU"
            />
          </div>
        </div>

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
              placeholder="Masukkan Nama Produk"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Tanggal Produksi</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="tanggalProduksi"
              component="input"
              type="date"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Berat</h2>
          </label>
          <div className="divSatuan">
            <Field
              className="textInputSatuan grosir"
              name="bobot"
              component="input"
              type="text"
              placeholder="Masukkan Bobot"
            />
            <span style={{ marginLeft: "1rem" }}>gr</span>
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
