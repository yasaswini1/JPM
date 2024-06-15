import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your home page CSS here

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          {/* Replace with your logo */}
          {/* <img src="/path/to/logo.png" alt="Platform Logo" /> */}
          <h2>Platform Logo</h2>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/sellers">Sellers</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* Additional links based on user authentication status */}
          </ul>
          <div className="cta-buttons">
            <Link to="/login" className="btn-primary">Login</Link>
            <Link to="/signup" className="btn-secondary">Sign Up</Link>
          </div>
        </nav>
      </header>

      {/* Banner or Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to our E-commerce Platform</h1>
          <p>Connecting you with rural SHG sellers for unique products</p>
          <Link to="/products" className="btn-primary">Explore Products</Link>
        </div>
        {/* Carousel or slider for featured products/promotions */}
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Product cards go here */}
        </div>
        <Link to="/products" className="btn-secondary">View All Products</Link>
      </section>

      {/* Seller Spotlight Section */}
      <section className="seller-spotlight">
        <h2>Meet Our SHG Sellers</h2>
        {/* Featured seller profiles/cards */}
        <Link to="/sellers" className="btn-secondary">Explore Sellers</Link>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          {/* Step-by-step process */}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-cards">
          {/* Testimonial cards */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>Our mission is to empower rural SHG sellers...</p>
        <Link to="/about" className="btn-secondary">Learn More</Link>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <p>Contact us: info@example.com</p>
            {/* Additional contact details */}
          </div>
          <nav className="footer-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/sellers">Sellers</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="social-links">
            {/* Social media icons */}
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Your E-commerce Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
