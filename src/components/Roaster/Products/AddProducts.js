import { Fragment } from "react";
import AddProductForm from "./AddProductForm";
import showResults from "../../showResults/showResults";
import UserService from "../../../services/user.service";

const AddProducts = () => {
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
      <AddProductForm onSubmit={handleSubmit} />
    </Fragment>
  );
};

export default AddProducts;
