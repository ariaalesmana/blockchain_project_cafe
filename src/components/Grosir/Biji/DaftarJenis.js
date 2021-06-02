import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import DaftarJenisForm from "./DaftarJenisForm";
import showResults from "../../showResults/showResults";
import UserService from "../../../services/user.service";

const DaftarJenis = () => {
  const handleSubmit = (values) => {
    var raw = JSON.stringify(values);
    UserService.addJenis(raw).then(
      (response) => {
        
      },
      (error) => {
        
      }
    );
    showResults("Dimasukkan");
  };

  return (
    <Fragment>
      <DaftarJenisForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default DaftarJenis;
