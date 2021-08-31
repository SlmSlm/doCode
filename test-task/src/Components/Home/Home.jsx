import React from "react";
import Accounts from "../Accounts/Accounts";
import Options from "../Options/Options";
import WalletInfo from "../WalletInfo/WalletInfo";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.accountsBlock}>
        <div className={styles.heading}>
          Your accounts:
          <Accounts />
        </div>
        <Options />
      </div>
      <WalletInfo />
    </div>
  );
};

export default Home;
