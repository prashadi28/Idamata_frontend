import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  FileText, 
  CheckCircle,
  MessageCircle,
  User
} from 'lucide-react';
import './TermsPage.css';

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

const TermsPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="layout terms-page">
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

      <main className="terms-content-wrapper">
        <div className="container">
          <div className="terms-card">
            <div className="terms-header">
              <div className="terms-icon-circle">
                <Shield size={32} />
              </div>
              <h1>Terms and Conditions</h1>
              <p className="last-updated">Last updated: April 21, 2026</p>
            </div>

            <div className="terms-body">
              <section className="terms-section">
                <h2>1. Introduction</h2>
                <p>Welcome to idamata.lk. By accessing or using our platform, you agree to comply with and be bound by these Terms and Conditions. These terms apply to all visitors, users, and others who access the service.</p>
              </section>

              <section className="terms-section">
                <h2>2. User Accounts</h2>
                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
                <ul className="terms-list">
                  <li><CheckCircle size={16} /> You are responsible for safeguarding your password.</li>
                  <li><CheckCircle size={16} /> You must notify us immediately of any security breach.</li>
                  <li><CheckCircle size={16} /> One individual may only maintain one account.</li>
                </ul>
              </section>

              <section className="terms-section">
                <h2>3. Posting Content</h2>
                <p>Our service allows you to post property advertisements. You are responsible for the content that you post, including its legality, reliability, and appropriateness.</p>
                <p>By posting content, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.</p>
              </section>

              <section className="terms-section">
                <h2>4. Prohibited Activities</h2>
                <p>You may use the service only for lawful purposes. You agree not to use the service:</p>
                <div className="prohibited-grid">
                  <div className="prohibited-item">To post fraudulent listings</div>
                  <div className="prohibited-item">To harass other users</div>
                  <div className="prohibited-item">To distribute malware or viruses</div>
                  <div className="prohibited-item">To scrape data without permission</div>
                </div>
              </section>

              <section className="terms-section">
                <h2>5. Intellectual Property</h2>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of idamata and its licensors.</p>
              </section>

              <section className="terms-section">
                <h2>6. Termination</h2>
                <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              </section>

              <section className="terms-section">
                <h2>7. Limitation of Liability</h2>
                <p>In no event shall idamata, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.</p>
              </section>

              <section className="terms-section">
                <h2>8. Contact Us</h2>
                <p>If you have any questions about these Terms, please <Link to="/contact-us">contact us</Link>.</p>
              </section>
            </div>
            
            <div className="terms-footer">
              <Link to="/" className="back-home-link">Return to Home</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
