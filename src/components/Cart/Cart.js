import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    const totalOfItems = Number(cart.reduce((totalOfItems, product) => totalOfItems + product.price, 0 ).toFixed(2));
    const totalShipping = Number(cart.reduce((totalShipping, product) => totalShipping + product.shipping, 0 ).toFixed(2));
    const totalTax = Number((totalOfItems * 0.1).toFixed(2));

    console.log(totalOfItems);
    console.log(totalShipping);

    var style = {
        textAlign: 'center'
    }

    return (
        <div>
            <h3 style={style}>Order Summary</h3>
            <p style={style}>Items ordered: {cart.length}</p>
            <p><small>Items: {totalOfItems}</small></p>
            <p><small>Shipping and handling: {totalShipping}</small></p>
            <p><small>Total before tax: {Number((totalOfItems+totalShipping).toFixed(2))}</small></p>
            <p><small>Estimated tax: {totalTax}</small></p>
            <h3>Order total: {Number((totalOfItems+totalShipping+totalTax).toFixed(2))}</h3>
        </div>
    );
};

export default Cart;