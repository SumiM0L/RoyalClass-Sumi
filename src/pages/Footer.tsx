import React from 'react';
import './Footer.css'; 
import appicon from "../assets/app.png"
import socialicon from "../assets/Sociallinks.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Exclusive</h3>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <form className="footer-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">→</button>
        </form>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <p>21st Floor, The Binary Tower, Marasi Drive, Business bay, Dubai</p>
        <p>info@royalclass.group</p>
        <p>+971 42 408 999</p>
      </div>
      <div className="footer-section">
        <h3>Account</h3>
        <ul>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Link</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Download App</h3>
        <div className="app-links">
          <img src={appicon} alt="Google Play" />
         
        </div>
        <div className="social-links">
        <img src={socialicon}alt="App Store" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;