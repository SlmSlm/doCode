import React from "react";
import Accounts from "../Accounts/Accounts";
import Options from "../Options/Options";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.accountsBlock}>
        <div className={styles.heading}>Your accounts:</div>
        <Accounts />
      </div>
      <Options />
    </div>
  );
};

export default Home;
