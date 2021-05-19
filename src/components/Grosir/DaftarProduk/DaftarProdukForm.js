import { React, useState, useEffect } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import firebase from "../../../firebase";

const DaftarProdukForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const [batch, setBatch] = useState([]);

  const getBatch = async () => {
    const events = await firebase.firestore().collection("batch");
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

  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="component grosir">
        <div>
          <label>
            <h2 className="grosir">Batch ID</h2>
            {batch &&
              batch.map((value) => {
                return (
                  <h1 key={value.id} value={value.id}>
                    {value.batchID}
                  </h1>
                );
              })}
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

        <button
          className="cancelButton grosir"
          type="button"
          disabled={pristine || submitting}
          // onClick={handleClick(batchIDValue)}
        >
          Check BatchID
        </button>

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
            <h2 className="grosir">Gambar Produk</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="gambarProduk"
              component="input"
              type="file"
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
