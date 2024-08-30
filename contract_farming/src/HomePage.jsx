import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="HomePage">
    <header className="header">
      <div className="logo">FarmLink</div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#login" className="login-btn">Login</a>
      </nav>
      <div className="toggle-container">
        <span className="toggle-label">EN</span>
        <label className="toggle-switch">
          <input type="checkbox" className="toggle-checkbox" />
          <span className="slider"></span>
        </label>
        <span className="toggle-label">HI</span>
      </div>
    </header>

    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to FarmLink</h1>
        <p>Your gateway to secure and transparent contract farming</p>
        <a href="#signup" className="cta-button">Get Started</a>
      </div>
    </section>

    <section id="features" className="features">
      <div className="container">
        <div className="feature">
          <h2>Secure Contracts</h2>
          <p>Ensure peace of mind with our legally binding and secure contracts.</p>
        </div>
        <div className="feature">
          <h2>Real-Time Notifications</h2>
          <p>Stay updated with real-time notifications on contract status and payments.</p>
        </div>
        <div className="feature">
          <h2>Easy Payments</h2>
          <p>Process payments effortlessly and securely through our platform.</p>
        </div>
      </div>
    </section>

    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>We aim to revolutionize contract farming by providing a reliable platform that connects farmers and buyers with transparency and ease.</p>
      </div>
    </section>

    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>

    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 FarmLink. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default HomePage;
