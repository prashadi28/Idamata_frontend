import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  User,
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';
import advertiseImage from '../assets/advertise.png';
import leaderboardImage from '../assets/leaderboard.png';
import './BannerAdsPage.css';

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

const BannerAdsPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="banner-ads-page">
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

      <div className="banner-ads-container">
        {/* Hero Section */}
        <div className="banner-ads-hero">
          <div className="banner-ads-hero-text">
            <h1>Maximize Your Reach with Banner Ads</h1>
            <p>Put your brand in front of thousands of potential buyers across Sri Lanka. Advertise on idamata today and grow your business.</p>
          </div>
          <div className="banner-ads-hero-image-container">
            <img src={advertiseImage} alt="Advertise on idamata" className="banner-ads-hero-image" />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="banner-ads-benefits-section">
          <h2>Why Advertise With Us?</h2>
          <div className="banner-ads-benefits-grid">
            <div className="benefit-card">
              <TrendingUp size={40} color="#009f7f" />
              <h3>High Traffic</h3>
              <p>Reach a massive audience of highly targeted property seekers daily.</p>
            </div>
            <div className="benefit-card">
              <Target size={40} color="#009f7f" />
              <h3>Targeted Placements</h3>
              <p>Show your ads in specific locations or categories to meet your exact marketing goals.</p>
            </div>
            <div className="benefit-card">
              <Zap size={40} color="#009f7f" />
              <h3>Instant Results</h3>
              <p>Drive immediate traffic to your website or property listings efficiently.</p>
            </div>
          </div>
        </div>
        
        {/* Leaderboard Detail Section */}
        <div className="banner-ads-leaderboard-section">
          <div className="leaderboard-image-container">
            <img src={leaderboardImage} alt="Leaderboard Ad Placement" className="leaderboard-image" />
          </div>
          <div className="leaderboard-text">
            <h2>Premium Leaderboard Placement</h2>
            <p>Our Leaderboard ads offer maximum visibility at the top of our highest trafficked pages. Grab users' attention the exact moment they visit idamata.</p>
            <ul className="leaderboard-features">
              <li>✓ Placed across Homepage and Category views</li>
              <li>✓ Highest average click-through rates (CTR)</li>
              <li>✓ Fully responsive across Desktop & Mobile</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="banner-ads-callout">
          <h2>Ready to Launch Your Campaign?</h2>
          <p>Get in touch with our sales team to discuss customized advertising packages.</p>
          <Link to="/contact-us" className="banner-ads-cta-btn">Contact Sales Team</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerAdsPage;
