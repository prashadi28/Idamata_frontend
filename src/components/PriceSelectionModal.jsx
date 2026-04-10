import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import './PriceSelectionModal.css';

const PriceSelectionModal = ({ isOpen, onClose, onSelect, initialMin = '', initialMax = '' }) => {
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);
  const [selectedRange, setSelectedRange] = useState(null);

  const priceRanges = [
    { label: 'Below 20M', min: '', max: '20000000' },
    { label: '20M - 50M', min: '20000000', max: '50000000' },
    { label: '50M - 100M', min: '50000000', max: '100000000' },
    { label: 'Over 100M', min: '100000000', max: '' },
  ];

  const handlePriceRangeClick = (range) => {
    setSelectedRange(range.label);
    setMinPrice(range.min);
    setMaxPrice(range.max);
  };

  const handleClear = () => {
    setMinPrice('');
    setMaxPrice('');
    setSelectedRange(null);
  };

  const handleApply = () => {
    onSelect({ min: minPrice, max: maxPrice });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="price-sel-overlay">
      <div className="price-sel-modal">
        <header className="price-sel-header">
          <h2>Price</h2>
          <button className="price-sel-close" onClick={onClose}>
            <X size={24} />
          </button>
        </header>

        <div className="price-sel-body">
          <div className="price-options-grid">
            {priceRanges.map(range => (
              <button
                key={range.label}
                className={`price-option-pill ${selectedRange === range.label ? 'active' : ''}`}
                onClick={() => handlePriceRangeClick(range)}
              >
                {range.label}
              </button>
            ))}
          </div>

          <div className="price-inputs-container">
            <div className="price-input-group">
              <label>Min Price (Rs.)</label>
              <input
                type="text"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <span className="price-separator">-</span>
            <div className="price-input-group">
              <label>Max price (Rs.)</label>
              <input
                type="text"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <button className="price-clear-link" onClick={handleClear}>
            Clear
          </button>
        </div>

        <footer className="price-sel-footer">
          <button className="price-reset-btn" onClick={handleClear}>Reset</button>
          <button className="price-show-btn" onClick={handleApply}>Show 20485 posts</button>
        </footer>
      </div>
    </div>
  );
};

export default PriceSelectionModal;
