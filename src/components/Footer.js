import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to="/">
                <p>Home</p>
            </Link>

            <Link to="/store">
                <p>Store</p>
            </Link>

            <Link to="/cart">
                <p>Cart</p>
            </Link>
        </footer>
    );
}

export default Footer;
