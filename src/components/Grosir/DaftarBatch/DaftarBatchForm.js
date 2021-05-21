import { React, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import firebase from "../../../firebase";

const DaftarBatchForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const [jenis, setJenis] = useState([]);
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    getProduk();
    getSupplier();
  }, []);

  const getProduk = async () => {
    const events = await firebase.firestore().collection("jenis");
    events.get().then((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() });
      });
      setJenis(tempDoc);
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

  const onFileChange = (e) => {
    const file = e.target.files[0];
    props.onSelectImage(file);
  };

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
            <h2 className="grosir">Pilih Jenis</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="pilihJenis"
              component="select"
            >
              <option value="-----">----</option>
              {jenis &&
                jenis.map((value) => {
                  return (
                    <option key={value.id} value={value.id}>
                      {value.namaJenis}
                    </option>
                  );
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
                  return (
                    <option key={value.id} value={value.id}>
                      {value.namaSupplier}
                    </option>
                  );
                })}
            </Field>
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Volume</h2>
          </label>
          <div className="divSatuan">
            <Field
              className="textInputSatuan grosir"
              name="volume"
              component="input"
              type="number"
              placeholder="Masukkan Volume Produk"
            />
            <span style={{ marginLeft: "1rem" }}>kg</span>
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Varietas</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="varietas"
              component="input"
              type="text"
              placeholder="Masukkan Varietas"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Proses</h2>
          </label>
          <div>
            <Field
              className="textInput grosir"
              name="proses"
              component="input"
              type="text"
              placeholder="Masukkan Proses"
            />
          </div>
        </div>

        <div>
          <label>
            <h2 className="grosir">Gambar Panen</h2>
          </label>
          <div>
            {/* <Field
              className="textInput grosir"
              name="gambarPanen"
              component="input"
              type="file"
              accept=".jpg, .png, .jpeg"
            /> */}
            <input
              className="textInput grosir"
              name="gambarPanen"
              component="input"
              type="file"
              onChange={onFileChange}
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
