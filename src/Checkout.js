import React from 'react';
import { useStateValue } from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal.js';

function Checkout() {

    // Pull in the basket from the store
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://m.media-amazon.com/images/G/01/digital/video/sonata/UK_Hero_HOWBG_2020_Launch/c84bae78-6c00-408d-8dd1-137da61646f7._UR3000,600_SX1500_FMwebp_.jpg"
                    alt=""
                />
            
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                     {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))} 
                </div>
            </div>

            {/* Display subtotal if there is items in the basket */}
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>      
    );
}

export default Checkout;
