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

  const fields = [
    { key: "namaJenis", _style: { width: "40%" } },
    { key: "deskripsiJenis", _style: { width: "30%" } },
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
                <CCardHeader>
                  <CRow>
                    <CCol xs={6} md={7} lg={10} style={{ margin: "auto" }}>
                      <h4 style={{ margin: "auto" }}>List Jenis</h4>
                    </CCol>
                    <CCol>
                      <CButton block color="dark" to="/listJenis/daftar">
                        Tambah Jenis
                      </CButton>
                    </CCol>
                  </CRow>
                </CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={jenis}
                    fields={fields}
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
              </CCard>
            </CCol>
          </CRow>
        </div>
      </main>
    </Fragment>
  );
};

export default ListJenis;
