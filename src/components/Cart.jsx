import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

function Cart(props) {
    return (
        <Link to="/payment">
            <div className="cart-icon">
            <p>{props.numberItems}</p>
            <ShoppingCartIcon className="shopping-cart-icon" style={{ fontSize: 50}}/>
            </div>
        </Link>

        )
};

export default Cart;