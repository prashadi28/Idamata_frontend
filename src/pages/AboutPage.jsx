import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  User,
  Tag,
  Search,
  Phone,
  Mail
} from 'lucide-react';
import aboutImage from '../assets/about.png';
import './AboutPage.css';

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

const AboutPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="about-page">
      {/* Header - Matching Contact Page Style */}
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
            <Link to="/post-ad" className="post-ad-btn" style={{ backgroundColor: '#ffcc00', color: '#000' }}>POST YOUR PROPERTY</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="about-container">
        <div className="about-main-card">
          <div className="about-hero-image-container">
            <img src={aboutImage} alt="About idamata" className="about-hero-image" />
          </div>

          <h1 className="about-main-title">About idamata</h1>
          <p className="about-description">
            idamata is a platform on which you can buy and sell almost everything! Use the location selector to find the deals close to you.
          </p>

          <div className="about-features-grid">
            <div className="about-feature-item">
              <div className="about-feature-icon">
                <Tag size={32} color="#009f7f" />
              </div>
              <div className="about-feature-content">
                <h3>Have items to sell?</h3>
                <p>
                  Sign up for a free account to start selling your items! It takes less than 2 minutes to post an ad.
                  Visit <Link to="/how-to-sell-fast">How to sell fast</Link> for some tips on creating great ads that generate a lot of buyer interest.
                  If you have a lot of items to sell, consider buying a <Link to="/membership">membership</Link> and enjoy additional benefits.
                  We also have some great tools that help make your ad stand out from the rest.
                  Check out the <Link to="/ad-promotions">Ad Promotions</Link> page for more information.
                </p>
              </div>
            </div>

            <div className="about-feature-item">
              <div className="about-feature-icon">
                <Search size={32} color="#009f7f" />
              </div>
              <div className="about-feature-content">
                <h3>Looking to buy something?</h3>
                <p>
                  idamata has the widest selection of items all over Sri Lanka and across more than 50 different categories.
                  Whether you're looking for a car, mobile phone, house, computer or pet, you will find the best deal on idamata.
                  Our search and filters make it super easy to find exactly what you're looking for!
                </p>
              </div>
            </div>
          </div>

          <div className="about-footer-note">
            <p>
              Please note that we carefully review every ad before it is published to ensure that the quality is up to our standards.
              Check out the <Link to="/faqs">FAQs</Link> page for answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="about-contact-section">
          <h2 className="about-contact-title">Questions? Get in touch!</h2>
          <p className="about-contact-subtitle">9am - 6pm on weekdays</p>
          <p className="about-contact-hours">8am - 5pm on weekends and mercantile holidays</p>

          <div className="about-contact-methods">
            <a href="tel:0112350350" className="about-contact-method">
              <div className="about-contact-icon">
                <Phone size={24} />
              </div>
              <div className="about-contact-info">
                <span className="about-contact-label">Call us</span>
                <span className="about-contact-value">+94.71 511 6302</span>
              </div>
            </a>

            <a href="mailto:support@idamata.lk" className="about-contact-method">
              <div className="about-contact-icon">
                <Mail size={24} />
              </div>
              <div className="about-contact-info">
                <span className="about-contact-label">Email us</span>
                <span className="about-contact-value">contact {"{at}"} peekhosting.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
