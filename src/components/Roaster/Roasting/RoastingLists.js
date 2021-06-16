import { Fragment, React, useState, useEffect, Component } from "react";
import "../Roaster.css";
import "../RoasterMedia.css";
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
import UserService from "../../../services/user.service";

export default class RoastingLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getListSupplier().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  deleteSupplier = (item) => {
    UserService.deleteSupplier(item.id);
    UserService.getListSupplier().then((response) => {
      this.setState({
        content: response.data,
      });
      showResults("Dihapus");
    });
  };

  render() {
    const fields = [
      {
        key: "nama_supplier",
        label: "Roasting Product",
        _style: { width: "40%" },
      },
      {
        key: "lokasi_supplier",
        label: "Volume",
        _style: { width: "30%" },
      },
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
                        <h4 style={{ margin: "auto" }}>Roasting Data</h4>
                      </CCol>
                      <CCol>
                        <CButton
                          block
                          color="dark"
                          to="/roasting/addRoasting"
                          style={{ backgroundColor: "#00c4cc" }}
                        >
                          Add
                        </CButton>
                      </CCol>
                    </CRow>
                  </CCardHeader>
                  <CCardBody>
                    <CDataTable
                      items={this.state.content.supplier}
                      fields={fields}
                      itemsPerPage={10}
                      pagination
                      scopedSlots={{
                        show_details: (item) => {
                          return (
                            <td className="py-2">
                              <CButton
                                size="sm"
                                color="info"
                                style={{ backgroundColor: "#178d88" }}
                              >
                                Edit
                              </CButton>
                              <CButton
                                size="sm"
                                color="danger"
                                className="ml-1"
                                onClick={() => this.deleteSupplier(item)}
                                style={{ backgroundColor: "#e2602c" }}
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
  }
}
