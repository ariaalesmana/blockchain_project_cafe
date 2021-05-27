import { Fragment, useState } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarBatchForm from "./DaftarBatchForm";

const DaftarBatch = () => {
  const [imageFile, setImageFile] = useState(null);

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
      <DaftarBatchForm onSubmit={handleSubmit} onSelectImage={onFileChange} />
    </Fragment>
  );
};

export default DaftarBatch;
