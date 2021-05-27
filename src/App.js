import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HalamanUtama from "./components/Grosir/HalamanUtama/HalamanUtama";
import DaftarJenis from "./components/Grosir/Jenis/DaftarJenis";
import ListJenis from "./components/Grosir/Jenis/ListJenis";
import DaftarSupplier from "./components/Grosir/Supplier/DaftarSupplier";
import ListSupplier from "./components/Grosir/Supplier/ListSupplier";
import DaftarBatch from "./components/Grosir/Batch/DaftarBatch";
import ListBatch from "./components/Grosir/Batch/ListBatch";
import DaftarProduk from "./components/Grosir/Produk/DaftarProduk";
import ListProduk from "./components/Grosir/Produk/ListProduk";
import "./scss/style.scss";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HalamanUtama} />
      <Route path="/listJenis" exact component={ListJenis} />
      <Route path="/listSupplier" exact component={ListSupplier} />
      <Route path="/listBatch" exact component={ListBatch} />
      <Route path="/listProduk" exact component={ListProduk} />
      <Route path="/listJenis/daftar" exact component={DaftarJenis} />
      <Route path="/listSupplier/daftar" exact component={DaftarSupplier} />
      <Route path="/listBatch/daftar" exact component={DaftarBatch} />
      <Route path="/listProduk/daftar" exact component={DaftarProduk} />
    </Router>
  );
}

export default App;
