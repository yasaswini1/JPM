import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [isSeller, setIsSeller] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!firstName || !lastName || !phoneNumber || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Construct user object based on the form data
    const newUser = {
      firstName,
      lastName,
      phoneNumber,
      password,
      role: isSeller ? 'seller' : 'buyer'
    };

    // Example: Logging user data for demonstration
    console.log('New User:', newUser);

    // You can add logic here to handle signup API calls or database updates

    // For demonstration, navigate back to the login page after signup
    navigate('/');
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        <h2>{isSeller ? 'Seller Signup' : 'Buyer Signup'}</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/">Login here</Link></p>
      </div>
    </div>
  );
};

export default Signup;
