// import React from 'react';
// import { useCart } from '../context/cartcontext';

// const CheckoutPage = () => {
//   const { cart, dispatch } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handleQuantityChange = (id, quantity) => {
//     dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
//   };

//   const handleRemove = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
//   };

//   const handlePayment = () => {
//     // Mock payment logic
//     alert('Payment successful!');
//   };

//   return (
//     <div>
//       <h2>Checkout</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <h3>{item.title}</h3>
//             <p>${item.price}</p>
//             <input
//               type="number"
//               value={item.quantity}
//               onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//             />
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${total.toFixed(2)}</h3>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default CheckoutPage;


import React from 'react';
import { useCart } from '../context/cartcontext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const handlePayment = () => {
    // Mock payment logic
    const transactionId = Math.random().toString(36).substr(2, 9);
    const date = new Date().toLocaleString();

    navigate('/receipt', {
      state: {
        items: cart,
        total,
        transactionId,
        date,
      },
    });

    // Clear the cart after payment
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="checkout-page">
      <button onClick={() => navigate('/')}>Back to Shopping</button>
      <h2>Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default CheckoutPage;