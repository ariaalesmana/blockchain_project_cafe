import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import firebase from "../../../firebase";
import DaftarProdukForm from "./DaftarProdukForm";

const DaftarProduk = () => {
  const db = firebase.firestore();

  const handleSubmit = (values) => {
    db.collection("produk").add({
      batchID: values.batchID,
      sku: values.sku,
      namaProduk: values.namaProduk,
      tanggalProduksi: values.tanggalProduksi,
      gambarProduk: null,
    });

    showResults(values);
  };

  return (
    <Fragment>
      <div className="title grosir">
        <span className="lingkaran grosir"></span>
        <div className="heading grosir">
          <span className="grosir">Pemasukkan Data Produk</span>
          <h1 className="grosir">Daftar Produk</h1>
        </div>
      </div>

      <div className="garis grosir"></div>

      <DaftarProdukForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default DaftarProduk;
