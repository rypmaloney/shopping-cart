function Product(props) {
    const { title, num, inc, id, dec } = props;
    return (
        <div className="product-card">
            <p>{title}</p>
            <button name={id} className="incdec" onClick={inc}>
                +
            </button>
            <input type="text" value={num}></input>
            <button name={id} className="incdec" onClick={dec}>-</button>
        </div>
    );
}

export default Product;
