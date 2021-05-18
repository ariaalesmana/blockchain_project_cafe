import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarProdukForm from "./DaftarBatchForm";

const DaftarBatch = () => {
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

      <DaftarProdukForm onSubmit={showResults} />
    </Fragment>
  );
};

export default DaftarBatch;
