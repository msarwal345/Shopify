// Cart.js
import React from 'react';
import './cart.css'
import { useCart } from '../cartcontext/cartcontext'; // Update the path based on your file structure

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className='cart-item'>
              <div className='item-info'>
                <img src={item.image} alt={item.title} />
                <div className='item-details'>
                  <p>{item.title}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <button className='remove-btn' onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
