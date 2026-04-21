import React from 'react';
import contactImage from '../assets/contact.png';
import {
  Phone,
  Mail,
  MessageCircle,
  User,
  Clock,
  ShieldCheck,
  HelpCircle,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

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

const ContactPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="layout contact-page">
      {/* Header - Fixed to match site style */}
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

      {/* Main Content Area */}
      <div className="contact-container">
        <div className="contact-main-card">

          <div className="contact-hero-image-container">
            <img src={contactImage} alt="Contact Us Illustration" className="contact-hero-image" />
          </div>

          <h1 className="contact-main-title">Contact us</h1>

          <p className="contact-subtext">
            Check out our <Link to="/faqs">FAQs</Link> and <Link to="/safety-tips">Stay Safe</Link> sections to see if your question has already been answered.
            If not, please get in touch with us and we will get back to you as soon as possible.
          </p>

          <h2 className="contact-info-title">You can also call or email us</h2>
          <p className="contact-hours">
            8am - 10pm on weekdays<br />
            8am - 5pm on weekends and mercantile holidays
          </p>

          <div className="contact-methods-row">
            <div className="contact-method-col">
              <a href="tel:+94715116302" className="contact-method-link">
                <div className="contact-method-icon-box">
                  <Phone size={32} strokeWidth={2} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Call us</span>
                  <span className="contact-method-value">+94.71 511 6302</span>
                </div>
              </a>
            </div>

            <div className="contact-divider"></div>
            <div className="contact-method-col">
              <a href="mailto:support@idamata.lk" className="contact-method-link">
                <div className="contact-method-icon-box">
                  <Mail size={32} strokeWidth={2} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Email us</span>
                  <span className="contact-method-value">support@idamata.lk</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
