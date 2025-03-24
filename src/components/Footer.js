import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Import logo (you'll need to add this to your assets)
import logo from '../assets/logo-light.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src={logo} alt="Junk Fee Killer" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              Stop paying for fees you don't deserve.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.79996C21.2483 6.12595 20.4534 6.34393 19.64 6.43996C20.4982 5.92729 21.1413 5.12075 21.45 4.16996C20.6436 4.65011 19.7608 4.98851 18.84 5.16996C18.2245 4.50226 17.405 4.05759 16.5098 3.90055C15.6146 3.74352 14.6945 3.88726 13.8938 4.31056C13.0932 4.73386 12.4569 5.41373 12.0852 6.23703C11.7135 7.06033 11.6273 7.98551 11.84 8.86996C10.2094 8.79093 8.61444 8.39787 7.15274 7.71626C5.69104 7.03466 4.39647 6.0785 3.34 4.89996C2.96867 5.52821 2.76689 6.23398 2.77 6.94996C2.77 8.34996 3.48 9.58996 4.57 10.3C3.91206 10.2808 3.26844 10.0962 2.69 9.75996V9.81996C2.69011 10.7644 3.0142 11.68 3.61224 12.4148C4.21027 13.1496 5.04634 13.656 5.97 13.85C5.36214 14.0217 4.72308 14.0463 4.1 13.92C4.34926 14.7326 4.84192 15.4489 5.50666 15.9729C6.17141 16.4969 6.97583 16.8008 7.81 16.84C6.3963 17.9611 4.65939 18.5747 2.87 18.57C2.58 18.57 2.28 18.55 2 18.52C3.82162 19.6999 5.96691 20.3302 8.16 20.33C16.5 20.33 21.06 13.46 21.06 7.54996C21.06 7.37996 21.06 7.19996 21.05 7.01996C21.8542 6.43817 22.5491 5.72049 23.1 4.89996C22.3514 5.22637 21.5603 5.44233 20.75 5.53996L22 5.79996Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9912 5.65684 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3084 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1922C13.95 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3432 21.1283 22 16.9912 22 12Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3H4C3.447 3 3 3.448 3 4V20C3 20.552 3.447 21 4 21H20C20.553 21 21 20.552 21 20V4C21 3.448 20.553 3 20 3ZM8.339 18.337H5.667V9.747H8.339V18.337ZM7.003 8.574C6.147 8.574 5.451 7.877 5.451 7.019C5.451 6.161 6.146 5.464 7.003 5.464C7.858 5.464 8.554 6.161 8.554 7.019C8.554 7.877 7.858 8.574 7.003 8.574ZM18.338 18.337H15.669V14.162C15.669 13.166 15.65 11.884 14.281 11.884C12.891 11.884 12.681 12.968 12.681 14.089V18.337H10.013V9.747H12.568V10.922H12.607C12.99 10.247 13.856 9.533 15.134 9.533C17.838 9.533 18.337 11.311 18.337 13.627V18.337H18.338Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Company</h3>
              <ul className="footer-links">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/team" className="footer-link">Our Team</Link></li>
                <li><Link to="/careers" className="footer-link">Careers</Link></li>
                <li><Link to="/press" className="footer-link">Press</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="footer-links-title">Services</h3>
              <ul className="footer-links">
                <li><Link to="/service/phone-bills" className="footer-link">Phone Bill Analysis</Link></li>
                <li><Link to="/service/utility-bills" className="footer-link">Utility Bill Analysis</Link></li>
                <li><Link to="/service/internet-bills" className="footer-link">Internet Bill Analysis</Link></li>
                <li><Link to="/service/insurance" className="footer-link">Insurance Review</Link></li>
                <li><Link to="/service/subscriptions" className="footer-link">Subscription Management</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="footer-links-title">Resources</h3>
              <ul className="footer-links">
                <li><Link to="/blog" className="footer-link">Blog</Link></li>
                <li><Link to="/guides" className="footer-link">Guides</Link></li>
                <li><Link to="/calculator" className="footer-link">Savings Calculator</Link></li>
                <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                <li><Link to="/help" className="footer-link">Help Center</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="footer-links-title">Legal</h3>
              <ul className="footer-links">
                <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/security" className="footer-link">Security</Link></li>
                <li><Link to="/accessibility" className="footer-link">Accessibility</Link></li>
                <li><Link to="/sitemap" className="footer-link">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} Junk Fee Killer. All rights reserved.
          </div>
          <div className="footer-badges">
            <div className="badge">
              <span>256-bit</span>
              <span>Secure</span>
            </div>
            <div className="badge">
              <span>GDPR</span>
              <span>Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;