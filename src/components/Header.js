function Header(props) {
    const { count } = props;
    return (
        <header>
            
                <h1><a href="/">Murakami Library</a></h1>
            
            <a href="/cart">
                <p>Cart: {count}</p>
            </a>
        </header>
    );
}

export default Header;
