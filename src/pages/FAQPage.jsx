import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  HelpCircle,
  Briefcase,
  ShoppingBag,
  Tag,
  ArrowLeft,

  X,
  MessageCircle,
  User
} from 'lucide-react';
import faqBanner from '../assets/FAQ with vibrant characters and icons.png';
import './FAQPage.css';

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

const FAQ_DATA = [
  {
    id: 'general',
    title: 'General questions about idamata',
    description: 'Other frequently asked questions about the platform',
    icon: <HelpCircle size={24} />,
    articles: [
      {
        id: 'g1',
        question: 'How do I use the filter options in search?',
        answer: 'You can use the filters located on the left side of the search results page. Options include price range, location, category-specific attributes (like number of bedrooms), and sorting preferences to find exactly what you need.'
      },
      {
        id: 'g2',
        question: 'How can I be safe on idamata?',
        answer: 'While idamata takes many steps in moderating the ads, we also encourage buyers and sellers to take self-precautions. Always meet in a public place, inspect the property thoroughly, and never send money before seeing the property or meeting the owner.'
      },
      {
        id: 'g3',
        question: "I'm getting contacted about an ad I didn't post, what can I do?",
        answer: 'If your contact details are being used without your permission, please contact our support team immediately at support@idamata.lk. We will investigate and remove the unauthorized content.'
      },
      {
        id: 'g4',
        question: 'How do I contact idamata for any inquiry or complaint?',
        answer: 'You can reach us through our Contact Us page, email us at support@idamata.lk, or call our customer service hotline. Our team is available 24/7 to assist you.'
      }
    ]
  },
  {
    id: 'jobs',
    title: 'Do you need help related to Jobs?',
    description: 'Frequently asked questions related to recruitment and career listings',
    icon: <Briefcase size={24} />,
    articles: [
      {
        id: 'j1',
        question: 'What are the benefits of posting job vacancies on idamata?',
        answer: 'Posting jobs on idamata gives you access to thousands of qualified candidates across Sri Lanka. You can manage applications through our dashboard, filter candidates by experience, and communicate directly with applicants.'
      },
      {
        id: 'j2',
        question: 'What are the methods to receive CVs for the vacancies posted?',
        answer: 'You can choose to receive CVs via email, directly through the idamata Employee Dashboard, or redirect candidates to your own career portal.'
      },
      {
        id: 'j3',
        question: "What is 'idamata Profile Database'?",
        answer: 'The Profile Database is a premium feature that allows employers to search for candidates based on skills, education, and location, even if they haven\'t applied for a specific job yet.'
      },
      {
        id: 'j4',
        question: 'How many CVs can be unlocked from the Profile Database?',
        answer: 'The number of CVs you can unlock depends on your membership tier. Standard members get a limited number of unlocks, while Premium members get significantly higher limits.'
      }
    ]
  },
  {
    id: 'selling',
    title: 'Do you need help selling on idamata?',
    description: 'Frequently asked questions by Sellers and Property Owners',
    icon: <Tag size={24} />,
    articles: [
      {
        id: 's1',
        question: 'How to post ads?',
        answer: "Click on the 'POST YOUR PROPERTY' button at the top of any page. Choose the correct category, fill in the details of your property, upload high-quality photos, and click submit. Your ad will be reviewed and published shortly."
      },
      {
        id: 's2',
        question: 'How do I edit my ad?',
        answer: "Log in to your account, go to 'My Ads', find the ad you want to change, and click the 'Edit' button. Make your changes and save. The ad will go through a quick review process again."
      },
      {
        id: 's3',
        question: 'How do I delete my ad?',
        answer: "Go to your 'My Ads' section in your account dashboard. Locate the ad and click the 'Delete' or 'Mark as Sold' button. Once deleted, the ad will no longer be visible to the public."
      },
      {
        id: 's4',
        question: 'Why has my ad been rejected?',
        answer: 'Ads may be rejected if they violate our posting rules, contain inappropriate content, have low-quality images, or are posted in the wrong category. You will receive an email explaining the specific reason for rejection.'
      }
    ]
  },
  {
    id: 'buying',
    title: 'Do you need help buying on idamata?',
    description: 'Frequently asked questions by buyers and property seekers',
    icon: <ShoppingBag size={24} />,
    articles: [
      {
        id: 'b1',
        question: 'Can I trust the sellers on idamata?',
        answer: 'While we moderate ads, we recommend verifying sellers yourself. Look for "Member" badges, check their posting history, and always conduct transactions safely.'
      },
      {
        id: 'b2',
        question: 'How do I search for properties in a specific area?',
        answer: 'Use the location filter on the search page. You can select specific districts, cities, or even use the map view to pinpoint properties in your desired neighborhood.'
      },
      {
        id: 'b3',
        question: 'How can I save ads that I like?',
        answer: 'Click the "Heart" icon on any ad to add it to your Favorites. You can view all your saved ads in the "Favorites" section of your account.'
      }
    ]
  }
];

