import { React, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CCardFooter,
  CRow,
  CCol,
  CInputFile,
} from "@coreui/react";
import UserService from "../../../services/user.service";

const DaftarBatchForm = (props) => {
  const { handleSubmit, reset } = props;

  const [jenis, setJenis] = useState([]);
  const [biji, setBiji] = useState([]);
  const [proses, setProses] = useState([]);
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    UserService.getAddDetail().then(
      (response) => {
        setJenis(response.data.jenis);
        setBiji(response.data.biji);
        setProses(response.data.proses);
        setSupplier(response.data.supplier);
      },
      (error) => {
        
      }
    );
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    props.onSelectImage(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <main class="c-main">
        <div className="container-fluid">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol xs={9} md={10} lg={11} style={{ margin: "auto" }}>
                  <h4 style={{ margin: "auto" }}>Daftar Batch</h4>
                </CCol>
                <CCol>
                  <CButton block color="dark" to="/listBatch">
                    <span style={{ color: "white" }}>X</span>
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" enctype="multipart/form-data">
              <CFormGroup>
                  <CLabel htmlFor="nf-batchID">Batch ID</CLabel>
                  <Field
                    className="textInput grosir"
                    name="batch_id"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-pilihJenis">Pilih Biji</CLabel>
                  <Field
                    className="textInput grosir"
                    name="biji_id"
                    component="select"
                  >
                    <option value="-----">----</option>
                    {biji &&
                      biji.map((value) => {
                        return (
                          <option key={value.id} value={value.id}>
                            {value.nama_biji}
                          </option>
                        );
                      })}
                  </Field>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-pilihSupplier">Pilih Jenis</CLabel>
                  <Field
                    className="textInput grosir"
                    name="jenis_id"
                    component="select"
                  >
                    <option value="-----">----</option>
                    {jenis &&
                      jenis.map((value) => {
                        return (
                          <option key={value.id} value={value.id}>
                            {value.nama_jenis}
                          </option>
                        );
                      })}
                  </Field>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-pilihSupplier">Pilih Proses</CLabel>
                  <Field
                    className="textInput grosir"
                    name="proses_id"
                    component="select"
                  >
                    <option value="-----">----</option>
                    {proses &&
                      proses.map((value) => {
                        return (
                          <option key={value.id} value={value.id}>
                            {value.nama_proses}
                          </option>
                        );
                      })}
                  </Field>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-pilihSupplier">Pilih Supplier</CLabel>
                  <Field
                    className="textInput grosir"
                    name="supplier_id"
                    component="select"
                  >
                    <option value="-----">----</option>
                    {supplier &&
                      supplier.map((value) => {
                        return (
                          <option key={value.id} value={value.id}>
                            {value.nama_supplier}
                          </option>
                        );
                      })}
                  </Field>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col xs="12" htmlFor="nf-volume">
                    Volume
                  </CLabel>
                  <CCol xs="10">
                    <Field
                      className="textInput grosir"
                      name="volume"
                      component="input"
                      type="number"
                    />
                  </CCol>
                  <CCol xs="2" style={{ margin: "auto" }}>
                    <span>kg</span>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col xs="12" htmlFor="file-gambarPanen">
                    Gambar Panen
                  </CLabel>
                  <CCol xs="12">
                    <CInputFile
                      id="file-input"
                      name="gambar"
                      type='file'
                      onChange={onFileChange}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-tanggalPanen">Tanggal Panen</CLabel>
                  <Field
                    className="textInput grosir"
                    name="tgl_panen"
                    component="input"
                    type="date"
                  />
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary">
                Submit
              </CButton>{" "}
              <CButton type="reset" size="sm" color="danger" onClick={reset}>
                Reset
              </CButton>
            </CCardFooter>
          </CCard>
        </div>
      </main>
    </form>
  );
};

export default reduxForm({
  form: "daftarBatch", // a unique identifier for this form
})(DaftarBatchForm);
