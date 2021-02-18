import React, { useState, useEffect } from "react";
import Book from "./Book";
import Cart from "./Cart";
const axios = require("axios");
const _ = require('lodash');

function BookList() {
    const [list, setList] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(async () => {
        const result = await axios('/Books');
        setList(result.data);
    }, []);

    function handleClick(event){
        let book = event.target.id;
        setCart([...cart, book]);
      };

    localStorage.setItem("bookstobuy", JSON.stringify(cart));

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 card-container">
            {list.map((book, index) => 
                <Book
                key={index}
                title={_.startCase(book.title)}
                url={book.URL}
                price={book.price}
                id={book._id}
                about={book.about}
                onClick={handleClick}
                 />
            )}
            <Cart numberItems={cart.length} />
        </div>
    )
}

export default BookList;