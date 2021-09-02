import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.svg";
import accountsIcon from "../../Images/SidebarIcons/accounts-icon.svg";
import homeIcon from "../../Images/SidebarIcons/home-icon.svg";
import sendMoneyIcon from "../../Images/SidebarIcons/send-money-icon.svg";
import topUpIcon from "../../Images/SidebarIcons/top-up-icon.svg";
import userPhoto from "../../Images/UsersPhoto/profilePhoto.svg";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" style={{ width: 40 }} />
      <div className={styles.menuItem}>
        <NavLink to="/home" activeClassName={styles.active}>
          <img src={homeIcon} alt="icon" /> Home
        </NavLink>
      </div>

      <div className={styles.menuItem}>
        <NavLink to="/send-money" activeClassName={styles.active}>
          <img src={sendMoneyIcon} alt="icon" /> Send Money
        </NavLink>
      </div>

      <div className={styles.menuItem}>
        <NavLink to="/top-up" activeClassName={styles.active}>
          <img src={topUpIcon} alt="icon" /> Top Up
        </NavLink>
      </div>

      <div className={styles.menuItem}>
        <NavLink to="/accounts" activeClassName={styles.active}>
          <img src={accountsIcon} alt="icon" /> Accounts
        </NavLink>
      </div>

      <div className={styles.profileItem}>
        <NavLink to="/profile" activeClassName={styles.active}>
          <img src={userPhoto} alt="icon" /> Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
