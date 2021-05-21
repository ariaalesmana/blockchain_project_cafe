import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import firebase from "../../../firebase";
import DaftarJenisForm from "./DaftarJenisForm";

const DaftarJenis = () => {
  const db = firebase.firestore();

  const handleSubmit = (values) => {
    db.collection("jenis").add({
      namaJenis: values.namaJenis,
      deskripsiJenis: values.deskripsiJenis,
    });
    showResults(values);
  };

  return (
    <Fragment>
      <div className="title grosir">
        <span className="lingkaran grosir"></span>
        <div className="heading grosir">
          <span className="grosir">Pemasukkan Data Jenis</span>
          <h1 className="grosir">Daftar Jenis</h1>
        </div>
      </div>

      <div className="garis grosir"></div>

      <DaftarJenisForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default DaftarJenis;
