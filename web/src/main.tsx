import { initializeIcons } from "@fluentui/font-icons-mdl2";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

initializeIcons();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
