import { getSuggestedQuery } from "@testing-library/dom";
import { React, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import firebase from "../../../firebase";

const DaftarBatchForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  // const [selectedFile, setSelectedFile] = useState(null);

  const [produk, setProduk] = useState([]);
  const [supplier, setSupplier] = useState([]);

  const db = firebase.firestore();

  const getProduk = async () => {
    const events = await firebase.firestore().collection("produk");
    events.get().then((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() });
      });
      setProduk(tempDoc);
    });
  };

  const getSupplier = async () => {
    const events = await firebase.firestore().collection("supplier");
    events.get().then((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() });
      });
      setSupplier(tempDoc);
    });
  };

  useEffect(() => {
    getProduk();
    getSupplier();
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
              <option value="-----">----</option>
              {produk &&
                produk.map((value) => {
                  return <option key={value.id}> {value.namaProduk}</option>;
                })}
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
              <option value="-----">----</option>
              {supplier &&
                supplier.map((value) => {
                  return <option key={value.id}> {value.namaSupplier}</option>;
                })}
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
