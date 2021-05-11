import react from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "./HeaderMedia.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="headerLogo">
        <h1>Logo</h1>
      </Link>
      <NavLink
        to="/daftarProduk"
        className="headerUnit"
        activeClassName="active"
      >
        <h2>Daftar Produk</h2>
      </NavLink>
      <NavLink
        to="/daftarSupplier"
        className="headerUnit"
        activeClassName="active"
      >
        <h2>Daftar Supplier</h2>
      </NavLink>
      <NavLink
        to="/daftarBatch"
        className="headerUnit"
        activeClassName="active"
      >
        <h2>Daftar Batch</h2>
      </NavLink>
    </div>
  );
};

export default Header;
