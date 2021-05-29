import { Fragment, React, useState, useEffect, Component } from "react";
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

export default class ListProduk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
    UserService.getListProduct().then(
      response => {
        console.log('A ' + response.data)
        this.setState({
          content: response.data
        });
        
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    console.log('B '+this.state.content.product)
    const fields = [
      { key: 'product', label: 'Nama Produk', _style: { width: "18%" } },
      { key: "price", _style: { width: "18%" } },
      {
        key: "show_details",
        label: "",
        _style: { width: "16%" },
        filter: false,
      },
    ];
    return (
      <Fragment>
        <main className="c-main">
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
                  <table className="table table-lg responsive striped bordered hover"  >
                    <thead>
                      <tr>
                        <th>Nama</th>
                        <th>Deskripsi</th>
                        <th>Harga</th>
                        <th>SKU</th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.content.product !== undefined ?
                      this.state.content.product.map(function (element, i) {
                        return <tr>
                          <td>{element.product.name}</td>
                          <td>{element.product.description}</td>
                          <td>{element.product.price}</td>
                          <td>{element.product.sku}</td>
                        </tr>;
                      })
                      :
                      ''
                    }
                    </tbody>
                  </table>
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