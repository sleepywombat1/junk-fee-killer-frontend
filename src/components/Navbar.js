import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    
    // Set active link based on current pathname
    const path = location.pathname;
    setActiveLink(path);
  }, [location.pathname]);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-links-container">
        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li className={activeLink === '/' ? 'active' : ''}>
            <Link to="/" className="nav-link">
              <span className="nav-link-text">Home</span>
              <span className="nav-link-indicator"></span>
            </Link>
          </li>
          <li className={activeLink === '/about' ? 'active' : ''}>
            <Link to="/about" className="nav-link">
              <span className="nav-link-text">About</span>
              <span className="nav-link-indicator"></span>
            </Link>
          </li>
          <li className={activeLink === '/service' ? 'active' : ''}>
            <Link to="/service" className="nav-link">
              <span className="nav-link-text">Services</span>
              <span className="nav-link-indicator"></span>
            </Link>
          </li>
          <li className={activeLink.includes('/dashboard') ? 'active' : ''}>
            <Link to="/dashboard" className="nav-link">
              <span className="nav-link-text">Dashboard</span>
              <span className="nav-link-indicator"></span>
            </Link>
          </li>
          <li className={activeLink === '/contact' ? 'active' : ''}>
            <Link to="/contact" className="nav-link">
              <span className="nav-link-text">Contact</span>
              <span className="nav-link-indicator"></span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-actions">
        <Link to="/signup" className="nav-button secondary">Sign Up</Link>
        <Link to="/login" className="nav-button primary">Login</Link>
      </div>

      <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </nav>
  );
};

export default Navbar;