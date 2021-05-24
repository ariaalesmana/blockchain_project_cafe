import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import DaftarJenisForm from "./DaftarJenisForm";

const DaftarJenis = () => {
  const handleSubmit = (values) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(values);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(requestOptions.body);

    fetch("http://localhost:3001/daftarJenis", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
