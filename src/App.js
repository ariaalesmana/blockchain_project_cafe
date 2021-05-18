import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import DaftarProduk from "./components/Grosir/DaftarProduk/DaftarProduk";
import DaftarSupplier from "./components/Grosir/DaftarSupplier/DaftarSupplier";
import DaftarBatch from "./components/Grosir/DaftarBatch/DaftarBatch";
import HalamanUtama from "./components/Grosir/HalamanUtama/HalamanUtama";
import Header from "./components/Header/Header";
import DetailBatch from "./components/Grosir/DetailBatch/DetailBatch";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HalamanUtama} />
      <Route path="/daftarProduk" exact component={DaftarProduk} />
      <Route path="/daftarSupplier" exact component={DaftarSupplier} />
      <Route path="/daftarBatch" exact component={DaftarBatch} />
      <Route path="/detailBatch" exact component={DetailBatch} />
    </Router>
  );
}

export default App;
