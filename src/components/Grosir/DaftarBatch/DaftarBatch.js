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
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify(values);
    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };
    // console.log(requestOptions.body);
    // fetch("http://localhost:3001/daftarBatch", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
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
