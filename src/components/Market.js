import Product from "./Product.js";
import Header from "./Header.js";
function Market(props) {


    return (
        <div>
        <Header />
        <div className="market">
            <h1>Store</h1>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
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
