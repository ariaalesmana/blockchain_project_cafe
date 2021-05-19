import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HalamanUtama from "./components/Grosir/HalamanUtama/HalamanUtama";
import DaftarJenis from "./components/Grosir/DaftarJenis/DaftarJenis";
import DaftarSupplier from "./components/Grosir/DaftarSupplier/DaftarSupplier";
import DaftarBatch from "./components/Grosir/DaftarBatch/DaftarBatch";
import DetailBatch from "./components/Grosir/DetailBatch/DetailBatch";
import DaftarProduk from "./components/Grosir/DaftarProduk/DaftarProduk";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HalamanUtama} />
      <Route path="/daftarJenis" exact component={DaftarJenis} />
      <Route path="/daftarSupplier" exact component={DaftarSupplier} />
      <Route path="/daftarBatch" exact component={DaftarBatch} />
      <Route path="/detailBatch" exact component={DetailBatch} />
      <Route path="/daftarProduk" exact component={DaftarProduk} />
    </Router>
  );
}

export default App;
