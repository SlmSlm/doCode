import React from "react";
import card from "../../Images/card.svg";
import sendMoneyRedIcon from "../../Images/RedColorIcons/sendMoneyRedIcon.svg";
import Accounts from "../Accounts/Accounts";
import styles from "./SendMoney.module.css";

const sendMoney = (props) => {
  return (
    <div className={styles.sendMessagePage}>
      <div className={styles.accountsBlock}>
        <div className={styles.heading}>
          <img src={card} alt="icon" /> Send Money From:
          <Accounts state={props.state} />
        </div>
      </div>
      <div className={styles.sendMoneyBlock}>
        <img src={sendMoneyRedIcon} alt="icon" /> Send Money
      </div>
    </div>
  );
};

export default sendMoney;
