function Product(props) {
    const { title, num, inc, id, dec, image, handleNumChange } = props;
    return (
        <div className="product-card">
            <img alt={`Cover for the book ${title}`}src={image}></img>
            <p>{title}</p>
            <button name={id} className="incdec" onClick={inc}>
                +
            </button>
            <input
                name={id}
                type="text"
                value={num}
                onChange={handleNumChange}
            ></input>
            <button name={id} className="incdec" onClick={dec}>
                -
            </button>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;
