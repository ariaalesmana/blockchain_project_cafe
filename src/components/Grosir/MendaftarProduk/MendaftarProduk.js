import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarProdukForm from "./DaftarProdukForm";

const MendaftarProduk = () => {
  return (
    <Fragment>
      <div className="title grosir">
        <span className="lingkaran grosir"></span>
        <div className="heading grosir">
          <span className="grosir">Pemasukkan Data</span>
          <h1 className="grosir">Mendaftar Produk</h1>
        </div>
      </div>

      <div className="garis grosir"></div>

      <DaftarProdukForm onSubmit={showResults} />
    </Fragment>
  );
};

export default MendaftarProduk;
