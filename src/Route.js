import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState  } from "react";
import Home from "./components/Home";
import Market from "./components/Market";
import Cart from "./components/Cart";
import "./store.css"
import inventory from "./components/inventory";


const RouteSwitch = () => {
  const [products, setProducts] = useState(inventory);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/market" element={<Market products={products} setProducts={setProducts} />} />
        <Route path="/cart" element={<Cart products={products}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
