import { React } from "react";
import { Field, reduxForm } from "redux-form";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CCardFooter,
  CRow,
  CCol,
} from "@coreui/react";

const DaftarJenisForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <main class="c-main">
        <div className="container-fluid">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol xs={9} md={10} lg={11} style={{ margin: "auto" }}>
                  <h4 style={{ margin: "auto" }}>Daftar Jenis</h4>
                </CCol>
                <CCol>
                  <CButton block color="dark" to="/listJenis">
                    <span style={{ color: "white" }}>X</span>
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-namaJenis">Nama Jenis</CLabel>
                  <Field
                    className="textInput grosir"
                    name="namaJenis"
                    component="input"
                    type="text"
                    placeholder="Masukkan Nama Jenis.."
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-deskripsiJenis">Deskripsi Jenis</CLabel>
                  <Field
                    className="textAreaInput grosir"
                    name="deskripsiJenis"
                    component="textarea"
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
  form: "daftarJenis", // a unique identifier for this form
})(DaftarJenisForm);
