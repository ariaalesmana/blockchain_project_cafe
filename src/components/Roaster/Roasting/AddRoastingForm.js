import { React, useState } from "react";
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

const AddRoastingForm = (props) => {
  const { handleSubmit, reset } = props;

  return (
    <form onSubmit={handleSubmit}>
      <main class="c-main">
        <div className="container-fluid">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol xs={9} md={10} lg={11} style={{ margin: "auto" }}>
                  <h4 style={{ margin: "auto" }}>Add Roasting Data</h4>
                </CCol>
                <CCol>
                  <CButton
                    block
                    color="dark"
                    to="/roasting"
                    style={{ backgroundColor: "#00c4cc" }}
                  >
                    <span style={{ color: "white" }}>X</span>
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-namaSupplier">Roast Type</CLabel>
                  <Field
                    className="textInput grosir"
                    name="nama_supplier"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-lokasiSupplier">Roasting Profile</CLabel>
                  <Field
                    className="textInput grosir"
                    name="lokasi_supplier"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-subcategory">Roasting Menu</CLabel>
                  <Field
                    className="textInput grosir"
                    id="roastingMenu"
                    name="roastingMenu"
                    component="select"
                  >
                    <option value="-----">----</option>
                    <option value="Single">Single Origin</option>
                    <option value="Blended">Blended</option>
                  </Field>
                </CFormGroup>

                <CFormGroup row>
                  <CLabel col xs="12" htmlFor="nf-subcategory">
                    Select Bean
                  </CLabel>
                  <CCol xs="10">
                    <Field
                      className="textInput grosir"
                      name="selectBeanSingle"
                      component="select"
                    >
                      <option value="-----">----</option>
                      <option value="Arabica">Arabica</option>
                      <option value="Robusta">Robusta</option>
                    </Field>
                  </CCol>
                  <CCol xs="2" style={{ margin: "auto" }}>
                    <CButton size="sm" color="secondary">
                      Scan QR Code
                    </CButton>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CLabel col xs="5" htmlFor="selectBean">
                    Select Bean
                  </CLabel>
                  <CLabel col xs="5" htmlFor="persentase">
                    Persentase
                  </CLabel>
                  <CCol xs="5">
                    <Field
                      className="textInput grosir"
                      name="selectBeanMultiple"
                      component="select"
                    >
                      <option value="-----">----</option>
                      <option value="Arabica">Arabica</option>
                      <option value="Robusta">Robusta</option>
                    </Field>
                  </CCol>
                  <CCol xs="3">
                    <Field
                      className="textInput grosir"
                      name="persentase"
                      component="input"
                      type="text"
                    />
                  </CCol>
                  <CCol xs="2" style={{ margin: "auto" }}>
                    <span>%</span>
                  </CCol>
                  <CCol xs="2" style={{ margin: "auto" }}>
                    <CButton size="sm" color="secondary">
                      Scan QR Code
                    </CButton>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col xs="12" htmlFor="nf-weight">
                    Amount
                  </CLabel>
                  <CCol xs="10">
                    <Field
                      className="textInput grosir"
                      name="weight"
                      component="input"
                      type="text"
                    />
                  </CCol>
                  <CCol xs="2" style={{ margin: "auto" }}>
                    <span>packs / bag</span>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col xs="12" htmlFor="nf-weight">
                    Weight
                  </CLabel>
                  <CCol xs="10">
                    <Field
                      className="textInput grosir"
                      name="weight"
                      component="input"
                      type="text"
                    />
                  </CCol>
                  <CCol xs="2" style={{ margin: "auto" }}>
                    <span>g</span>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                size="sm"
                color="primary"
                style={{ backgroundColor: "#178d88" }}
              >
                Submit
              </CButton>{" "}
              <CButton
                type="reset"
                size="sm"
                color="danger"
                onClick={reset}
                style={{ backgroundColor: "#e2602c" }}
              >
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
  form: "addRoasting", // a unique identifier for this form
})(AddRoastingForm);
