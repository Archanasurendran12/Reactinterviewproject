import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';



function Product({id, name, description, price, author, type,image}) {
const [{}, dispatch] = useStateValue();

     const addToBasket = () => {
           dispatch({
             type: "ADD_TO_BASKET",
             item:{
                 id: id,
                 name: name,
                 author: author,
                 price: price,
                 image: image
             }

         })

     };
    return (
     <div className="product">
         <div className="product_info">
         <p>{name}</p>
        <p>Author:{author}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
         </div>
         <img src={image} alt=""/>
         <button onClick={addToBasket}>Add to wishlist</button>
    </div>
    );     
    
}

export default Product;
