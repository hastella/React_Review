import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CounterPage from "./pages/CounterPage";
import ProductsPage from "./pages/ProductsPage";
import AppMentors from "./pages/AppMentors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppMentors />
  </React.StrictMode>
);
