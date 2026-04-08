import React from 'react';
import { Link } from 'react-router-dom';

const LogoSmile = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9.5 22V16.5h5V22" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-ikman-style">
      <div className="container">
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>More from idamata</h4>
            <ul>
              <li><Link to="/sell-fast">Sell Fast</Link></li>
              <li><Link to="#">Membership</Link></li>
              <li><Link to="#">Banner Ads</Link></li>
              <li><Link to="#">Boost Ad</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help & Support</h4>
            <ul>
              <li><Link to="/faqs">FAQ</Link></li>
              <li><Link to="/contact-us">Stay safe</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About idamata</h4>
            <ul>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Terms and Conditions</Link></li>
              <li><Link to="#">Privacy policy</Link></li>
              <li><Link to="#">Sitemap</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Blog & Guides</h4>
            <ul>
              <li><Link to="#">MotorGuide LK</Link></li>
              <li><Link to="#">PropertyGuide LK</Link></li>
              <li><Link to="#">Official Blog</Link></li>
            </ul>
            <div className="social-mini-icons">
              <a href="https://facebook.com" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path></svg>
              </a>
              <a href="https://x.com" aria-label="X">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21.582 6.186a2.685 2.685 0 0 0-1.884-1.921C18.037 3.8 12 3.8 12 3.8s-6.037 0-7.698.465a2.685 2.685 0 0 0-1.884 1.921C2 7.893 2 12 2 12s0 4.107.418 5.814a2.685 2.685 0 0 0 1.884 1.921C5.963 20.2 12 20.2 12 20.2s6.037 0 7.698-.465a2.685 2.685 0 0 0 1.884-1.921C22 16.107 22 12 22 12s0-4.107-.418-5.814zM9.99 15.485V8.515L15.98 12z"></path></svg>
              </a>
            </div>
          </div>
          <div className="footer-col app-col">
            <h4>Download our app</h4>
            <div className="app-badges">
              <Link to="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="32" /></Link>
              <Link to="#"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" height="32" /></Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright">
            © 2026. All rights reserved. idamata Technologies
          </div>
          <div className="footer-logo">
            <LogoSmile size={20} />
            <span>idamata</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
