import React from "react";
import card from "../../Images/card.svg";
import Accounts from "../Accounts/Accounts";
import sendMoneyRedIcon from "../../Images/RedColorIcons/sendMoneyRedIcon.svg";
import styles from "./SendMoney.module.css";

const sendMoney = () => {
  return (
    <div className={styles.sendMessagePage}>
      <div className={styles.accountsBlock}>
        <div className={styles.heading}>
          <img src={card} alt="icon" /> Send Money From:
          <Accounts />
        </div>
      </div>
      <div className={styles.sendMoneyBlock}>
        <img src={sendMoneyRedIcon} alt="icon" /> Send Money
      </div>
    </div>
  );
};

export default sendMoney;
