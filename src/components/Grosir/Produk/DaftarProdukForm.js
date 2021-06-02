import { React, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import firebase from "../../../firebase";
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
  CInputFile
} from "@coreui/react";
import UserService from "../../../services/user.service";

const DaftarProdukForm = (props) => {
  const { handleSubmit, reset } = props;

  const [batch, setBatch] = useState([]);

  const getBatch = async () => {
    UserService.getListBatch().then(
      (response) => {
        setBatch(response.data.batch);
      },
      (error) => {
        
      }
    );
  };

  useEffect(() => {
    getBatch();
  }, []);

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
                  <h4 style={{ margin: "auto" }}>Daftar Produk</h4>
                </CCol>
                <CCol>
                  <CButton block color="dark" to="/listProduk">
                    <span style={{ color: "white" }}>X</span>
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-batchID">Batch ID</CLabel>
                  <Field
                    className="textInput grosir"
                    name="batchID"
                    component="select"
                  >
                    <option value="-----">----</option>
                    {batch &&
                      batch.map((value) => {
                        return (
                          <option key={value.id} value={value.id}>
                            {value.batch_id}
                          </option>
                        );
                      })}
                  </Field>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-name">Nama Produk</CLabel>
                  <Field
                    className="textInput grosir"
                    name="name"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-description">Deskripsi</CLabel>
                  <Field
                    className="textInput grosir"
                    name="description"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-short_description">Deskripsi Singkat</CLabel>
                  <Field
                    className="textInput grosir"
                    name="short_description"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-price">Harga</CLabel>
                  <Field
                    className="textInput grosir"
                    name="price"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-unit">Unit</CLabel>
                  <Field
                    className="textInput grosir"
                    name="unit"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-sku">SKU</CLabel>
                  <Field
                    className="textInput grosir"
                    name="sku"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-vendor_sku">VENDOR SKU</CLabel>
                  <Field
                    className="textInput grosir"
                    name="vendor_sku"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col xs="12" htmlFor="nf-berat">
                    Berat
                  </CLabel>
                  <CCol xs="10">
                    <Field
                      className="textInput grosir"
                      name="berat"
                      component="input"
                      type="text"
                    />
                  </CCol>
                  <CCol xs="2" style={{ margin: "auto" }}>
                    <span>g</span>
                  </CCol>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-tgl_produksi">Tanggal Produksi</CLabel>
                  <Field
                    className="textInput grosir"
                    name="tgl_produksi"
                    component="input"
                    type="date"
                  />
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
  form: "daftarProduk", // a unique identifier for this form
})(DaftarProdukForm);
