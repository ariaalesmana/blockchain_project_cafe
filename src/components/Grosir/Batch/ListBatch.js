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

const ListBatch = () => {
  const [batch, setBatch] = useState([]);

  useEffect(() => {
    getBatch();
  }, []);

  const getBatch = async () => {
    var request = require("request");
    var options = {
      method: "GET",
      url: "http://localhost:3001/getBatch",
      headers: {},
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      var obj = JSON.parse(response.body);
      setBatch(obj);
    });
  };

  const deleteBatch = (item) => {
    // var request = require("request");
    // var options = {
    //   method: "DELETE",
    //   url: "http://localhost:3001/deleteBatch/" + item,
    //   headers: {},
    // };
    // request(options, function (error, response) {
    //   if (error) throw new Error(error);
    //   console.log(response.body);
    // });
    // showResults("Dihapus");
  };

  const fields = [
    { key: "batchID", _style: { width: "16%" } },
    { key: "pilihJenis", _style: { width: "14%" } },
    { key: "pilihSupplier", _style: { width: "14%" } },
    { key: "volume", _style: { width: "14%" } },
    { key: "varietas", _style: { width: "14%" } },
    { key: "proses", _style: { width: "14%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "14%" },
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
                      <h4 style={{ margin: "auto" }}>List Batch</h4>
                    </CCol>
                    <CCol>
                      <CButton block color="dark" to="/listBatch/daftar">
                        Tambah Batch
                      </CButton>
                    </CCol>
                  </CRow>
                </CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={batch}
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
                                deleteBatch(item.id);
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

export default ListBatch;
