import React from "react";
import { NavLink } from "react-router-dom";
import pig from "../../Images/blackPig.svg";
import checkbox from "../../Images/checkbox.png";
import coins from "../../Images/coins.svg";
import sendMoneyImg from "../../Images/RedColorIcons/sendMoneyRedIcon.svg";
import topUpRedIcon from "../../Images/RedColorIcons/topUpRedIcon.svg";
import leoAva from "../../Images/UsersPhoto/leoUser.svg";
import monikaAva from "../../Images/UsersPhoto/monikaUser.svg";
import UsersAvatars from "../../Images/UsersPhoto/profilePhoto.svg";
import { Balance } from "../Accounts/AccoutsItems";
import styles from "./WalletInfo.module.css";

const WalletInfo = () => {
  return (
    <div className={styles.WalletInfoBlock}>
      <div className={styles.rowDirection + " " + styles.headingOfBlock}>
        <div>
          <div>Balance</div>
          <h2>{Balance}</h2>
          <div>Quick Transaction</div>
        </div>
        <div className={styles.topUpIcon}>
          <div>
            <img src={topUpRedIcon} alt="Red pig :)" /> Top Up
          </div>
        </div>
      </div>
      <div className={styles.rowDirection}>
        <NavLink to="/send-money">
          <div className={styles.lastSeenUsers}>
            <img
              src={sendMoneyImg}
              alt="icon"
              style={{
                width: 27,
                height: 30,
              }}
            />
            Send <br /> Money
          </div>
        </NavLink>
        <div className={styles.lastSeenUsers}>
          <img src={leoAva} alt="leoToples :)" />
          Leo W.
        </div>
        <div className={styles.lastSeenUsers}>
          <img src={monikaAva} alt="Monica" />
          Monica L.
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.rowDirection + " " + styles.tableCell}>
          <div className={styles.tableCellItem}>
            <img
              src={checkbox}
              alt="icon"
              style={{
                width: 15,
                height: 15,
              }}
            ></img>
            Account Type:
          </div>
          <div className={styles.tableCellItem}>Personal</div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.rowDirection + " " + styles.tableCell}>
          <div className={styles.tableCellItem}>
            <img
              src={coins}
              alt="icon"
              style={{
                width: 15,
                height: 15,
              }}
            ></img>
            Currency
          </div>
          <div className={styles.tableCellItem}>
            Euro <b>EUR</b>
          </div>
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.rowDirection + " " + styles.tableCell}>
          <div className={styles.tableCellItem}>
            <img
              src={pig}
              alt="icon"
              style={{
                width: 15,
                height: 15,
              }}
            ></img>
            Passive Saving
          </div>
          <div className={styles.tableCellItem}>
            Enabled <b>20%</b>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.rowDirection + " " + styles.tableCell}>
          <div className={styles.tableCellItem}>
            <img src="" alt=""></img>
            Share Account
          </div>
          <div className={styles.rowDirection + " " + styles.tableCellItem}>
            <img
              src={UsersAvatars}
              alt=""
              style={{
                width: 24,
                height: 24,
              }}
            />
            <img
              src={UsersAvatars}
              alt=""
              style={{
                width: 24,
                height: 24,
              }}
            />
            <img
              src={UsersAvatars}
              alt=""
              style={{
                width: 24,
                height: 24,
              }}
            />
            <div className={styles.moreUsers}>+2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
