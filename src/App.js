import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MendaftarProduk from "./components/Grosir/MendaftarProduk/MendaftarProduk";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/daftarProduk" exact component={MendaftarProduk} />
    </Router>
  );
}

export default App;
