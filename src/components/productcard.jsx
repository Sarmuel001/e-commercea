import React from 'react';
import { useCart } from '../context/cartcontext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();

  const addToCart = () => {
    const isInCart = cart.some(item => item.id === product.id);
    if (isInCart) {
      toast.info(`${product.title} is already in the cart!`);
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
      toast.success(`${product.title} added to cart!`);
    }
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} id='image' />
      <h3 id='image'>{product.title}</h3>
      <p id='image'>${product.price}</p>
      <button id='image' onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;