import React from "react";
import styles from "./Options.module.css";

const Options = () => {
  return (
    <div className={styles.options}>
      <div>
        <h2>Requeast a Card</h2>
        Get a debit card for free
      </div>
      <div>
        <h2>Earn a £25 for free</h2>
        Apply for pension
      </div>
    </div>
  );
};

export default Options;
