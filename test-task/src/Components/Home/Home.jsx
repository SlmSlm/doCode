import React from "react";
import Accounts from "../Accounts/Accounts";
import Options from "../Options/Options";
import WalletInfo from "../WalletInfo/WalletInfo";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.homePage}>
      <div className={styles.accountsBlock}>
        <div className={styles.heading}>
          Your accounts:
          <Accounts state={props.state}/>
        </div>
        <Options />
      </div>
      <WalletInfo state={props.state}/>
    </div>
  );
};

export default Home;
