import React, { useState } from "react";
import { rerenderEntireTree } from "../../rerender";
import styles from "./AccountsItems.module.css";

export let Balance = "Choose your acc";
function Account(props) {
  const [appState, changeState] = useState({
    state: props.state,
    onSelect: false,
    balanceInfo: null,
  });

  function toggleActive(index) {
    changeState({
      ...appState,
      onSelect: appState.state[index],
      balanceInfo: appState.state[index].symbol + appState.state[index].balance,
    });
    rerenderEntireTree();
  }

  function toggleActiveStyles(index) {
    if (
      appState.state[index] === appState.onSelect &&
      appState.state[index].symbol + appState.state[index].balance ===
        appState.balanceInfo
    ) {
      return [styles.active, (Balance = appState.balanceInfo)];
    } else {
      return [styles.unActive, Balance];
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.accountsItem}>
        {props.state.map((item, index) => (
          <div
            key={index}
            className={toggleActiveStyles(index)[0]}
            onClick={() => {
              toggleActive(index);
            }}
          >
            <div className={styles.item}>
              <div>
                <img src={item.icon} alt="icon" style={{ width: 40 }} />
                {item.title}
              </div>
              {item.symbol + item.balance}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

class AccountsItems extends React.Component {
  renderItem() {
    return <Account state={this.props.state.getAccounts()} />;
  }

  render() {
    return this.renderItem();
  }
}

export default AccountsItems;
