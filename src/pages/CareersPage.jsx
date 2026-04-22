import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Rocket, 
  MapPin, 
  ArrowRight,
  MessageCircle,
  User
} from 'lucide-react';
import careersImage from '../assets/Careers.png';

import './CareersPage.css';

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

const CareersPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="layout careers-page">
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

      <main className="careers-content">
        <section className="careers-hero">
          <div className="container">
            <div className="careers-hero-grid">
              <div className="careers-hero-text">
                <h1>Join the team at <span className="highlight">idamata</span></h1>
                <p>We're looking for passionate individuals to help us build the future of real estate in Sri Lanka. Grow your career with a team that values innovation, integrity, and impact.</p>
                <div className="hero-cta-group">
                  <a href="#open-positions" className="primary-cta-btn">View Open Roles</a>
                  <Link to="/contact-us" className="secondary-cta-btn">Reach out to HR</Link>
                </div>
              </div>
              <div className="careers-hero-image">
                <img src={careersImage} alt="Careers at idamata" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="why-join-section">
          <div className="container">
            <h2 className="section-title-centered">Why work with us?</h2>
            <div className="perks-grid">
              <div className="perk-card">
                <div className="perk-icon"><Rocket /></div>
                <h3>Growth Mindset</h3>
                <p>We provide continuous learning opportunities and career paths that help you reach your full potential.</p>
              </div>
              <div className="perk-card">
                <div className="perk-icon"><Users /></div>
                <h3>Collaborative Culture</h3>
                <p>Work with a diverse, inclusive team where every voice is heard and every contribution matters.</p>
              </div>
              <div className="perk-card">
                <div className="perk-icon"><Briefcase /></div>
                <h3>Innovation Driven</h3>
                <p>Be at the forefront of PropTech in Sri Lanka, solving real problems with cutting-edge technology.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="open-positions" className="positions-section">
          <div className="container">
            <h2 className="section-title">Open Positions</h2>
            <div className="positions-list">
              <div className="position-item">
                <div className="position-info">
                  <h3>Senior Frontend Engineer (React)</h3>
                  <div className="position-meta">
                    <span><MapPin size={16} /> Colombo 07</span>
                    <span className="dot">•</span>
                    <span>Engineering</span>
                    <span className="dot">•</span>
                    <span>Full-time</span>
                  </div>
                </div>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>

              <div className="position-item">
                <div className="position-info">
                  <h3>Marketing & Sales Lead</h3>
                  <div className="position-meta">
                    <span><MapPin size={16} /> Hybrid / Remote</span>
                    <span className="dot">•</span>
                    <span>Marketing</span>
                    <span className="dot">•</span>
                    <span>Full-time</span>
                  </div>
                </div>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>

              <div className="position-item">
                <div className="position-info">
                  <h3>Customer Success specialist</h3>
                  <div className="position-meta">
                    <span><MapPin size={16} /> Colombo Office</span>
                    <span className="dot">•</span>
                    <span>Support</span>
                    <span className="dot">•</span>
                    <span>Full-time</span>
                  </div>
                </div>
                <button className="apply-btn">Apply Now <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="no-positions-note">
              <p>Don't see a role that fits? <Link to="/contact-us">Send us your CV anyway!</Link> we're always looking for talent.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareersPage;
