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
  CCardFooter,
  CRow,
  CCol,
} from "@coreui/react";

const DaftarBijiForm = (props) => {
  const { handleSubmit, reset } = props;

  return (
    <form onSubmit={handleSubmit}>
      <main class="c-main">
        <div className="container-fluid">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol xs={9} md={10} lg={11} style={{ margin: "auto" }}>
                  <h4 style={{ margin: "auto" }}>Daftar Proses</h4>
                </CCol>
                <CCol>
                  <CButton block color="dark" to="/listBiji">
                    <span style={{ color: "white" }}>X</span>
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-namaProses">Nama Proses</CLabel>
                  <Field
                    className="textInput grosir"
                    name="nama_proses"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-deskripsiProses">Deskripsi Proses</CLabel>
                  <Field
                    className="textAreaInput grosir"
                    name="deskripsi_proses"
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
  form: "daftarBiji", // a unique identifier for this form
})(DaftarBijiForm);
