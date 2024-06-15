import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SellerPage from './components/SellerPage';
import BuyerPage from './components/BuyerPage';

import '../styles/LoginPage.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/seller" element={<SellerPage />} />
          <Route path="/buyer" element={<BuyerPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
