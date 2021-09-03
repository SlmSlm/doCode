import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import state from "./Api/api";
import "./App.css";
import Home from "./Components/Home/Home";
import SendMoney from "./Components/SendMoney/SendMoney";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="nav">
          <Sidebar />
        </div>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/home"} />} />
            <Route path="/home" render={() => <Home state={state} />} />
            <Route
              path="/send-money"
              render={() => <SendMoney state={state} />}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
