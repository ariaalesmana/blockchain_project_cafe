import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/api/v1/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }

  getListJenis() {
    return axios.get(API_URL + "list-jenis", { headers: authHeader() });
  }

  getDetailJenis(id) {
    return axios.get(API_URL + "detail-jenis/" + id, { headers: authHeader() });
  }

  deleteJenis(id) {
    return axios.get(API_URL + "delete-jenis/" + id, { headers: authHeader() });
  }

  getListSupplier() {
    return axios.get(API_URL + "list-supplier", { headers: authHeader() });
  }

  getDetailSupplier(id) {
    return axios.get(API_URL + "detail-supplier/" + id, {
      headers: authHeader(),
    });
  }

  deleteSupplier(id) {
    return axios.get(API_URL + "delete-supplier/" + id, {
      headers: authHeader(),
    });
  }

  getListBatch() {
    return axios.get(API_URL + "list-batch", { headers: authHeader() });
  }

  getDetailBatch(id) {
    return axios.get(API_URL + "detail-batch/" + id, { headers: authHeader() });
  }

  deleteBatch(id) {
    return axios.get(API_URL + "delete-batch/" + id, { headers: authHeader() });
  }

  getListProduct() {
    return axios.get(API_URL + "list-product", { headers: authHeader() });
  }

  getDetailProduct(id) {
    return axios.get(API_URL + "detail-product/" + id, {
      headers: authHeader(),
    });
  }

  deleteProduct(id) {
    return axios.get(API_URL + "delete-product/" + id, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
