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
} from "@coreui/react";

const DaftarProdukForm = (props) => {
  const { handleSubmit, reset } = props;

  const [batch, setBatch] = useState([]);

  const getBatch = async () => {
    const events = await firebase
      .firestore()
      .collection("batch")
      .orderBy("tanggalPanen", "desc");
    events.get().then((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() });
      });
      setBatch(tempDoc);
    });
  };

  useEffect(() => {
    getBatch();
  }, []);

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
                            {value.batchID}
                          </option>
                        );
                      })}
                  </Field>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-SKU">SKU</CLabel>
                  <Field
                    className="textInput grosir"
                    name="SKU"
                    component="input"
                    type="text"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-namaProduk">Nama Produk</CLabel>
                  <Field
                    className="textInput grosir"
                    name="namaProduk"
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
                  <CLabel htmlFor="nf-tanggalProduksi">Tanggal Produksi</CLabel>
                  <Field
                    className="textInput grosir"
                    name="tanggalProduksi"
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
  form: "daftarProduk", // a unique identifier for this form
})(DaftarProdukForm);
