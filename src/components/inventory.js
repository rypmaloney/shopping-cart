import oneq84 from "../images/1Q84.jpeg"
import hardboiled from "../images/hardboiled.jpeg"
import wood from "../images/wood.jpeg"
import kafka from "../images/kafka.jpeg"
import tsukuru from "../images/tsukuru.jpeg"
import dance from "../images/dance.jpeg"
import sheep from "../images/sheep.jpeg"
import killing from "../images/killing.jpg"
import bird from "../images/bird.jpeg"
import sputnik from "../images/sputnik.jpg"
import pinball from "../images/pinball.jpeg"
import south from "../images/south.jpeg"

import uniqid from "uniqid";

const inventory = [
    {
        title: "Dance Dance Dance",
        id: "dance",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: dance,
        key: uniqid(),
    },
    {
        title: "Hardboiled Wonderland and the End of the World",
        id:"hb",
        pages: 1,
        number: 0,
        stock: true,
        image: hardboiled,
        cart: false,
        key: uniqid(),
    },
    {
        title: "Pinball, 1973",
        id: "pinball",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: pinball,
        key: uniqid(),
    },
    {
        title: "A Wild Sheep Chase",
        id: "sheep",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: sheep,
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
        title: "Norwegian Wood",
        id: "wood",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: wood,
        key: uniqid(),
    },
    {
        title: "Kafka on the Shore",
        id: "kafka",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: kafka,
        key: uniqid(),
    },
    {
        title: "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
        id: "tsukuru",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: tsukuru,
        key: uniqid(),
    },


    {
        title: "Killing Commendatore",
        id: "killing",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: killing,
        key: uniqid(),
    },
    {
        title: "The Wind-Up Bird Chronicle",
        id: "bird",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: bird,
        key: uniqid(),
    },
    {
        title: "Sputnik Sweetheart",
        id: "sputnik",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: sputnik,
        key: uniqid(),
    },
    {
        title: "South of the Border, West of the Sun",
        id: "south",
        pages: 1,
        number: 0,
        stock: true,
        cart: false,
        image: south,
        key: uniqid(),
    },
]
export default inventory

