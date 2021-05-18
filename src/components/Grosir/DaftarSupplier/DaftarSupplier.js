import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarSupplierForm from "./DaftarSupplierForm";

const DaftarSupplier = () => {
  return (
    <Fragment>
      <div className="title grosir">
        <span className="lingkaran grosir"></span>
        <div className="heading grosir">
          <span className="grosir">Pemasukkan Data Supplier</span>
          <h1 className="grosir">Daftar Supplier</h1>
        </div>
      </div>

      <div className="garis grosir"></div>

      <DaftarSupplierForm onSubmit={showResults} />
    </Fragment>
  );
};

export default DaftarSupplier;
