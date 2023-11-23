import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import CounterApp from "./CounterApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Pasar props de title, subtitle y age al componente FirstApp */}
    {/* <FirstApp title="Home Screen" /> */}
    <CounterApp value={0} />
  </React.StrictMode>
);
