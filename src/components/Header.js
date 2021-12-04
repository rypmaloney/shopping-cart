function Header(props) {
    const {count} = props
    return (
        <header>
            <h1>Murakami Library</h1>
            <p>{count}</p>
        </header>
    );
}

export default Header;
