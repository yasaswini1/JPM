// FeaturedProducts.js

import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have imported Link if using React Router
import './FeaturedProducts.css'; // Import CSS file for styling

const FeaturedProducts = ({ products }) => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="btn-primary">Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/products" className="btn-secondary">
        View All Products
      </Link>
    </section>
  );
};

export default FeaturedProducts;
