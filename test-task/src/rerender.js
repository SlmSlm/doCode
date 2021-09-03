import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
