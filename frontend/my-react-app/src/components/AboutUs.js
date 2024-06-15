import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Tara Foundation</h1>
          <p>Empowering rural artisans and connecting them with global buyers</p>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>At Tara Foundation, our mission is to empower rural Self-Help Group (SHG) sellers by providing them with a platform to showcase their craftsmanship and connect with buyers worldwide. We strive to promote sustainability, fair trade, and cultural diversity while preserving traditional art forms.</p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="value-item">
            <h3>Sustainability</h3>
            <p>We prioritize eco-friendly practices and sustainable sourcing to minimize our environmental impact.</p>
          </div>
          <div className="value-item">
            <h3>Empowerment</h3>
            <p>We empower artisans by ensuring fair wages, promoting their skills, and providing economic opportunities.</p>
          </div>
          <div className="value-item">
            <h3>Cultural Preservation</h3>
            <p>We celebrate diversity and aim to preserve traditional art forms and cultural heritage.</p>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="container">
          <h2>Our Impact</h2>
          <p>Since our inception, Tara Foundation has positively impacted thousands of artisans' lives by providing them with a sustainable source of income. By connecting buyers directly with artisans, we ensure that their craftsmanship is valued and appreciated globally.</p>
        </div>
      </section>

      <section className="join-us">
        <div className="container">
          <h2>Join Us</h2>
          <p>Whether you're a buyer interested in unique handmade products or an artisan looking to showcase your creations, Tara Foundation welcomes you to join our community. Together, we can create a more equitable and sustainable future for artisans worldwide.</p>
          <a href="/signup" className="btn-primary">Sign Up</a>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What People Are Saying</h2>
          <div className="testimonial">
            <blockquote>
              "Working with Tara Foundation has been a game-changer for our artisans. They've provided us with opportunities we couldn't have imagined."
            </blockquote>
            <cite>- John Doe, Artisan</cite>
          </div>
          <div className="testimonial">
            <blockquote>
              "As a buyer, I love the unique products and the stories behind each artisan. It's a platform that truly connects us."
            </blockquote>
            <cite>- Jane Smith, Buyer</cite>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Tara Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
