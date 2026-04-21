import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Eye, 
  ShieldCheck,
  MessageCircle,
  User,
  Database,
  Bell
} from 'lucide-react';
import './PrivacyPage.css';

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

const PrivacyPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="layout privacy-page">
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

      <main className="privacy-content-wrapper">
        <div className="container">
          <div className="privacy-card">
            <div className="privacy-header">
              <div className="privacy-icon-circle">
                <Lock size={32} />
              </div>
              <h1>Privacy Policy</h1>
              <p className="last-updated">Last updated: April 21, 2026</p>
            </div>

            <div className="privacy-body">
              <section className="privacy-section">
                <div className="section-title-with-icon">
                  <Database size={24} className="accent-icon" />
                  <h2>1. Information We Collect</h2>
                </div>
                <p>We collect information you provide directly to us when you create an account, post an advertisement, or communicate with us. This may include:</p>
                <div className="info-badges">
                  <span className="info-badge">Name</span>
                  <span className="info-badge">Email</span>
                  <span className="info-badge">Phone Number</span>
                  <span className="info-badge">Location Data</span>
                  <span className="info-badge">Property Details</span>
                </div>
              </section>

              <section className="privacy-section">
                <div className="section-title-with-icon">
                  <Eye size={24} className="accent-icon" />
                  <h2>2. How We Use Your Information</h2>
                </div>
                <p>We use the information we collect to provide, maintain, and improve our services, including to:</p>
                <ul className="privacy-list">
                  <li>Display your advertisements to prospective buyers.</li>
                  <li>Facilitate communication between buyers and sellers.</li>
                  <li>Monitor and analyze trends, usage, and activities.</li>
                  <li>Detect and prevent fraudulent transactions or spam.</li>
                </ul>
              </section>

              <section className="privacy-section">
                <div className="section-title-with-icon">
                  <ShieldCheck size={24} className="accent-icon" />
                  <h2>3. Data Protection</h2>
                </div>
                <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.</p>
              </section>

              <section className="privacy-section">
                <div className="section-title-with-icon">
                  <Bell size={24} className="accent-icon" />
                  <h2>4. Marketing and Notifications</h2>
                </div>
                <p>With your consent, we may send you promotional emails about new properties or special offers. You may opt-out of these communications at any time through your account settings.</p>
              </section>

              <section className="privacy-section">
                <h2>5. Cookies</h2>
                <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
              </section>

              <section className="privacy-section">
                <h2>6. Third Party Disclosure</h2>
                <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website.</p>
              </section>

              <section className="privacy-section">
                <h2>7. Contacting Us</h2>
                <p>If there are any questions regarding this privacy policy, you may contact us using the information on our <Link to="/contact-us">Contact Us</Link> page.</p>
              </section>
            </div>
            
            <div className="privacy-footer">
              <Link to="/" className="back-home-link">Return to Home</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
