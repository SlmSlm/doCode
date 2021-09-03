import React, { useState } from "react";
import testState from "../../Store/acoountsReducer";
import AccountsItems from "./AccoutsItems";

function Accounts(props) {
  return (
    <div>
      <AccountsItems state={props.state} />
    </div>
  );
}

export default Accounts;
