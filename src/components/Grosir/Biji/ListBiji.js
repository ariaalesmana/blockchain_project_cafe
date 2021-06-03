import { Fragment, React, Component } from "react";
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
import UserService from "../../../services/user.service";
import showResults from "../../showResults/showResults";

export default class ListBiji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getListJenis().then(
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

  deleteBiji = (item) => {
    UserService.deleteBiji(item.id);
    UserService.getListJenis().then((response) => {
      this.setState({
        content: response.data,
      });
      showResults("Dihapus");
    });
  };

  deleteJenis = (item) => {
    UserService.deleteJenis(item.id);
    UserService.getListJenis().then((response) => {
      this.setState({
        content: response.data,
      });
      showResults("Dihapus");
    });
  };

  deleteProses = (item) => {
    UserService.deleteProses(item.id);
    UserService.getListJenis().then((response) => {
      this.setState({
        content: response.data,
      });
      showResults("Dihapus");
    });
  };

  render() {
    const fieldBiji = [
      { key: "nama_biji", label: "Nama", _style: { width: "40%" } },
      { key: "deskripsi_biji", label: "Deskripsi", _style: { width: "30%" } },
      {
        key: "show_details",
        label: "",
        _style: { width: "10%" },
        filter: false,
      },
    ];
    const fieldJenis = [
      { key: "nama_jenis", label: "Nama", _style: { width: "40%" } },
      { key: "deskripsi_jenis", label: "Deskripsi", _style: { width: "30%" } },
      {
        key: "show_details",
        label: "",
        _style: { width: "10%" },
        filter: false,
      },
    ];
    const fieldProses = [
      { key: "nama_proses", label: "Nama", _style: { width: "40%" } },
      { key: "deskripsi_proses", label: "Deskripsi", _style: { width: "30%" } },
      {
        key: "show_details",
        label: "",
        _style: { width: "10%" },
        filter: false,
      },
    ];

    return (
      <Fragment>
        <main className="c-main">
          <div className="container-fluid">
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
                      <CRow>
                        <CCol xs="12">
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
                                  to="/listBiji/daftarBiji"
                                >
                                  Tambah Data
                                </CButton>
                              </CCol>
                            </CRow>
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={this.state.content.biji}
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
                                        onClick={() => this.deleteBiji(item)}
                                      >
                                        Hapus
                                      </CButton>
                                    </td>
                                  );
                                },
                              }}
                            />
                          </CCardBody>
                        </CCol>
                      </CRow>
                    </CTabPane>
                    <CTabPane>
                      <CRow>
                        <CCol xs="12">
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
                                  to="/listBiji/daftarJenis"
                                >
                                  Tambah Data
                                </CButton>
                              </CCol>
                            </CRow>
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={this.state.content.jenis}
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
                                        onClick={() => this.deleteJenis(item)}
                                      >
                                        Hapus
                                      </CButton>
                                    </td>
                                  );
                                },
                              }}
                            />
                          </CCardBody>
                        </CCol>
                      </CRow>
                    </CTabPane>
                    <CTabPane>
                      <CRow>
                        <CCol xs="12">
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
                                  to="/listBiji/daftarProses"
                                >
                                  Tambah Data
                                </CButton>
                              </CCol>
                            </CRow>
                          </CCardHeader>
                          <CCardBody>
                            <CDataTable
                              items={this.state.content.proses}
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
                                        onClick={() => this.deleteProses(item)}
                                      >
                                        Hapus
                                      </CButton>
                                    </td>
                                  );
                                },
                              }}
                            />
                          </CCardBody>
                        </CCol>
                      </CRow>
                    </CTabPane>
                  </CTabContent>
                </CTabs>
              </CCardBody>
            </CCard>
          </div>
        </main>
      </Fragment>
    );
  }
}
