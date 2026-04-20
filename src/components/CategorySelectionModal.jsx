import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import './CategorySelectionModal.css';

const categories = [
  { name: 'Property', emoji: '🏠', active: true },
];

const subcategoryData = {
  'Property': [
    { name: 'Houses For Sale', emoji: '🏡', posts: 8240 },
    { name: 'Land For Sale', emoji: '🌿', posts: 3102 },
    { name: 'Apartments For Sale', emoji: '🏢', posts: 2890 },
    { name: 'Houses For Rent', emoji: '🏠', posts: 1980 },
    { name: 'Apartment Rentals', emoji: '🏙️', posts: 1440 },
    { name: 'Commercial Property', emoji: '🏬', posts: 1054 },
  ],
  'Vehicles': [],
  'Electronics': [],
  'Jobs': [],
  'Services': [],
};

const CategorySelectionModal = ({ isOpen, onClose, onSelect, selectedSubcategory }) => {
  const [activeCategory, setActiveCategory] = useState('Property');

  if (!isOpen) return null;

  const subcategories = subcategoryData[activeCategory] || [];
  const totalPosts = subcategories.reduce((sum, s) => sum + s.posts, 0);

  return (
    <div className="cat-sel-overlay">
      <div className="cat-sel-modal">

        
        {/* Header */}
        <div className="cat-sel-header">
          <div className="header-text">
            <span className="header-label">BROWSE</span>
            <h2>Select a category</h2>
          </div>
          <button className="cat-close-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Main Content */}
        <div className="cat-sel-content">
          {/* Left: Categories */}
          <div className="cat-sidebar">
            <div className="sidebar-label">CATEGORIES</div>
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`cat-nav-item ${activeCategory === cat.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <span className="cat-emoji">{cat.emoji}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-dot">›</span>
              </div>
            ))}
          </div>

          {/* Right: Subcategories */}
          <div className="cat-subcategories">
            <div className="subcat-label">SUBCATEGORY</div>
            <div className="subcat-grid">
              {subcategories.map((sub) => (
                <div
                  key={sub.name}
                  className={`subcat-card ${selectedSubcategory === sub.name ? 'selected' : ''}`}
                  onClick={() => {
                    onSelect(sub.name);
                    onClose();
                  }}
                >
                  <span className="subcat-emoji">{sub.emoji}</span>
                  <div className="subcat-info">
                    <span className="subcat-name">{sub.name}</span>
                    <span className="subcat-posts">{sub.posts.toLocaleString()} posts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="cat-sel-footer">
          <div className="footer-selected">
            <span className="footer-label">Selected</span>
            <span className="footer-value">{selectedSubcategory || 'All Property'}</span>
          </div>
          <div className="footer-actions">
            <button className="reset-cat-btn" onClick={() => onSelect('')}>Reset</button>
            <button className="show-posts-cat-btn" onClick={onClose}>
              Show {totalPosts.toLocaleString()} posts
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionModal;
