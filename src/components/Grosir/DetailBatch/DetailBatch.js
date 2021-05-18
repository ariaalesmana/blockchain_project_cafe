import { Fragment } from "react";

const DetailBatch = () => {
  return (
    <Fragment>
      <div className="title grosir">
        <span className="lingkaran grosir"></span>
        <div className="heading grosir">
          <span className="grosir">Detail Batch</span>
          <h1 className="grosir">Green Beans</h1>
        </div>
      </div>

      <div className="garis grosir"></div>

      <div className="component grosir">
        <div className="detailForm grosir">
          <h3 className="namaDetail grosir">BATCH ID:</h3>
          <span className="detailForm grosir">34rywi48875</span>
        </div>

        <div className="detailForm grosir">
          <h3>TANGGAL DIBUAT:</h3>
          <span>Apr 16, 2021 11:20 AM</span>
        </div>

        <div
          className="garis grosir"
          style={{ marginTop: "30px", marginBottom: "30px", opacity: "30%" }}
        ></div>

        <h2 className="batchTitle grosir">DETAIL PRODUK</h2>

        <div className="detailForm grosir">
          <h3>NAMA PRODUK:</h3>
          <span>Green Beans Arabika</span>
        </div>

        <div className="detailForm grosir">
          <h3>DESKRIPSI:</h3>
          <span style={{ lineHeight: "1.5", textAlign: "justify" }}>
            Kopi Arabika adalah salah satu dari dua spesies tanaman kopi yang
            ada berada dalam budidaya secara global. (yang lainnya adalah C.
            Canephora, atau yang biasa kita kenal dengan sebutan Kopi Robusta).
            Arabika adalah spesies kopi yang dominan di Amerika Tengah, dan
            selatan, dan sebagian besar Negara Afrika Timur, dan dianggap
            menghasilkan kualitas cup tertinggi. Spesies Arabika terdiri dari
            banyak varietas atau kultivar/jenis-jenis yang berbeda yang dapat
            bereproduksi secara seksual satu sama lain.
          </span>
        </div>

        <div
          className="garis grosir"
          style={{ marginTop: "30px", marginBottom: "30px", opacity: "30%" }}
        ></div>

        <h2 className="batchTitle grosir">DETAIL SUPPLIER</h2>

        <div className="detailForm grosir">
          <h3>NAMA SUPPLIER:</h3>
          <span>Lokasi A</span>
        </div>

        <div className="detailForm grosir">
          <h3>LOKASI SUPPLIER:</h3>
          <span style={{ lineHeight: "1.5", textAlign: "justify" }}>
            Kintamani, Bali <br></br>
            8.2574° S, 115.3549° E <br></br>
            2,400m
          </span>
        </div>

        <div
          className="garis grosir"
          style={{ marginTop: "30px", marginBottom: "30px", opacity: "30%" }}
        ></div>

        <h2 className="batchTitle grosir">DETAIL BATCH</h2>

        <div className="detailForm grosir">
          <h3>GAMBAR PANEN:</h3>
          <img
            src="images/logo-qr-code.png"
            alt="Scan QR Code"
            style={{ width: "50px", margin: "auto" }}
          />
        </div>

        <div className="detailForm grosir">
          <h3>TANGGAL PANEN:</h3>
          <span style={{ lineHeight: "1.5", textAlign: "justify" }}>
            Aug 21, 2021
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailBatch;
