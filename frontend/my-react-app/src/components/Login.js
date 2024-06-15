import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import '../styles/LoginPage.css'; // Optional: Import custom styles
=======
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
>>>>>>> b23fbf74739454bba46eb4b43c09e290d8dafa8d

const Login = () => {
  const [isSeller, setIsSeller] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isSeller) {
      navigate('/seller');
    } else {
      navigate('/buyer');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>{isSeller ? 'Seller Login' : 'Buyer Login'}</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div className="toggle-container">
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isSeller} 
              onChange={() => setIsSeller(!isSeller)} 
            />
            <span className="slider round"></span>
          </label>
          <span>{isSeller ? 'Seller' : 'Buyer'}</span>
        </div>
        <button onClick={handleLogin}>Login</button>
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default Login;
