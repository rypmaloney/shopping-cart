import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Market from "./components/Market";
import Cart from "./components/Cart";
import "./store.css";
import inventory from "./components/inventory";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const RouteSwitch = () => {
    const [products, setProducts] = useState(inventory);
    const [cartCount, setCartCount] = useState(0);

    const updateCount = () => {
      let count = 0;
      for (let i=0; i<products.length; i++){
        if (products[i].cart===true){
         count += products[i].number
        }
      } setCartCount(count)
    }

    return (
        <BrowserRouter>
            <Header count={cartCount} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/store"
                    element={
                        <Market
                            products={products}
                            setProducts={setProducts}
                            updateCount={updateCount}
                        />
                    }
                />
                <Route path="/cart" element={<Cart products={products} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RouteSwitch;
