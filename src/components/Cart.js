function Cart(props) {
    const { products } = props;
    return (
        <div className="cart">
            <h1>Cart</h1>
            {products.map((prod) => {
                if (prod.cart === true) {
                    return (
                        <div>
                            <p>{prod.title}</p>
                            <p>{prod.number}</p>
                        </div>
                    );
                } else return null;
            })}
        </div>
    );
}

export default Cart;
