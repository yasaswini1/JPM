// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Import Dashboard component

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
    </Router>
  );
};

export default App;
