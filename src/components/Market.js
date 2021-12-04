
import Product from "./Product.js";
import Header from "./Header.js";
//import inventory from "./inventory.js";


function Market(props) {
    //const [products, setProducts] = useState(inventory);
    const {products, setProducts, updateCount} = props
    const findBookIndex = (e)=> {
        let index = products.findIndex(
            (element) => element.id === e.target.name
        );
        return index
    }
    const increment = (e) => {
        let productsEditor = [...products]

        productsEditor[findBookIndex(e)].number++;
        setProducts(productsEditor);
    };
    const decrement = (e) => {
        let productsEditor = [...products]
        productsEditor[findBookIndex(e)].number--;
        setProducts(productsEditor);
    };
    const handleNumChange = (e) => {
        let productsEditor = products.slice();
        productsEditor[findBookIndex(e)].number = e.target.value;
        setProducts(productsEditor)
    };

    const addToCart = (e) => {
        let productsEditor = [...products];
        productsEditor[findBookIndex(e)].cart = true;
        setProducts(productsEditor)
        updateCount()
    }
    const removeFromCart = (e) => {
        let productsEditor = [...products];
        productsEditor[findBookIndex(e)].cart = false;
        productsEditor[findBookIndex(e)].number = 0;
        setProducts(productsEditor)
        updateCount()
    }

    return (
        <div>
            <Header />
            <div className="market">
                <h1>Store</h1>
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


export default Market 

