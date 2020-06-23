import './Product.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props);
    const { img, name, price, seller, stock } = props.product;
    return (
        <div className="product">
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-description'>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="add-to-cart-btn" onClick={() => props.handleAddToCart(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;