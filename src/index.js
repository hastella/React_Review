import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CounterPage from "./pages/CounterPage";
import ProductsPage from "./pages/ProductsPage";
import AppMentors from "./pages/AppMentors";
import AppForm from "./AppForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppForm />
  </React.StrictMode>
);
