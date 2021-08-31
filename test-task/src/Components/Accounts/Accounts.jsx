import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styles from "./Accounts.module.css";

const Accounts = () => {
  return (
    <BrowserRouter>
      <div className={styles.content}>
        <div className={styles.accountsItem}>
          <NavLink to="/home/eur" activeClassName={styles.active}>
            <div className={styles.item}>Euro</div>
          </NavLink>
        </div>

        <div className={styles.accountsItem}>
          <NavLink to="/home/gbp" activeClassName={styles.active}>
            <div className={styles.item}>British Sterling</div>
          </NavLink>
        </div>

        <div className={styles.accountsItem}>
          <NavLink to="/home/usd" activeClassName={styles.active}>
            <div className={styles.item}>Usd</div>
          </NavLink>
        </div>

        <div className={styles.accountsItem}>
          <NavLink to="/home/krw" activeClassName={styles.active}>
            <div className={styles.item}>KRW</div>
          </NavLink>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Accounts;
