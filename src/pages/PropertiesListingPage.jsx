import React from 'react';
import {
  Home, MapPin, Search, ChevronDown, CheckCircle2, Bookmark,
  MessageCircle, User, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './PropertiesListingPage.css';

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

const mockProperties = [
  {
    id: 1,
    title: "Negombo Brand New Super Luxury Solid House",
    beds: 4,
    baths: 4,
    location: "Gampaha, Houses For Sale",
    price: "Rs 51,000,000",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    isMember: true,
    isVerified: true,
    isTopAd: true,
  },
  {
    id: 2,
    title: "Luxury House For Sale In Pelawatta",
    beds: 5,
    baths: 3,
    location: "Colombo, Houses For Sale",
    price: "Rs 65,000,000",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
    isMember: true,
    isVerified: true,
    isTopAd: true,
  },
  {
    id: 3,
    title: "Battaramulla Pelawatthe Lake Road Brand new House",
    beds: 4,
    baths: 4,
    location: "Colombo, Houses For Sale",
    price: "Rs 64,000,000",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
    isMember: true,
    isVerified: true,
    isFeatured: true, // Note this
    imageOverlay: "+10"
  },
  {
    id: 4,
    title: "Two Story House For Sale In Dehiwala",
    beds: 4,
    baths: 3,
    location: "Colombo, Houses For Sale",
    price: "Rs 45,000,000",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&q=80",
    isMember: true,
    isVerified: true,
  }
];

export default function PropertiesListingPage({ onChatClick, onLoginClick }) {
  return (
    <div className="layout listing-page">
      {/* Header - kept consistent with the main app but simplified for the mock */}
      <header className="header" style={{ background: '#009f7f' }}>
        <div className="container nav">
          <div className="nav-left">
            <Link to="/" className="logo" style={{ color: '#fff' }}>
              <LogoSmile size={28} />
              <span className="logo-text">idamata</span>
            </Link>
            <Link to="/all-ads" className="nav-all-ads" style={{ color: '#fff' }}>All ads</Link>
            <div className="lang-selector">
              <button className="lang-btn" style={{ color: '#fff' }}>සිංහල</button>
              <button className="lang-btn" style={{ color: '#fff' }}>தமிழ்</button>
            </div>
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

      <div className="listing-top-bar">
        <div className="container">
          <div className="top-search-row">
            <h1 className="top-search-title">Houses for Sale in Sri Lanka</h1>
          </div>

          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span> <Link to="/all-ads">All ads</Link> <span>›</span> <Link to="/category/property">Property</Link> <span>›</span> <strong>Houses For Sale</strong>
          </div>

          <div className="filter-row">
            <button className="filter-btn active-filter-outline">
              <MapPin size={14} /> Refine
            </button>
            <button className="filter-btn">
              All of Sri Lanka <ChevronDown size={14} />
            </button>
            <button className="filter-btn active-filter">
              Houses For Sale <span style={{ marginLeft: 5 }}>✕</span>
            </button>
            <button className="filter-btn">
              Price <ChevronDown size={14} />
            </button>
            <button className="filter-btn">
              House size <ChevronDown size={14} />
            </button>
            <button className="filter-btn">
              Bedrooms <ChevronDown size={14} />
            </button>
            <button className="filter-btn">
              Bathrooms <ChevronDown size={14} />
            </button>
            <button className="filter-btn">
              Type of poster <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="container listing-main-content">
        {/* Left Sidebar */}
        <aside className="listing-sidebar">
          <div className="sidebar-category-tree">
            <ul>
              <li className="tree-level-1"><Link to="/all-ads">All Categories</Link></li>
              <li className="tree-level-2">
                <Home size={16} color="#ff3366"/> <Link to="/category/property">Property</Link>
              </li>
              <li className="tree-level-3">
                <Home size={16} color="#707676" /> 
                <span style={{ fontWeight: 600 }}>Houses For Sale</span>
              </li>
              <li className="tree-level-4 tree-count">(19,991)</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="listing-results">
          <div className="results-header">
            <span className="results-count">Showing 1-25 of 19,991 ads</span>
            <button className="save-search-btn">
              <Bookmark size={16} /> Save search
            </button>
          </div>

          <div className="cards-list">
            {mockProperties.map(property => (
              <Link to={`/ad/${property.id}`} key={property.id} className={`horizontal-card ${property.isFeatured ? 'horizontal-card-featured' : ''}`}>
                {property.isFeatured && <div className="featured-tag">FEATURED</div>}
                
                <div className="card-image-wrapper">
                  <img src={property.img} alt={property.title} />
                  {property.imageOverlay && (
                    <div className="image-overlay-text">{property.imageOverlay}</div>
                  )}
                </div>
                
                <div className="card-details">
                  <h3 className="card-title">{property.title}</h3>
                  <p className="card-specs">Bedrooms: {property.beds}, Bathrooms: {property.baths}</p>
                  
                  {(property.isMember || property.isVerified) && (
                    <div className="card-badges">
                      {property.isMember && (
                        <span className="badge-member"><Star size={10} fill="white" /> MEMBER</span>
                      )}
                      {property.isVerified && (
                        <span className="badge-verified"><CheckCircle2 size={12} /> VERIFIED SELLER</span>
                      )}
                    </div>
                  )}
                  
                  <p className="card-location">{property.location}</p>
                  <p className="card-price">{property.price}</p>
                </div>
                {property.isTopAd && (
                  <div className="top-ad-badge">
                    <div className="top-ad-circle">1</div>
                    <div className="top-ad-tail"></div>
                  </div>
                )}

                {property.isFeatured && (
                  <div className="featured-crown">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffcc00" stroke="none">
                      <path d="M3 17h18l-2-11-4 6-3-8-3 8-4-6L3 17zm0 2h18v2H3v-2z" />
                    </svg>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </main>

        {/* Right Sidebar (Ads) */}
        <aside className="ad-sidebar">
          <div className="sidebar-banner">
             <div style={{ background: '#333', color: '#fff', padding: '15px', textAlign: 'center', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ margin: 0 }}>PRIME GROUP</h3>
                <p>Super Luxury Houses</p>
                <button style={{ background: '#fff', color: '#0074d9', border: 'none', padding: '5px 15px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>CLICK HERE</button>
             </div>
          </div>
          <div className="sidebar-banner" style={{ background: '#fdf5eb', padding: '20px', border: '1px solid #eadbc7', textAlign: 'center', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ color: '#bf4040', fontFamily: 'serif', margin: 0, fontSize: '24px' }}>Elizabeth</h4>
            <p style={{ color: '#7a5a5a', fontSize: '14px' }}>Victorian arches in tropical light.</p>
            <p style={{ color: '#bf4040', fontWeight: 'bold', marginTop: '30px' }}>0702 777 777</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
