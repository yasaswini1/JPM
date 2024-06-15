// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SellerPage from './components/SellerPage';
import BuyerPage from './components/BuyerPage';
// other imports as needed


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          Add other routes as needed */}
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
