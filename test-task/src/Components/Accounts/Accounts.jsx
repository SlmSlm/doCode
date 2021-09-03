import React from "react";
import AccountsItems from "./AccoutsItems";

function Accounts(props) {
  return (
    <div>
      <AccountsItems state={props.state} />
    </div>
  );
}

export default Accounts;
