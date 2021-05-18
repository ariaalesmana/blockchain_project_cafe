import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarProdukForm from "./DaftarProdukForm";

const DaftarProduk = () => {
  // const submit = (values) => {
  //   // print the form values to the console
  //   console.log(values.namaProduk);
  //   console.log(values.deskripsiProduk);
  // };

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

      <DaftarProdukForm onSubmit={showResults} />
    </Fragment>
  );
};

export default DaftarProduk;
