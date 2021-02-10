import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {MenuStore} from './contexts/menu/menu.context'

ReactDOM.render(
  <MenuStore>
      <App />
  </MenuStore>,
  document.getElementById("root")
);
