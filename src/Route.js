import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < products.length; i++) {
            if (products[i].cart === true) {
                count += products[i].number;
            }

            let productsEditor = [...products]
            if(products[i].number===0){
              productsEditor[i].cart = false
            }

        }
        
        setCartCount(count);
    }, [products]);

    // const updateCount = () => {
    //   let count = 0;
    //   for (let i=0; i<products.length; i++){
    //     if (products[i].cart===true){
    //      count += products[i].number
    //     }
    //   } setCartCount(count)
    // }
    const findBookIndex = (e) => {
        let index = products.findIndex(
            (element) => element.id === e.target.name
        );
        return index;
    };
    const increment = (e) => {
        let productsEditor = [...products];

        productsEditor[findBookIndex(e)].number++;
        setProducts(productsEditor);
    };
    const decrement = (e) => {
        let productsEditor = [...products];
        productsEditor[findBookIndex(e)].number--;
        setProducts(productsEditor);
    };
    const handleNumChange = (e) => {
        let productsEditor = products.slice();
        productsEditor[findBookIndex(e)].number = e.target.value;

        setProducts(productsEditor);
    };

    const addToCart = (e) => {
        let productsEditor = [...products];
        productsEditor[findBookIndex(e)].cart = true;
        setProducts(productsEditor);
    };
    const removeFromCart = (e) => {
        let productsEditor = [...products];
        productsEditor[findBookIndex(e)].cart = false;
        productsEditor[findBookIndex(e)].number = 0;
        setProducts(productsEditor);
    };

    return (
        <div>
        
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
                            increment={increment}
                            decrement={decrement}
                            findBookIndex={findBookIndex}
                            handleNumChange={handleNumChange}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            products={products}
                            inc={increment}
                            dec={decrement}
                            handleNumChange={handleNumChange}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    }
                />
            </Routes>
            <Footer />
        </BrowserRouter>

        </div>
    );
};

export default RouteSwitch;