const FAQPage = ({ onChatClick, onLoginClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedArticle, setExpandedArticle] = useState(null);

  React.useEffect(() => {
    document.title = "FAQ & Help Center | idamata - Support";
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm) return FAQ_DATA;

    return FAQ_DATA.map(cat => ({
      ...cat,
      articles: cat.articles.filter(art =>
        art.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(cat => cat.articles.length > 0);
  }, [searchTerm]);

  const displayedArticles = useMemo(() => {
    if (selectedCategory) {
      const cat = FAQ_DATA.find(c => c.id === selectedCategory);
      return cat ? cat.articles : [];
    }
    // If searching, show all matching articles or just the count
    if (searchTerm) {
      return filteredData.flatMap(cat => cat.articles);
    }
    return [];
  }, [selectedCategory, searchTerm, filteredData]);

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
    setSearchTerm('');
    setExpandedArticle(null);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchTerm('');
    setExpandedArticle(null);
  };

  return (
    <div className="faq-page">
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
            <Link to="/post-ad" className="post-ad-btn" style={{ backgroundColor: '#ffcc00', color: '#000' }}>POST YOUR PROPERTY</Link>
          </div>
        </div>
      </header>

      <header className="faq-header" style={{ backgroundImage: `linear-gradient(rgba(0, 152, 119, 0.35), rgba(0, 124, 97, 0.45)), url(${faqBanner})` }}>
        <div className="container">
          <div className="faq-nav" style={{ marginBottom: '20px' }}>
            <Link to="/" className="faq-logo-link" style={{ fontSize: '22px' }}>
              <LogoSmile size={26} />
              <span>idamata</span>
            </Link>
            <div className="faq-nav-divider"></div>
            <span className="faq-nav-label">Helpcenter</span>
          </div>

          <h1 className="faq-title" style={{ fontSize: '28px', marginBottom: '25px' }}>Frequently asked questions</h1>

          <div className="faq-search-wrapper" style={{ maxWidth: '700px' }}>
            <div className="faq-search-container">
              <Search className="faq-search-icon" size={20} />
              <input
                type="text"
                placeholder="What do you need help with?"
                className="faq-search-input"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSelectedCategory(null);
                }}
              />
              {searchTerm && (
                <X
                  size={18}
                  className="faq-search-icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSearchTerm('')}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="faq-content">
        {!searchTerm && (
          <div className="faq-category-grid">
            {FAQ_DATA.map(cat => (
              <div
                key={cat.id}
                className={`faq-category-card ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <div>
                  <div className="faq-cat-icon">{cat.icon}</div>
                  <h3 className="faq-cat-title">{cat.title}</h3>
                  <p className="faq-cat-desc">{cat.description}</p>
                </div>
                <div>
                  <span className="faq-cat-count">{cat.articles.length} Articles</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {(selectedCategory || searchTerm) && (
          <div className="faq-articles-section">
            <div className="faq-section-heading">
              <span>
                {searchTerm
                  ? `Search results for "${searchTerm}"`
                  : FAQ_DATA.find(c => c.id === selectedCategory)?.title}
              </span>
              <button
                onClick={resetFilters}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#009877',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                <ArrowLeft size={16} style={{ marginRight: '5px' }} />
                Back to Categories
              </button>
            </div>

            {displayedArticles.length > 0 ? (
              displayedArticles.map((art, index) => (
                <div
                  key={art.id}
                  className={`faq-article-card ${expandedArticle === art.id ? 'expanded' : ''}`}
                >
                  <div className="faq-article-header" onClick={() => toggleArticle(art.id)}>
                    <h4 className="faq-question">
                      {index + 1}. {art.question}
                    </h4>
                    <ChevronDown className="faq-toggle-icon" size={20} />
                  </div>
                  {expandedArticle === art.id && (
                    <div className="faq-answer">
                      <p>{art.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No questions found</h3>
                <p>Try different keywords or browse our categories.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default FAQPage;
