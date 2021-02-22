import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import PaymentIcon from '@material-ui/icons/Payment';
import { Link } from "react-router-dom";

function Payment(){
    let books = JSON.parse(localStorage.getItem("bookstobuy"));
    const [titles, setTitles] = useState([]);

    useEffect(async () => {
        for (let i=0; i < books.length; i++){
            setTitles((prevValue) => {
                return [...prevValue, books[i]];
            })
        }  
    }, []);

    return (
        <div className="payment-container">
            <h1 className="payment-title">Shopping cart</h1>
            <h4 className="payment-subtitle">You have selected the following books:</h4>
                {titles.length > 0 ? titles.map(function(item){
                    return <div className="payment-card text-container">{item}</div>
                }) : <h2 className="payment-h2" style={{marginBottom: "30px"}}>Cart is empty</h2>}
            <div className="btn-container">
                <Link to="/">
                    <Button variant="outlined" color="primary">Home</Button>
                </Link>
                <Button variant="outlined" endIcon={<PaymentIcon />}>Continue to Payment</Button>
            </div>

        </div>
    )
};

export default Payment;