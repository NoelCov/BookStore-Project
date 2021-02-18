import React, { useState } from "react";
import About from "./About";

function Book(props){
    return (
      <div className="col">
        <div className="card h-100 text-dark bg-light mb-3 border-secondary" style={{width: "18rem"}}>
          <img src={props.url} className="card-img-top" alt="book cover"></img>
          <div className="card-body">
            <h5 className="card-title"><b>{props.title}</b></h5>
            <About about={props.about}/>
            <div className="btn-container">
              <button type="button" className="btn btn-outline-dark" onClick={props.onClick} id={props.title}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    )};

export default Book;
