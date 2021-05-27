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

const ListProduk = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    getProduk();
  }, []);

  const getProduk = async () => {
    var request = require("request");
    var options = {
      method: "GET",
      url: "http://localhost:3001/getProduk",
      headers: {},
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      var obj = JSON.parse(response.body);
      setProduk(obj);
    });
  };

  const deleteProduk = (item) => {
    // var request = require("request");
    // var options = {
    //   method: "DELETE",
    //   url: "http://localhost:3001/deleteProduk/" + item,
    //   headers: {},
    // };
    // request(options, function (error, response) {
    //   if (error) throw new Error(error);
    //   console.log(response.body);
    // });
    // showResults("Dihapus");
  };

  const fields = [
    { key: "batchID", _style: { width: "18%" } },
    { key: "namaProduk", _style: { width: "18%" } },
    { key: "SKU", _style: { width: "16%" } },
    { key: "berat", _style: { width: "16%" } },
    { key: "tanggalProduksi", _style: { width: "16%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "16%" },
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
                      <h4 style={{ margin: "auto" }}>List Produk</h4>
                    </CCol>
                    <CCol>
                      <CButton block color="dark" to="/listProduk/daftar">
                        Tambah Produk
                      </CButton>
                    </CCol>
                  </CRow>
                </CCardHeader>
                <CCardBody>
                  <CDataTable
                    items={produk}
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
                                deleteProduk(item.id);
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

export default ListProduk;
