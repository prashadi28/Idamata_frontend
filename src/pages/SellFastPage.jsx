import React from 'react';
import {
  Zap,
  ArrowUpCircle,
  Clock,
  Crown,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle2,
  FileText,
  Image,
  Tag,
  ArrowUp,
  MessageCircle,
  User,
  Link as LinkIcon // aliasing to avoid conflict with react-router-dom Link
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './SellFastPage.css';

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

const SellFastPage = ({ onChatClick, onLoginClick }) => {
  return (
    <div className="layout sell-fast-page">
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
            <Link to="/post-ad" className="post-ad-btn" style={{ backgroundColor: '#ffcc00', color: '#000' }}></Link>
          </div>
        </div>
      </header>

      {/* Hero Icon Animation Section */}
      <section className="sell-fast-tips-hero">
        <div className="container center-content">
          <div className="hero-illustration">
            <div className="illustration-background">
              <div className="line l1"></div>
              <div className="line l2"></div>
              <div className="line l3"></div>
              <div className="clock-wrapper">
                <Clock size={80} color="#ffcc00" strokeWidth={2} />
              </div>
              <div className="doc-bg-1"></div>
              <div className="doc-bg-2"></div>
            </div>
          </div>
          <h1>Sell fast on idamata</h1>
          <p className="hero-subtext">Below are some tips on how to post ads that attract a lot of buyer interest.</p>
          <a href="#" className="rules-link">See our ad posting rules</a>
        </div>
      </section>

      {/* Tips Grid Section */}
      <section className="tips-grid-section">
        <div className="container">
          <div className="tips-2x2-grid">

            {/* Tip 1 */}
            <div className="tip-item">
              <div className="tip-icon-box">
                <div className="icon-circle icon-blue">
                  <FileText size={32} />
                  <div className="check-small"><CheckCircle2 size={12} fill="#009f7f" color="white" /></div>
                </div>
              </div>
              <div className="tip-content">
                <h3>Add as much detail as you can</h3>
                <p>Ads with clear details get more views! Include keywords and information that buyers will be interested in. Remember to be honest while providing these details.</p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="tip-item">
              <div className="tip-icon-box">
                <div className="icon-circle icon-green">
                  <Image size={32} />
                </div>
              </div>
              <div className="tip-content">
                <h3>Add great photos</h3>
                <p>Use clear photos of the item you're selling. Ads with real photos get up to 10 times more views than ads with catalogue/stock photos. Make sure the lighting is good and take photos from different angles.</p>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="tip-item">
              <div className="tip-icon-box">
                <div className="icon-circle icon-yellow">
                  <div className="dollar-icon">$</div>
                  <div className="check-small"><CheckCircle2 size={12} fill="#009f7f" color="white" /></div>
                </div>
              </div>
              <div className="tip-content">
                <h3>Pick the right price</h3>
                <p>Everything sells if the price is right! Browse similar ads on idamata and choose a competitive price. In general, the lower the price, the higher the demand.</p>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="tip-item">
              <div className="tip-icon-box">
                <div className="icon-circle icon-orange">
                  <Tag size={32} />
                  <div className="arrow-up-small"><ArrowUp size={12} /></div>
                </div>
              </div>
              <div className="tip-content">
                <h3>Boost your ads!</h3>
                <p>Now that you have created a great ad, it's time to show it off! <Link to="/boost-ad" className="blue-link">Boost your ad</Link> to get up to 10 times more views and interested buyers for your ad.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Questions / Contact Section */}
      <section className="questions-section">
        <div className="container">
          <div className="questions-box">
            <h2>Questions? Get in touch!</h2>
            <p className="hours-text">8am - 10pm on weekdays<br />8am - 5pm on weekends and mercantile holidays</p>

            <div className="contact-row-detailed">
              <div className="contact-col">
                <div className="contact-link">
                  <Phone size={20} color="#009f7f" />
                  <div className="contact-info-text">
                    <span className="contact-label">Call us</span>
                    <span className="contact-value">+94.71 511 6302</span>
                  </div>
                </div>
              </div>
              <div className="contact-divider"></div>
              <div className="contact-col">
                <div className="contact-link">
                  <Mail size={20} color="#009f7f" />
                  <div className="contact-info-text">
                    <span className="contact-label">Email us</span>
                    <span className="contact-value">contact {"{at}"} peekhosting.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellFastPage;
