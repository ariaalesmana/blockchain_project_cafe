import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarBijiForm from "./DaftarBijiForm";
import DaftarProsesForm from "./DaftarProsesForm";
import UserService from "../../../services/user.service";

const DaftarProses = () => {
  const handleSubmit = (values) => {
    var raw = JSON.stringify(values);
    UserService.addProses(raw).then(
      (response) => {
        
      },
      (error) => {
        
      }
    );
    showResults("Dimasukkan");
  };

  return (
    <Fragment>
      <DaftarProsesForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default DaftarProses;
