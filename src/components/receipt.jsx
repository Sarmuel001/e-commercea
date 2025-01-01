import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, total, transactionId, date } = location.state;

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price} x {item.quantity}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <p>Transaction ID: {transactionId}</p>
      <p>Date: {date}</p>
      <button onClick={() => window.print()}>Print Receipt</button>
      <button onClick={() => navigate('/')}>Back to Shopping</button>
    </div>
  );
};

export default Receipt;
