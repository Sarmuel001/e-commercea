// import React from 'react';
// import { CartProvider } from './context/cartcontext';
// import LandingPage from './components/Landingpage';
// import carticon from './components/carticon';
// import CheckoutPage from './components/checkoutpage';
// import CartIcon from './components/carticon';

// const App = () => {
//   return (
//     <CartProvider>
//       <div className="App">
//         <CartIcon />
//         <LandingPage/>
//         <CheckoutPage />
//       </div>
// </CartProvider>
// )}    
//   export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cartcontext';
import LandingPage from './components/Landingpage';
import CartIcon from './components/carticon';
import CheckoutPage from './components/checkoutpage';
import Receipt from './components/receipt';import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <CartProvider>
      <Router>
      <span><a href="/" style={{textDecoration:'none'}}><h1 style={{position:'fixed', color:'white', backgroundColor:'#28a745', paddingLeft:'20px',margin:'0px', width:'100vw'}}>CapacityBay Store</h1></a></span>
        <div className="App">
          <br/><br/> <br />
          <CartIcon />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/receipt" element={<Receipt />} />
          </Routes>
      <ToastContainer />
        </div>
      <div style={{width:'100wv', textAlign:'center', backgroundColor:'#28a745', color:'white'}}>
      <h5>Designed by: Sam Adebayo</h5>      </div>
      </Router>
    </CartProvider>
  );
};

export default App;
