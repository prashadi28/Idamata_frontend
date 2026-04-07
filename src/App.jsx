import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import {
  Home,
  MapPin,
  Search,
  Building2,
  Bed,
  Briefcase,
  Trees,
  Building,
  Palmtree,
  Key,
  Plus,
  LogOut,
  MessageCircle,
  User,
  Globe,
  ChevronDown,
  Filter
} from 'lucide-react';

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

const categories = [
  { id: 1, name: 'Houses For Sale', icon: <Home />, count: '23,450 ads' },
  { id: 2, name: 'Land For Sale', icon: <Trees />, count: '18,210 ads' },
  { id: 3, name: 'Apartments For Sale', icon: <Building2 />, count: '8,420 ads' },
  { id: 4, name: 'Houses For Rent', icon: <Key />, count: '5,120 ads' },
  { id: 5, name: 'Apartment Rentals', icon: <Bed />, count: '3,890 ads' },
  { id: 6, name: 'Commercial Property', icon: <Building />, count: '4,150 ads' },
  { id: 7, name: 'Holiday Rentals', icon: <Palmtree />, count: '1,230 ads' },
  { id: 8, name: 'New Projects', icon: <Plus />, count: '650 ads' },
  { id: 9, name: 'Short Term Rentals', icon: <Key />, count: '890 ads' },
  { id: 10, name: 'Room Rentals', icon: <Bed />, count: '2,450 ads' }
];


const QuickLinks = () => (
  <div className="container quick-links-section">
    <h3 className="quick-links-title">Quick links</h3>
    <div className="quick-links-grid">
      <div className="quick-link-card">
        <h4>67,019 ads in Property</h4>
        <p><a href="#">Land</a> | <a href="#">Houses For Sale</a> | <a href="#">House Rentals</a> | <a href="#">Apartments For Sale</a> | <a href="#">Apartment Rentals</a></p>
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="container about-section">
      <h3 className="about-title">About idamata, The Largest Marketplace in Sri Lanka!</h3>
      <div className="about-content">
        <p>Sri Lanka's household name for buying and selling anything to everything online. Do you want to buy a property? Check idamata! Do you want to sell a bike? Check idamata.</p>
        <p>idamata has the widest selection of items across Sri Lanka and over 50 different categories. Whether you're looking for a car, mobile phone, house, computer or pet, you will find the best deal on idamata. Our search and filters make it easy to find precisely what you're looking for!</p>

        {expanded && (
          <>
            <h4 className="about-subtitle" style={{ fontWeight: '700', marginTop: '1rem', marginBottom: '0.5rem', color: '#707676' }}>Buy, Sell New and Used Items Or Land Jobs Through idamata</h4>
            <p>Every month hundreds of new users use idamata. SME's and small businesses signup for memberships. You can search & filter products & services from the comfort of your own home.</p>
            <p>As one of the free advertising sites in Sri Lanka it has helped many people to find their favourite phones, pets, cars, and properties. Or even the dream job through classified ads in no time.</p>
          </>
        )}
      </div>
      <button className="show-more-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show less' : 'Show more'} {expanded ? '▲' : '▼'}
      </button>
    </div>
  );
};

function App() {
  const [loginContext, setLoginContext] = useState(null);

  const HomePage = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState("");

    const displayedCategories = selectedCategoryId
      ? categories.filter(cat => cat.id.toString() === selectedCategoryId)
      : categories;

    return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="container nav">
          <div className="nav-left">
            <a href="/" className="logo">
              <LogoSmile size={28} />
              <span className="logo-text">idamata</span>
            </a>
            <a href="/all-ads" className="nav-all-ads">All ads</a>
            <div className="lang-selector">
              <button className="lang-btn">සිංහල</button>
              <button className="lang-btn">தமிழ்</button>
            </div>
          </div>

          <div className="nav-right">
            <button onClick={() => setLoginContext('chat')} className="nav-action-btn">
              <MessageCircle size={18} strokeWidth={2.5} />
              <span>Chat</span>
            </button>
            <button onClick={() => setLoginContext('login')} className="nav-action-btn">
              <User size={18} strokeWidth={2.5} />
              <span>Login</span>
            </button>
            <a href="/post-ad" className="post-ad-btn">POST YOUR PROPERTY</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="location-badge">
            <MapPin size={16} strokeWidth={2.5} />
            <span>All of Sri Lanka</span>
          </div>

          <div className="search-container">
            <select 
              className="search-input category-select"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
            >
              <option value="">All Property Types</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <div className="select-arrow-btn">
              <ChevronDown size={20} strokeWidth={2.5} color="#000" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <main className="container categories-section">
        <h2 className="section-title">Browse Properties by Category</h2>
        <div className="categories-grid">
          {displayedCategories.map(cat => (
            <a key={cat.id} href={`/category/${cat.id}`} className="category-card">
              <div className="category-icon">
                {cat.icon}
              </div>
              <div className="category-info">
                <h3>{cat.name}</h3>
                <p>{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <QuickLinks />
      <AboutSection />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>More from idamata</h4>
              <ul>
                <li><a href="#">Sell Fast</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Banner Ads</a></li>
                <li><a href="#">Boost Ad</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Help & Support</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Stay safe</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>About idamata</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Blog & Guides</h4>
              <ul>
                <li><a href="#">MotorGuide LK</a></li>
                <li><a href="#">PropertyGuide LK</a></li>
                <li><a href="#">Official Blog</a></li>
              </ul>
              <div className="social-links">
                <a href="https://www.facebook.com/peekhosting" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                </a>
                <a href="https://x.com/peekhosting" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/peekhosting" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@PEEKHosting" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M21.582 6.186a2.685 2.685 0 0 0-1.884-1.921C18.037 3.8 12 3.8 12 3.8s-6.037 0-7.698.465a2.685 2.685 0 0 0-1.884 1.921C2 7.893 2 12 2 12s0 4.107.418 5.814a2.685 2.685 0 0 0 1.884 1.921C5.963 20.2 12 20.2 12 20.2s6.037 0 7.698-.465a2.685 2.685 0 0 0 1.884-1.921C22 16.107 22 12 22 12s0-4.107-.418-5.814zM9.99 15.485V8.515L15.98 12z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Download our app</h4>
              <div className="app-links">
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="35" /></a>
                <a href="#" style={{ display: 'block', marginTop: '10px' }}><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" height="35" /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026. All rights reserved. idamata Technologies</p>
            <div style={{ display: 'flex', alignItems: 'center', fontWeight: '800', fontSize: '1.2rem', letterSpacing: '-0.2px' }}>
              <LogoSmile size={24} />
              <span className="logo-text">idamata</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    );
  };

  return (
    <BrowserRouter>
      {loginContext && <LoginPage context={loginContext} onClose={() => setLoginContext(null)} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
