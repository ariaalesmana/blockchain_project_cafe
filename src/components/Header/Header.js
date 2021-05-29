import React, { useState } from "react";
import { connect } from "react-redux";
import "./Header.css";
import "./HeaderMedia.css";
import {
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CToggler,
  CNavLink,
  CDropdown,
  CImg,
} from "@coreui/react";
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

import { history } from '../../helpers/history';


const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const logOut = e => {
    props.dispatch(logout());
  }
  
  return (
    <CNavbar expandable="sm" color="dark">
      <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
      <CNavbarBrand href="/">
        <CImg
          src="images/logo-kopi-ketjil.png"
          className="d-inline-block align-top"
          alt="logo-kopi-ketjil"
        />
      </CNavbarBrand>
      <CCollapse show={isOpen} navbar>
        <CNavbarNav>
          <CNavLink to="/listJenis">Biji</CNavLink>
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
              <CDropdownItem onClick={logOut}>
                LogOut
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CNavbar>
  );
};

export default Header;
