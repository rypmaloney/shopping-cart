import oneq84 from "../images/1Q84.jpeg"
import hardboiled from "../images/hardboiled.jpeg"
import uniqid from "uniqid";

const inventory = [
    {
        title: "Hardboiled Wonderland and the End of the World",
        id:"hb",
        pages: 1,
        number: 2,
        stock: true,
        image: hardboiled,
        cart: true,
        key: uniqid(),
    },
    {
        title: "1Q84",
        id: "1Q",
        pages: 1,
        number: 0,
        stock: true,
        cart: true,
        image: oneq84,
        key: uniqid(),
    },
    {
        title: "1Q84",
        id: "1Q",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: oneq84,
        key: uniqid(),
    },
    {
        title: "1Q84",
        id: "1Q",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: oneq84,
        key: uniqid(),
    },
    {
        title: "1Q84",
        id: "1Q",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: oneq84,
        key: uniqid(),
    },
    {
        title: "1Q84",
        id: "1Q",
        pages: 1,
        number: 2,
        stock: true,
        cart: false,
        image: oneq84,
        key: uniqid(),
    },
]
export default inventory

