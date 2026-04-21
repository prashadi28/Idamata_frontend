import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  User,
  ArrowUpCircle,
  Eye,
  Clock
} from 'lucide-react';
import boostAdImage from '../assets/boostad.png';
import './BoostAdPage.css';

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

const BoostAdPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="boost-ad-page">
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

      <div className="boost-ad-container">
        {/* Hero Section */}
        <div className="boost-ad-hero">
          <div className="boost-ad-hero-text">
            <h1>Sell Faster by Boosting Your Ad</h1>
            <p>Get up to 10x more views and replies by prominently featuring your ad directly at the top of our search results.</p>
          </div>
          <div className="boost-ad-hero-image-container">
            <img src={boostAdImage} alt="Boost Your Ad on idamata" className="boost-ad-hero-image" />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="boost-ad-benefits-section">
          <h2>How Boosting Works</h2>
          <div className="boost-ad-benefits-grid">
            <div className="benefit-card">
              <ArrowUpCircle size={40} color="#009f7f" />
              <h3>Bump Up</h3>
              <p>Move your ad back to the top of the regular listings. It will organically drop down as new ads are posted.</p>
            </div>
            <div className="benefit-card">
              <Eye size={40} color="#009f7f" />
              <h3>Top Ad</h3>
              <p>Lock your ad in the premium slots at the absolute top of the page for days or even weeks.</p>
            </div>
            <div className="benefit-card">
              <Clock size={40} color="#009f7f" />
              <h3>Urgent Label</h3>
              <p>Add an 'Urgent' tag to stand out and let buyers know that you are looking for a quick deal.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="boost-ad-callout">
          <h2>Ready to get more visibility?</h2>
          <p>Login to your account, go to 'My Ads' and select the 'Boost' option.</p>
          <button onClick={() => onLoginClick('login')} className="boost-ad-cta-btn">Login and Boost Now</button>
        </div>
      </div>
    </div>
  );
};

export default BoostAdPage;
