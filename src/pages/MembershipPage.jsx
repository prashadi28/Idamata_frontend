import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  User,
  CheckCircle,
  Star,
  Award
} from 'lucide-react';
import membershipImage from '../assets/membership.png';
import './MembershipPage.css';

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

const MembershipPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="membership-page">
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

      <div className="membership-container">
        <div className="membership-hero">
          <div className="membership-hero-text">
            <h1>Upgrade Your Experience with idamata Membership</h1>
            <p>Unlock premium features, post more ads, and reach a wider audience across Sri Lanka. Get the most out of your advertising journey.</p>
          </div>
          <div className="membership-hero-image-container">
            <img src={membershipImage} alt="idamata Membership" className="membership-hero-image" />
          </div>
        </div>

        <div className="membership-benefits-section">
          <h2>Why Become a Member?</h2>
          <div className="membership-benefits-grid">
            <div className="benefit-card">
              <Star size={40} color="#009f7f" />
              <h3>More Visibility</h3>
              <p>Your ads will get featured placement, meaning more eyes on your properties and faster sales.</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={40} color="#009f7f" />
              <h3>Verified Status</h3>
              <p>Get a trusted seller badge on your profile, building trust with potential buyers.</p>
            </div>
            <div className="benefit-card">
              <Award size={40} color="#009f7f" />
              <h3>Bulk Listing Tools</h3>
              <p>Manage multiple properties with ease using our advanced seller dashboard.</p>
            </div>
          </div>
        </div>

        <div className="membership-callout">
          <h2>Ready to get started?</h2>
          <p>Join thousands of successful sellers on idamata.</p>
          <button className="membership-cta-btn">View Pricing Plans</button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
