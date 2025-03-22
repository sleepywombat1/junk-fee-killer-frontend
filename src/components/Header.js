import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="nav-logo">
            <img src="/logo.svg" alt="Junk Fee Killer" className="logo-img" />
            <span className="logo-text">Junk Fee Killer</span>
          </Link>
          
          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-links">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/how-it-works" className={`nav-link ${location.pathname === '/how-it-works' ? 'active' : ''}`}>
                  How It Works
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}>
                  Pricing
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link to="/analyze" className={`nav-link ${location.pathname === '/analyze' ? 'active' : ''}`}>
                      Analyze Bill
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard" className={`nav-link ${location.pathname.includes('/dashboard') ? 'active' : ''}`}>
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle">
                      Account
                    </button>
                    <div className="dropdown-menu">
                      <Link to="/profile" className="dropdown-item">Profile</Link>
                      <Link to="/settings" className="dropdown-item">Settings</Link>
                      <button onClick={logout} className="dropdown-item">Logout</button>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item cta-item">
                    <Link to="/login" className="nav-link btn btn-outline">Log In</Link>
                  </li>
                  <li className="nav-item cta-item">
                    <Link to="/register" className="nav-link btn btn-primary">Get Started</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
