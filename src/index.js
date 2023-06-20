import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CounterPage from "./pages/CounterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterPage />
  </React.StrictMode>
);
