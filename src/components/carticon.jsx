// import React from 'react';
// import { useCart } from '../context/cartcontext';

// const CartIcon = () => {
//   const { cart } = useCart();

//   return (
//     <div className="cart-icon">
//       <span>{cart.length}</span>

//       <i className="fas fa-shopping-cart">Items</i>
//     </div>
//   );
// };

// export default CartIcon;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontext';
import myImage from '../media/cart.png';


const CartIcon = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-icon" onClick={() => navigate('/checkout')}>
      <span id='number'>{cart.length}</span>
      <img src={myImage} alt="My Image" style={{width:'30px'}} />
    </div>
  );
};

export default CartIcon;