
import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import RouteSwitch from "./Route";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <RouteSwitch />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
