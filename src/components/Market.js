import Product from "./Product.js";

function Market(props) {
    const {
        products,
        increment,
        decrement,
        handleNumChange,
        addToCart,
        removeFromCart,
    } = props;

    return (
        <div>
            <div className="market">
                <h1>Purchase novels by Haruki Murakami:</h1>
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
                            isInCart={prod.cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Market;
