import { Fragment, useState } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarBatchForm from "./DaftarBatchForm";
import firebase from "../../../firebase";

const DaftarBatch = () => {
  const db = firebase.firestore();
  const [imageFile, setImageFile] = useState(null);
  const storage = firebase.storage();

  const uploadToFirebase = (file, imagePath) => {
    if (file) {
      const storageRef = storage.ref();

      const imageRef = storageRef.child("batch/" + imagePath);
      imageRef.put(file).then(() => {});
    } else {
    }
  };

  const onFileChange = (file) => {
    setImageFile(file);
  };

  const handleSubmit = (values) => {
    db.collection("batch")
      .doc(values.batchID)
      .set({
        batchID: values.batchID,
        pilihJenis: values.pilihJenis,
        pilihSupplier: values.pilihSupplier,
        volume: values.volume,
        varietas: values.varietas,
        proses: values.proses,
        gambar: "",
        tanggalPanen: values.tanggalPanen,
      })
      .then(() => {
        const dbRef = db.collection("batch").doc(values.batchID);
        dbRef.update({ gambar: values.batchID });

        uploadToFirebase(imageFile, values.batchID);
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
          <span className="grosir">Pemasukkan Data Batch</span>
          <h1 className="grosir">Daftar Batch</h1>
        </div>
      </div>

      <div className="garis grosir"></div>

      <DaftarBatchForm onSubmit={handleSubmit} onSelectImage={onFileChange} />
    </Fragment>
  );
};

export default DaftarBatch;
