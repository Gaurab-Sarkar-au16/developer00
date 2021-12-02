import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // BrowserRouter s itself a component so we can write it like this
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
