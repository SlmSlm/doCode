import React from "react";
import AccountsItems from "./AccoutsItems";

const Accounts = (props) => {
  return (
    <div>
      <AccountsItems state={props.state}/>
    </div>
  );
};

export default Accounts;