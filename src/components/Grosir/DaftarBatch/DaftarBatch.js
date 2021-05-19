import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarBatchForm from "./DaftarBatchForm";
import firebase from "../../../firebase";

const DaftarBatch = () => {
  const db = firebase.firestore();

  const handleSubmit = (values) => {
    db.collection("batch").add({
      batchID: values.batchID,
      pilihJenis: values.pilihJenis,
      pilihSupplier: values.pilihSupplier,
      volume: values.volume,
      gambar: null,
      tanggalPanen: values.tanggalPanen,
    });

    showResults(values);
  };

  return (
    <Fragment>
      <div className="title grosir">
        <span className="lingkaran grosir"></span>
        <div className="heading grosir">
          <span className="grosir">Pemasukkan Data Batch</span>
          <h1 className="grosir">Daftar Batch</h1>
        </div>
      </div>

      <div className="garis grosir"></div>

      <DaftarBatchForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default DaftarBatch;
