import React from 'react'
import "./Checkoutproduct.css";

function Checkoutproduct({ id, name, author, price, image}) {
    return (
        <div  className="checkoutproducts">
            <img className="Checkoutproduct_image" src={image} alt=""/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_name">{name}</p>
                <p className="checkoutproduct_author">{author}</p>
                <small>$</small>
                <strong>{price}</strong>
                


            </div>
            
        </div>
    )
}

export default Checkoutproduct
