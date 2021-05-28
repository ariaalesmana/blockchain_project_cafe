import { Fragment, React, useState, useEffect } from "react";
import "../Grosir.css";
import "../GrosirMedia.css";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
import showResults from "../../showResults/showResults";

const ListJenis = () => {
  const [jenis, setJenis] = useState([]);

  useEffect(() => {
    getJenis();
  }, []);

  const getJenis = async () => {
    var request = require("request");
    var options = {
      method: "GET",
      url: "http://localhost:3001/getJenis",
      headers: {},
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      var obj = JSON.parse(response.body);
      setJenis(obj);
    });
  };

  const deleteJenis = (item) => {
    var request = require("request");
    var options = {
      method: "DELETE",
      url: "http://localhost:3001/deleteJenis/" + item,
      headers: {},
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      showResults("Dihapus");
    });
    getJenis();
  };

  const fieldJenis = [
    { key: "namaJenis", label: "Nama", _style: { width: "40%" } },
    { key: "deskripsiJenis", label: "Deskripsi", _style: { width: "30%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "10%" },
      filter: false,
    },
  ];

  const fieldBiji = [
    { key: "namaJenis", label: "Nama", _style: { width: "40%" } },
    { key: "deskripsiJenis", label: "Deskripsi", _style: { width: "30%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "10%" },
      filter: false,
    },
  ];

  const fieldProses = [
    { key: "namaJenis", label: "Nama", _style: { width: "40%" } },
    { key: "deskripsiJenis", label: "Deskripsi", _style: { width: "30%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "10%" },
      filter: false,
    },
  ];

  return (
    <Fragment>
      <main class="c-main">
        <div className="container-fluid">
          <CRow>
            <CCol xs="12">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Biji</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Jenis</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Proses</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <CCardHeader>
                          <CRow>
                            <CCol
                              xs={6}
                              md={7}
                              lg={10}
                              style={{ margin: "auto" }}
                            >
                              <h4 style={{ margin: "auto" }}>Data Biji</h4>
                            </CCol>
                            <CCol>
                              <CButton
                                block
                                color="dark"
                                // to="/listJenis/daftar"
                              >
                                Tambah Data
                              </CButton>
                            </CCol>
                          </CRow>
                        </CCardHeader>
                        <CCardBody>
                          <CDataTable
                            // items={jenis}
                            fields={fieldBiji}
                            itemsPerPage={10}
                            pagination
                            scopedSlots={{
                              show_details: (item) => {
                                return (
                                  <td className="py-2">
                                    <CButton size="sm" color="info">
                                      Edit
                                    </CButton>
                                    <CButton
                                      size="sm"
                                      color="danger"
                                      className="ml-1"
                                      onClick={() => {
                                        deleteJenis(item.id);
                                      }}
                                    >
                                      Hapus
                                    </CButton>
                                  </td>
                                );
                              },
                            }}
                          />
                        </CCardBody>
                      </CTabPane>
                      <CTabPane>
                        <CCardHeader>
                          <CRow>
                            <CCol
                              xs={6}
                              md={7}
                              lg={10}
                              style={{ margin: "auto" }}
                            >
                              <h4 style={{ margin: "auto" }}>Data Jenis</h4>
                            </CCol>
                            <CCol>
                              <CButton
                                block
                                color="dark"
                                to="/listJenis/daftar"
                              >
                                Tambah Data
                              </CButton>
                            </CCol>
                          </CRow>
                        </CCardHeader>
                        <CCardBody>
                          <CDataTable
                            items={jenis}
                            fields={fieldJenis}
                            itemsPerPage={10}
                            pagination
                            scopedSlots={{
                              show_details: (item) => {
                                return (
                                  <td className="py-2">
                                    <CButton size="sm" color="info">
                                      Edit
                                    </CButton>
                                    <CButton
                                      size="sm"
                                      color="danger"
                                      className="ml-1"
                                      onClick={() => {
                                        deleteJenis(item.id);
                                      }}
                                    >
                                      Hapus
                                    </CButton>
                                  </td>
                                );
                              },
                            }}
                          />
                        </CCardBody>
                      </CTabPane>
                      <CTabPane>
                        <CCardHeader>
                          <CRow>
                            <CCol
                              xs={6}
                              md={7}
                              lg={10}
                              style={{ margin: "auto" }}
                            >
                              <h4 style={{ margin: "auto" }}>Data Proses</h4>
                            </CCol>
                            <CCol>
                              <CButton
                                block
                                color="dark"
                                // to="/listJenis/daftar"
                              >
                                Tambah Data
                              </CButton>
                            </CCol>
                          </CRow>
                        </CCardHeader>
                        <CCardBody>
                          <CDataTable
                            // items={jenis}
                            fields={fieldProses}
                            itemsPerPage={10}
                            pagination
                            scopedSlots={{
                              show_details: (item) => {
                                return (
                                  <td className="py-2">
                                    <CButton size="sm" color="info">
                                      Edit
                                    </CButton>
                                    <CButton
                                      size="sm"
                                      color="danger"
                                      className="ml-1"
                                      onClick={() => {
                                        deleteJenis(item.id);
                                      }}
                                    >
                                      Hapus
                                    </CButton>
                                  </td>
                                );
                              },
                            }}
                          />
                        </CCardBody>
                      </CTabPane>
                    </CTabContent>
                  </CTabs>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
      </main>
    </Fragment>
  );
};

export default ListJenis;
