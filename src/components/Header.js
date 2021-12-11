import { Link } from "react-router-dom";

function Header(props) {
    const { count } = props;
    return (
        <header>
            <Link to="/">
                <h1>Murakami Library</h1>
            </Link>

            <Link className="cart-link" to="/cart">
                Cart: {count} Books
            </Link>
        </header>
    );
}

export default Header;
