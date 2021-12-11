import React, { useState } from "react";
function Product(props) {
    const [infoState, setInfoState] = useState("hide");

    const {
        title,
        num,
        inc,
        id,
        dec,
        image,
        handleNumChange,
        isInCart,
        addToCart,
        removeFromCart,
    } = props;

    const handleBookClick = (e) => {
        infoState === "hide" ? setInfoState("show") : setInfoState("hide");
    };

    return (
        <div className="product-card">
            <div name={id} onClick={handleBookClick} className="img-container">
                <div className="learn">
                    <h2>Click to purchase this book</h2>
                </div>
                <img alt={`Cover for the book ${title}`} src={image}></img>
            </div>

            <div name={id} className={`product-info-container ${infoState} `}>
                <button onClick={handleBookClick} className="exit-info">
                    x
                </button>
                <p>{title}</p>

                <button name={id} className="incdec" onClick={inc}>
                    +
                </button>
                <input
                    name={id}
                    type="text"
                    value={num}
                    onChange={handleNumChange}
                ></input>
                <button name={id} className="incdec" onClick={dec}>
                    -
                </button>
                <div>
                    {isInCart ? (
                        <button name={id} onClick={removeFromCart}>
                            Remove all from cart
                        </button>
                    ) : (
                        <button name={id} onClick={addToCart}>
                            Add to cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;
