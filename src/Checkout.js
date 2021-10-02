import React from 'react'
import { useStateValue } from './StateProvider';
import Checkoutproduct from './Checkoutproduct';
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue();
    return <div className="checkout">
       <div>
           <h2 className="checkout_title">Your wishlist</h2>
           {basket.map(item => (
               <Checkoutproduct
               item={item.id}
               name={item.name}
               author={item.author}
               price={item.price}
               image={item.image}
               />

           ))}
       </div>
            
        </div>;
    
}

export default Checkout
