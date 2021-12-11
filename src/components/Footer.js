import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to="/shopping-cart/">
                <p>Home</p>
            </Link>

            <Link to="/shopping-cart/store">
                <p>Store</p>
            </Link>

            <Link to="/shopping-cart/cart">
                <p>Cart</p>
            </Link>
        </footer>
    );
}

export default Footer;
