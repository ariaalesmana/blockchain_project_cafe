import { Fragment, useState, Component } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
// import showResults from "../../showResults/showResults";
import DaftarBatchForm from "./DaftarBatchForm";
import UserService from "../../../services/user.service";
import showResults from "../../showResults/showResults";

export default class DaftarBatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: "",
    };
  }

  onFileChange = (file) => {
    this.setState({
      imageFile: file,
    });
  };

  handleSubmit = (values) => {
    // var raw = JSON.stringify(values);
    const formData = new FormData();
    formData.append('batch_id',values.batch_id);
    formData.append('biji_id',values.biji_id);
    formData.append('jenis_id',values.jenis_id);
    formData.append('proses_id',values.proses_id);
    formData.append('supplier_id',values.supplier_id);
    formData.append('tgl_panen',values.tgl_panen);
    formData.append('volume',values.volume);
    formData.append('files',this.state.imageFile);
    formData.append('fileName',this.state.imageFile.name);
    console.log(formData)

    UserService.addBatch(formData).then(
      (response) => {
        console.log(response)
      },
      (error) => {
      }
    );
    showResults("Dimasukkan");
  };

  render() {
    return (
      <Fragment>
        <DaftarBatchForm onSubmit={this.handleSubmit} onSelectImage={this.onFileChange} />
      </Fragment>
    );
  }
};
