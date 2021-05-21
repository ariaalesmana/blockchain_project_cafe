import { Fragment, useState } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import firebase from "../../../firebase";
import DaftarProdukForm from "./DaftarProdukForm";

const DaftarProduk = () => {
  const db = firebase.firestore();
  const [imageFile, setImageFile] = useState(null);
  const storage = firebase.storage();

  const onFileChange = (file) => {
    setImageFile(file);
  };

  const uploadToFirebase = (file, imagePath) => {
    if (file) {
      const storageRef = storage.ref();

      const imageRef = storageRef.child("produk/" + imagePath);
      imageRef.put(file).then(() => {});
    } else {
    }
  };

  const handleSubmit = (values) => {
    db.collection("produk")
      .add({
        batchID: values.batchID,
        sku: values.sku,
        namaProduk: values.namaProduk,
        tanggalProduksi: values.tanggalProduksi,
        bobot: values.bobot,
        gambarProduk: "",
      })
      .then((docRef) => {
        const dbRef = db.collection("produk").doc(docRef.id);
        dbRef.update({ gambarProduk: docRef.id });

        uploadToFirebase(imageFile, docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
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

      <DaftarProdukForm onSubmit={handleSubmit} onSelectImage={onFileChange} />
    </Fragment>
  );
};

export default DaftarProduk;
