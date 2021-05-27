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
      bobot: values.bobot,
    });

    showResults(values);
  };

  return (
    <Fragment>
      <DaftarProdukForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default DaftarProduk;
