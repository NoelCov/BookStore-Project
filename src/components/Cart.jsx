import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

function Cart(props) {
    return (
        <Link to="/payment">
            <div className="cartIcon">
            <p>{props.numberItems}</p>
            <ShoppingCartIcon style={{ fontSize: 50}}/>
            </div>
        </Link>

        )
};

export default Cart;