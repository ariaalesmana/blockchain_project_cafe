import { Fragment } from "react";
import "../Roaster.css";
import "../RoasterMedia.css";
import AddRoastingForm from "./AddRoastingForm";
import showResults from "../../showResults/showResults";
import UserService from "../../../services/user.service";

const AddRoasting = () => {
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
      <AddRoastingForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default AddRoasting;
