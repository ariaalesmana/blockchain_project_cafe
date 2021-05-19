import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "./HeaderMedia.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="headerLogo">
        <img src="images/logo-kopi-ketjil.png" alt="Logo Kopi Ketjil" />
      </Link>
      <NavLink
        to="/daftarJenis"
        className="headerUnit"
        activeClassName="active"
      >
        <h2>Daftar Jenis</h2>
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
      <NavLink
        to="/daftarProduk"
        className="headerUnit"
        activeClassName="active"
      >
        <h2>Daftar Produk</h2>
      </NavLink>
    </div>
  );
};

export default Header;
