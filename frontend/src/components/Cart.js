import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
