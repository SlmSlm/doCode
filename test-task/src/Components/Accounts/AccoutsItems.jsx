import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AccountsItems.module.css";

export let Balance = "Choose Your acc";

const Account = (props) => {
  let path = `/home/` + props.item.currency;

  return (
    <div className={styles.content}>
      <div className={styles.accountsItem}>
        <NavLink
          to={path}
          activeClassName={styles.active}
          onClick={() => (Balance = props.item.symbol + props.item.balance)}
        >
          <div className={styles.item}>
            <div>
              <img src={props.item.icon} alt="icon" style={{ width: 40 }} />
              {props.item.title}
            </div>
            {props.item.symbol + props.item.balance}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

const AccountsItems = (props) => {
  let Item = props.state.getAccounts().map((item) => <Account item={item} />);

  return <div>{Item}</div>;
};

export default AccountsItems;
