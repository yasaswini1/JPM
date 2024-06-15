import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import SellerPage from './components/SellerPage'; // Example seller page component
import BuyerPage from './components/BuyerPage';   // Example buyer page component
import HomePage from './components/HomePage';     // New home page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
