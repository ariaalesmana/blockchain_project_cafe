import { Fragment } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import DaftarSupplierForm from "./DaftarSupplierForm";
import showResults from "../../showResults/showResults";
import UserService from "../../../services/user.service";

const DaftarSupplier = () => {
  const handleSubmit = (values) => {
    var raw = JSON.stringify(values);
    console.log(raw);
    UserService.addSupplier(raw).then(
      (response) => {},
      (error) => {}
    );
    showResults("Dimasukkan");
  };

  return (
    <Fragment>
      <DaftarSupplierForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default DaftarSupplier;
