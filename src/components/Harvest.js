import { Fragment } from "react";
import "./Harvest.css";
import "./HarvestMedia.css";

function Harvest() {
  return (
    <Fragment>
      <div className="title">
        <span className="lingkaran"></span>
        <div className="heading">
          <span>Pemasukkan Data</span>
          <h1>Menerima Paket</h1>
        </div>
      </div>

      <div className="garis"></div>

      <div className="component">
        <h2>ID</h2>
        <input type="text" className="textInput" />
        <h2>Product ID</h2>
        <input type="text" className="textInput" />
        <h2>Supplier ID</h2>
        <input type="text" className="textInput" />
        <h2>Alamat Supplier</h2>
        <textarea type="text" className="textAreaInput"></textarea>
        <h2>Foto Panen</h2>
        <button className="formButton">Upload Image</button>
        <h2>Tanggal Panen</h2>
        <input type="date" className="textInput" />
      </div>

      <div
        className="garis"
        style={{ marginTop: "5%", marginBottom: "5%" }}
      ></div>

      <div className="footer">
        <button className="cancelButton">Cancel</button>
        <button className="submitButton">Submit</button>
      </div>
    </Fragment>
  );
}

export default Harvest;
