import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import "./HeaderMedia.css";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CNavbarText,
  CToggler,
  CNavLink,
  CDropdown,
  CForm,
  CInput,
  CButton,
  CImg,
} from "@coreui/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [navbarText, setNavbarText] = useState(false);
  return (
    // <div className="header">
    //   <Link to="/" className="headerLogo">
    //     <img src="images/logo-kopi-ketjil.png" alt="Logo Kopi Ketjil" />
    //   </Link>
    //   <NavLink
    //     to="/daftarJenis"
    //     className="headerUnit"
    //     activeClassName="active"
    //   >
    //     <h2>Daftar Jenis</h2>
    //   </NavLink>
    //   <NavLink
    //     to="/daftarSupplier"
    //     className="headerUnit"
    //     activeClassName="active"
    //   >
    //     <h2>Daftar Supplier</h2>
    //   </NavLink>
    //   <NavLink
    //     to="/daftarBatch"
    //     className="headerUnit"
    //     activeClassName="active"
    //   >
    //     <h2>Daftar Batch</h2>
    //   </NavLink>
    //   <NavLink
    //     to="/daftarProduk"
    //     className="headerUnit"
    //     activeClassName="active"
    //   >
    //     <h2>Daftar Produk</h2>
    //   </NavLink>
    // </div>

    <CNavbar expandable="sm" color="dark">
      <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
      <CNavbarBrand href="/">
        <CImg
          src="images/logo-kopi-ketjil.png"
          className="d-inline-block align-top"
          alt="CoreuiVue"
        />
      </CNavbarBrand>
      <CCollapse show={isOpen} navbar>
        <CNavbarNav>
          <CNavLink to="/listJenis">Jenis</CNavLink>
          <CNavLink to="/listSupplier">Supplier</CNavLink>
          <CNavLink to="/listBatch">Batch</CNavLink>
          <CNavLink to="/listProduk">Produk</CNavLink>
        </CNavbarNav>
        <CNavbarNav className="ml-auto">
          <CDropdown inNav>
            <CDropdownToggle color="primary">User</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Account</CDropdownItem>
              <CDropdownItem>Settings</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CNavbar>
  );
};

export default Header;
