import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import showResults from "../../showResults/showResults";
import DaftarBijiForm from "./DaftarBijiForm";
import UserService from "../../../services/user.service";

const DaftarBiji = () => {
  const handleSubmit = (values) => {
    var raw = JSON.stringify(values);
    UserService.addBiji(raw).then(
      (response) => {
        
      },
      (error) => {
        
      }
    );

    showResults("Dimasukkan");
  };

  return (
    <Fragment>
      <DaftarBijiForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default DaftarBiji;
