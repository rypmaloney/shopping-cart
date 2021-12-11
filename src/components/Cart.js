import { Link } from "react-router-dom";

function Cart(props) {
    const { products, inc, handleNumChange, dec } = props;
    return (
        <div className="cart">
            <h1>Cart</h1>
            <ul>
                {products.map((prod) => {
                    if (prod.cart === true) {
                        return (
                            <li>
                                <div className="cart-list">
                                    <Link to="/store">
                                        <img
                                            alt={`Cover for the book ${prod.title}`}
                                            src={prod.image}
                                        ></img>
                                    </Link>
                                    <div className="cart-book-info">
                                        <p>
                                            {prod.title} x {prod.number}
                                        </p>
                                        <button
                                            name={prod.id}
                                            className="incdec"
                                            onClick={inc}
                                        >
                                            +
                                        </button>
                                        <input
                                            name={prod.id}
                                            type="text"
                                            value={prod.number}
                                            onChange={handleNumChange}
                                        ></input>
                                        <button
                                            name={prod.id}
                                            className="incdec"
                                            onClick={dec}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                                <hr />
                            </li>
                        );
                    } else return null;
                })}
            </ul>
            <button class="purchase">Purchase</button>
            <button>
                <Link to="/store">Back to the store </Link>
            </button>
        </div>
    );
}

export default Cart;
