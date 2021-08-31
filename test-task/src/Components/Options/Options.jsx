import React from "react";
import styles from "./Options.module.css";

const Options = () => {
  return (
    <div className={styles.options}>
      <div className={styles.optionsItem}>
        <span>
          <h2>Requeast a Card</h2>
          Get a debit card for free
        </span>
        <span className={styles.arrow}>{">"}</span>
      </div>
      <div className={styles.optionsItem}>
        <span>
          <h2>Earn a £25 for free</h2>
          Apply for pension
        </span>
        <span className={styles.arrow}>{">"}</span>
      </div>
    </div>
  );
};

export default Options;
