import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  User,
  Shield,
  Eye,
  AlertTriangle,
  Lock
} from 'lucide-react';
import staySafeImage from '../assets/stay safe.png';
import './StaySafePage.css';

const LogoSmile = ({ size = 28 }) => (
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

const StaySafePage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="stay-safe-page">
      {/* Header */}
      <header className="header" style={{ background: '#009f7f' }}>
        <div className="container nav">
          <div className="nav-left">
            <Link to="/" className="logo" style={{ color: '#fff' }}>
              <LogoSmile size={28} />
              <span className="logo-text">idamata</span>
            </Link>
            <Link to="/all-ads" className="nav-all-ads" style={{ color: '#fff' }}>All ads</Link>
          </div>

          <div className="nav-right">
            <button onClick={onChatClick} className="nav-action-btn" style={{ color: '#fff' }}>
              <MessageCircle size={18} strokeWidth={2.5} />
              <span>Chat</span>
            </button>
            <button onClick={onLoginClick} className="nav-action-btn" style={{ color: '#fff' }}>
              <User size={18} strokeWidth={2.5} />
              <span>Login</span>
            </button>
            <button onClick={() => onLoginClick('post')} className="post-ad-btn" style={{ backgroundColor: '#ffcc00', color: '#000', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}>POST YOUR PROPERTY</button>
          </div>
        </div>
      </header>

      <div className="stay-safe-container">
        {/* Hero Section */}
        <div className="stay-safe-hero">
          <div className="stay-safe-hero-text">
            <h1>Maintain Your Safety on idamata</h1>
            <p>We are highly committed to making idamata a safe place for our users to buy, sell, and rent. Learn how you can trade responsibly.</p>
          </div>
          <div className="stay-safe-hero-image-container">
            <img src={staySafeImage} alt="Stay Safe on idamata" className="stay-safe-hero-image" />
          </div>
        </div>

        {/* Safety Tips Section */}
        <div className="stay-safe-tips-section">
          <h2>Essential Safety Guidelines</h2>
          <div className="stay-safe-tips-grid">
            <div className="tip-card">
              <Eye size={40} color="#009f7f" />
              <h3>Inspect Before Buying</h3>
              <p>Always inspect the property or item in person thoroughly before making any transaction or signing any documents.</p>
            </div>
            <div className="tip-card">
              <Lock size={40} color="#009f7f" />
              <h3>Protect Personal Info</h3>
              <p>Never give out your financial information, banking details, or exact address to unknown buyers without prior verified checks.</p>
            </div>
            <div className="tip-card">
              <AlertTriangle size={40} color="#009f7f" />
              <h3>Avoid Advance Payments</h3>
              <p>Beware of sellers asking for advance payment fees before showing the property. Always deal face-to-face if possible.</p>
            </div>
            <div className="tip-card">
              <Shield size={40} color="#009f7f" />
              <h3>Verify Paperwork</h3>
              <p>Ensure all legal documents for land, property, or vehicles are genuine by verifying with local authorities before finalizing.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="stay-safe-callout">
          <h2>Found a Suspicious Ad?</h2>
          <p>If you encounter any suspicious activity, fraudulent ads, or potential scams, report it immediately to our team.</p>
          <Link to="/contact-us" className="stay-safe-cta-btn">Report an Issue</Link>
        </div>
      </div>
    </div>
  );
};

export default StaySafePage;
