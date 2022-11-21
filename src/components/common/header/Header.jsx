import React from "react";
import "./Header.css";
import "../styles/CommonStyles.css";
import '../styles/CommonVariables.css'
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header d-flex">
      <div className="header-logo absolute-center">
        <img src="https://www.putatoe.com/img/logo.png" alt="logo" />
        <div className="header-logo-name d-flex dir-col">
          <div className="logo-name">PUTATOE</div>
          {/* PUTATOE */}
          <div className="punch-line">One Solution</div>
        </div>
      </div>
      <div className="header-location-searchBar absolute-center">
        <div className="location-wrapper d-flex">
          <div className="location-icon-name d-flex">
            <LocationOnIcon className="location-icon absolute-center" />
            <span className="location-text">Janakpuri, New Delhi</span>
          </div>
          <ArrowDropDownIcon className="caret-down" />
        </div>
        <div className="location-sepeartor"></div>
        <div className="searchBar-wrapper d-flex">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search For Products and Brands"
            className="search-Input"
          />
        </div>
      </div>
      <div className="header-icons d-flex">
        <ChatIcon/>
        <ShoppingCartIcon/>
        <NotificationsActiveIcon/>
      </div>
      <div className="profile-wrapper absolute-center">
        <AccountCircleIcon className="account-circle" />
        <span className="header-username"></span>
      </div>
    </div>
  );
}

export default Header;
