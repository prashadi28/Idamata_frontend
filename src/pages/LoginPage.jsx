import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import './LoginPage.css';

const IconPosting = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2, 2) rotate(-25 14 14)">
      <rect x="6" y="8" width="16" height="20" rx="3" fill="#e0d6c1" />
      <rect x="4" y="6" width="16" height="20" rx="3" fill="#c9b793" />
      <circle cx="12" cy="10" r="2.5" fill="#fff" />
    </g>
    <circle cx="24" cy="24" r="8" fill="#149777" />
    <path d="M24 21.5a2 2 0 100-4 2 2 0 000 4zm-3.5 4.5c0-2 2-3 3.5-3s3.5 1 3.5 3v1h-7v-1z" fill="#fff" />
  </svg>
);

const IconFavorite = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="6" height="12" rx="3" transform="rotate(-40 20 20)" fill="#c9b793" />
    <circle cx="14" cy="14" r="10" fill="#f4f7f9" stroke="#efc030" strokeWidth="2.5" />
    <path d="M14 8l1.5 4h4.5l-3.5 3 1.5 4-4-2.5-4 2.5 1.5-4-3.5-3h4.5L14 8z" fill="#efc030" />
  </svg>
);

const IconManage = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2, 2) rotate(-35 14 14)">
      <rect x="4" y="6" width="15" height="19" rx="3" fill="#149777" />
      <rect x="8" y="10" width="15" height="19" rx="3" fill="#efc030" />
      <rect x="12" y="14" width="15" height="19" rx="3" fill="#2d525c" />
      <circle cx="19.5" cy="18.5" r="2" fill="#fff" />
      <rect x="15.5" y="24" width="8" height="2.5" rx="1" fill="#fff" opacity="0.8" />
    </g>
  </svg>
);

export default function LoginPage({ onClose, context = 'login' }) {
  const [mobile, setMobile] = useState('');


  const [testName, setTestName] = useState('peshala');
  const [testPassword, setTestPassword] = useState('1234567');

  let title = 'Welcome to idamata';
  let subtitle = 'Log in to manage your properties.';

  if (context === 'chat') {
    title = 'My Chats';
    subtitle = 'Login to see your chats';
  } else if (context === 'post') {
    title = 'Post an ad';
    subtitle = 'Login to post your ad and keep track of it in your account.';
  }

  return (
    <div className="login-overlay">
      <div className="login-modal">

        {/* Left Panel */}
        <div className="login-left">
          <h2 className="login-welcome">{title}</h2>
          <p className="login-sub">{subtitle}</p>

          <ul className="login-features">
            <li>
              <span className="feature-icon"><IconPosting /></span>
              <span>Start posting your own ads.</span>
            </li>
            <li>
              <span className="feature-icon"><IconFavorite /></span>
              <span>Mark ads as favorite and view them later.</span>
            </li>
            <li>
              <span className="feature-icon"><IconManage /></span>
              <span>View and manage your ads at your convenience.</span>
            </li>
          </ul>
        </div>

        {/* Right Panel */}
        <div className="login-right">
          <button onClick={onClose} className="login-close" aria-label="Close"><X size={20} strokeWidth={2.5} /></button>

          <h3 className="login-right-title">Continue with mobile number &amp; OTP</h3>

          <div className="login-mobile-row">
            <div className="login-country-code">
              <span>+94</span>
              <span className="dropdown-caret">▾</span>
            </div>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="login-mobile-input"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              maxLength={10}
            />
          </div>

          <button className="login-btn login-btn-continue">Continue</button>

          <div className="login-or"><span>OR</span></div>

          <button className="login-btn login-btn-google">
            <svg width="16" height="16" viewBox="0 0 48 48" style={{ marginRight: '8px' }}>
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.8 2.4 30.3 0 24 0 14.7 0 6.7 5.4 2.9 13.3l7.8 6C12.4 13 17.8 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17z" />
              <path fill="#FBBC05" d="M10.7 28.7A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.8-6A23.8 23.8 0 0 0 0 24c0 3.8.9 7.4 2.5 10.6l8.2-5.9z" />
              <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8C30.3 38 27.3 39 24 39c-6.2 0-11.5-3.5-13.3-8.7l-8.2 5.9C6.5 43.9 14.7 48 24 48z" />
            </svg>
            Continue with Google
          </button>

          <button className="login-btn login-btn-facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ marginRight: '8px' }}>
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
            Continue with Facebook
          </button>

          <button className="login-btn login-btn-email">
            <Mail size={16} style={{ marginRight: '8px' }} strokeWidth={2.5} />
            Continue with Email
          </button>

          {/* Testing UI Section */}
          <div className="login-testing-ui" style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f9fafb', border: '1px dashed #ced4da', borderRadius: '12px' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px', fontSize: '0.85rem', fontWeight: 'bold', color: '#6c757d' }}>FRONTEND TESTING UI</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                type="text"
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                placeholder="Name"
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #dee2e6', fontSize: '0.9rem', outline: 'none' }}
              />
              <input
                type="password"
                value={testPassword}
                onChange={(e) => setTestPassword(e.target.value)}
                placeholder="Password"
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #dee2e6', fontSize: '0.9rem', outline: 'none' }}
              />
              <button
                className="login-btn"
                style={{ backgroundColor: '#343a40', color: 'white', marginTop: '4px', border: 'none' }}
                onClick={() => {
                  alert(`Testing Login \nName: ${testName}\nPassword: ${testPassword}`);
                  localStorage.setItem('idamata_logged_in', 'true');
                  window.location.href = '/';
                }}
              >
                Test Login
              </button>
            </div>
          </div>

          <div className="login-terms-container">
            <p className="login-terms-head">By signing up for an account you agree to our</p>
            <p className="login-terms-links">
              <a href="#">Terms and Conditions</a>
              <span className="login-terms-dot">·</span>
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
