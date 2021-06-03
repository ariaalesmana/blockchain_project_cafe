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
} from "@coreui/react";
import showResults from "../../showResults/showResults";
import UserService from "../../../services/user.service";

export default class ListBatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getListBatch().then(
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

  deleteBatch = (item) => {
    UserService.deleteBatch(item.id);
    UserService.getListBatch().then((response) => {
      this.setState({
        content: response.data,
      });
      showResults("Dihapus");
    });
  };

  render() {
    const fields = [
      { key: "batch_id", _style: { width: "16%" } },
      { key: "jenis_id", _style: { width: "14%" } },
      { key: "supplier_id", _style: { width: "14%" } },
      { key: "volume", _style: { width: "14%" } },
      { key: "biji_id", _style: { width: "14%" } },
      { key: "proses_id", _style: { width: "14%" } },
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
                        <h4 style={{ margin: "auto" }}>Data Batch</h4>
                      </CCol>
                      <CCol>
                        <CButton block color="dark" to="/listBatch/daftar">
                          Tambah Data
                        </CButton>
                      </CCol>
                    </CRow>
                  </CCardHeader>
                  <CCardBody>
                    <CDataTable
                      items={this.state.content.batch}
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
                                onClick={() => this.deleteBatch(item)}
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
