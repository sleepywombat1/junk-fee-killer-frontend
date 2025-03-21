// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h4>FeeDetector</h4>
            <p>Helping consumers discover and dispute hidden fees on bills, utilities, and services.</p>
            <div className="social-links">
              {/* You'll need to add actual social links/icons here */}
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Features</h4>
            <ul>
              <li><Link to="/features/analysis">Bill Analysis</Link></li>
              <li><Link to="/features/tracking">Fee Tracking</Link></li>
              <li><Link to="/features/disputes">Dispute Tools</Link></li>
              <li><Link to="/features/savings">Savings Calculator</Link></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for tips and updates.</p>
            <form>
              <input type="email" placeholder="Your email address" />
              <button className="cta-button">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FeeDetector. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;