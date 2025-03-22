import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">FeeGuard</h3>
          <p className="footer-description">
            Helping you identify and eliminate hidden fees on your bills and subscriptions.
          </p>
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><Link to="/services/phone-bills">Phone Bill Analysis</Link></li>
            <li><Link to="/services/utilities">Utility Bill Checks</Link></li>
            <li><Link to="/services/subscriptions">Subscription Management</Link></li>
            <li><Link to="/services/reports">Custom Reports</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>Email: info@feeguard.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Tech Plaza, Suite 400<br />San Francisco, CA 94103</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <span>© {currentYear} FeeGuard. All rights reserved.</span>
          <div className="footer-legal-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;