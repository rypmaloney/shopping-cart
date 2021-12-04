import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import Header from "./Header.js";
import inventory from "./inventory.js";


function Market(props) {
    const [products, setProducts] = useState(inventory);

    const increment = (e) => {
        //find the product that has been clicked in the state array
        let index = products.findIndex(
            (element) => element.id === e.target.name
        );
        console.log(index);
        let productsEditor = products.slice();

        productsEditor[index].number++;
        setProducts(productsEditor);
    };
    const decrement = (e) => {
        //find the product that has been clicked in the state array
        let index = products.findIndex(
            (element) => element.id === e.target.name
        );
        console.log(index);
        let productsEditor = products.slice();

        productsEditor[index].number--;
        setProducts(productsEditor);
    };
    const handleNumChange = (e) => {
        let index = products.findIndex(
            (element) => element.id === e.target.name
        );
        let productsEditor = products.slice();
        productsEditor[index].number = e.target.value;

        setProducts(productsEditor)

    };

    return (
        <div>
            <Header />
            <div className="market">
                <h1>Store</h1>
                {products.map((prod) => {
                    return (
                        <Product
                            title={prod.title}
                            num={prod.number}
                            dec={decrement}
                            id={prod.id}
                            inc={increment}
                            image={prod.image}
                            key={prod.key}
                            handleNumChange={handleNumChange}
                        />
                    );
                })}
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Market;
