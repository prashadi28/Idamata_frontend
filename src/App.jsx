import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PropertiesListingPage from './pages/PropertiesListingPage';
import SellFastPage from './pages/SellFastPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import CustomDropdown from './components/CustomDropdown';
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
];


const QuickLinks = () => (
  <div className="container quick-links-section">
    <h3 className="quick-links-title">Quick links</h3>
    <div className="quick-links-grid">
      <div className="quick-link-card">
        <h4>67,019 ads in Property</h4>
        <p><a href="#">Houses For Sale</a> | <a href="#">Land For Sale</a> | <a href="#">Houses For Rent</a> | <a href="#">Apartments For Sale</a> | <a href="#">Apartment Rentals</a> | <a href="#">Commercial Property</a></p>
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

const generateMockAds = (categoryName) => {
  const cat = categoryName.toLowerCase();
  let details = '4 Beds • 3 Baths • 20 Perches';
  let imgs = [];

  if (cat.includes('land')) {
    details = '20 Perches';
    imgs = [
      'https://images.unsplash.com/photo-1629016943072-0bf0ce4e2608?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1622480771645-8fe195084754?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1683547021548-fb209f39b225?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80',
      'https://images.unsplash.com/photo-1428509774491-cfac96e12253?w=400&q=80'
    ];
  } else if (cat.includes('apartment')) {
    details = '2 Beds • 2 Baths • Apartment';
    imgs = [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80',
      'https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&q=80'
    ];
  } else if (cat.includes('commercial')) {
    details = 'Office Space • 2000 sqft';
    imgs = [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=400&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80',
      'https://images.unsplash.com/photo-1627549569239-0d1119c96f1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80'
    ];
  } else if (cat.includes('holiday') || cat.includes('short term')) {
    details = 'Villa • Pool • Near Beach';
    imgs = [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80',
      'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=400&q=80',
      'https://plus.unsplash.com/premium_photo-1687710306880-95c72d9a19c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1687996107318-c4347de0983d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
  } else if (cat.includes('project')) {
    details = 'New Development • Off Plan';
    imgs = [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80',
      'https://plus.unsplash.com/premium_photo-1706362205831-a8e64f46d378?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80',
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=400&q=80',
      'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=400&q=80',
      'https://images.unsplash.com/photo-1649479030733-821d4dc04878?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
  } else if (cat.includes('room')) {
    details = '1 Bed • Furnished Room';
    imgs = [
      'https://images.unsplash.com/photo-1604809226867-0c54292210d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80',
      ''
    ];
  } else {
    // Default (Houses)
    imgs = [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80'
    ];
  }

  return Array(6).fill(0).map((_, i) => ({
    id: i,
    title: `Premium ${categoryName} in ${['Colombo', 'Kandy', 'Galle', 'Negombo'][i % 4]}`,
    price: `Rs ${Math.floor(Math.random() * 80 + 10)},000,000`,
    location: `${['Colombo 7', 'Peradeniya', 'Fort', 'Beach Road'][i % 4]}, ${['Colombo', 'Kandy', 'Galle', 'Negombo'][i % 4]}`,
    details: details,
    img: imgs[i % imgs.length]
  }));
};

const CategoryRow = ({ category }) => {
  const scrollRef = React.useRef(null);
  const ads = React.useMemo(() => generateMockAds(category.name), [category.name]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth * 0.75;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="category-ads-row">
      <div className="category-info-panel">
        <div className="category-icon-large">{category.icon}</div>
        <div className="category-info-text">
          <h3 className="category-title-large">{category.name}</h3>
          <p className="category-count-large">{category.count}</p>
        </div>
        <Link to={`/category/${category.id}`} className="view-all-btn">View All Ads</Link>
      </div>
      <div className="category-carousel-wrapper">
        <button className="carousel-nav-btn prev" onClick={() => scroll('left')}>❮</button>
        <div className="category-carousel-container" ref={scrollRef}>
          {ads.map((ad, idx) => (
            <a key={idx} href={`/ad/${ad.id}`} className="vertical-ad-card">
              <div className="vertical-ad-image-container">
                <img src={ad.img} alt={ad.title} className="vertical-ad-image" />
              </div>
              <div className="vertical-ad-content">
                <h4 className="vertical-ad-title">{ad.title}</h4>
                <p className="vertical-ad-location">{ad.location}</p>
                <p className="vertical-ad-price">{ad.price}</p>
                <p className="vertical-ad-details">{ad.details}</p>
              </div>
            </a>
          ))}
        </div>
        <button className="carousel-nav-btn next" onClick={() => scroll('right')}>❯</button>
      </div>
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
              <Link to="/" className="logo">
                <LogoSmile size={28} />
                <span className="logo-text">idamata</span>
              </Link>
              <Link to="/all-ads" className="nav-all-ads">All ads</Link>
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
              <button onClick={() => setLoginContext('post')} className="post-ad-btn" style={{border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem'}}>POST YOUR PROPERTY</button>
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
              <CustomDropdown
                options={categories}
                selectedOption={categories.find(c => c.id.toString() === selectedCategoryId)}
                onSelect={(option) => setSelectedCategoryId(option ? option.id.toString() : "")}
                placeholder="All Property Types"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <main className="container categories-section">
          <h2 className="section-title">Featured Properties by Category</h2>
          <div className="category-rows-container">
            {displayedCategories.map(cat => (
              <CategoryRow key={cat.id} category={cat} />
            ))}
          </div>
        </main>

        <QuickLinks />
        <AboutSection />

      </div>
    );
  };

  return (
    <BrowserRouter>
      {loginContext && <LoginPage context={loginContext} onClose={() => setLoginContext(null)} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<PropertiesListingPage onChatClick={() => setLoginContext('chat')} onLoginClick={(ctx = 'login') => setLoginContext(ctx)} />} />
        <Route path="/sell-fast" element={<SellFastPage onChatClick={() => setLoginContext('chat')} onLoginClick={(ctx = 'login') => setLoginContext(ctx)} />} />
        <Route path="/contact-us" element={<ContactPage onChatClick={() => setLoginContext('chat')} onLoginClick={(ctx = 'login') => setLoginContext(ctx)} />} />
        <Route path="/faqs" element={<FAQPage onChatClick={() => setLoginContext('chat')} onLoginClick={(ctx = 'login') => setLoginContext(ctx)} />} />
        <Route path="/about-us" element={<AboutPage onChatClick={() => setLoginContext('chat')} onLoginClick={(ctx = 'login') => setLoginContext(ctx)} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
