import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.svg";
import accountsIcon from "../../Images/SidebarIcons/accounts-icon.svg";
import homeIcon from "../../Images/SidebarIcons/home-icon.svg";
import sendMoneyIcon from "../../Images/SidebarIcons/send-money-icon.svg";
import topUpIcon from "../../Images/SidebarIcons/top-up-icon.svg";
import userPhoto from "../../Images/userPhoto.svg";

const Sidebar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div>
        <NavLink to="/home">
          <img src={homeIcon} alt="icon" /> Home{" "}
        </NavLink>
      </div>
      <div>
        <NavLink to="/send-money">
          <img src={sendMoneyIcon} alt="icon" /> Send Money
        </NavLink>
      </div>
      <div>
        <NavLink to="/top-up">
          <img src={topUpIcon} alt="icon" /> Top Up
        </NavLink>
      </div>
      <div>
        <NavLink to="/accounts">
          <img src={accountsIcon} alt="icon" /> Accounts
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile">
          <img src={userPhoto} alt="icon" /> Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
