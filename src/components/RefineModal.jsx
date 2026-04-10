import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, ChevronRight, MapPin, Home, Check } from 'lucide-react';
import CategorySelectionModal from './CategorySelectionModal';
import LocationSelectionModal from './LocationSelectionModal';
import './RefineModal.css';

const Section = ({ title, children, isOpen, onToggle, noBorder }) => (
  <div className={`refine-section ${noBorder ? 'no-border' : ''}`}>
    <button className="refine-section-header" onClick={onToggle}>
      <span>{title}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && <div className="refine-section-content">{children}</div>}
  </div>
);

const RefineModal = ({ isOpen, onClose }) => {
  const [sections, setSections] = useState({
    location: true,
    category: true,
    price: true,
    houseSize: true,
    bedrooms: true,
    bathrooms: false,
    propertyType: false,
    promoted: false,
  });

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState('Houses For Sale');
  const [selectedBeds, setSelectedBeds] = useState([]);
  const [selectedBaths, setSelectedBaths] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(100000);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(null);

  const SLIDER_MAX = 100000;

  const handleMouseDown = (type) => {
    isDragging.current = type;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percent = Math.min(Math.max(0, (e.clientX - rect.left) / rect.width), 1);
      const value = Math.round(percent * SLIDER_MAX);

      if (isDragging.current === 'left') {
        setMinSize(Math.min(value, maxSize));
      } else {
        setMaxSize(Math.max(value, minSize));
      }
    };

    const handleMouseUp = () => {
      isDragging.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [minSize, maxSize]);

  const priceRanges = [
    { label: 'Below 20M', min: '', max: '20000000' },
    { label: '20M – 50M', min: '20000000', max: '50000000' },
    { label: '50M – 100M', min: '50000000', max: '100000000' },
    { label: 'Over 100M', min: '100000000', max: '' },
  ];

  const handlePriceRangeClick = (range) => {
    setSelectedPriceRange(range.label);
    setMinPrice(range.min);
    setMaxPrice(range.max);
  };

  const toggleBed = (num) => {
    setSelectedBeds(prev =>
      prev.includes(num) ? prev.filter(b => b !== num) : [...prev, num]
    );
  };

  const toggleSection = (section) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const resetAll = () => {
    setSelectedBeds([]);
    setSelectedBaths(null);
    setMinPrice('');
    setMaxPrice('');
    setSelectedPriceRange(null);
    setMinSize(0);
    setMaxSize(100000);
  };

  if (!isOpen) return null;

  return (
    <div className="refine-overlay">
      <div className="refine-modal">
        <header className="refine-header">
          <h2>Refine Search</h2>
          <button className="refine-close-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </header>

        <div className="refine-body">
          {/* Location Section */}
          <div className="refine-section">
            <div className="refine-section-header-static">
              <span>Location</span>
            </div>
            <div className="refine-section-content">
              <button
                className="location-select-btn"
                onClick={() => setIsLocationModalOpen(true)}
              >
                <MapPin size={16} />
                <span>Select Location</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Category Section */}
          <Section
            title="Category"
            isOpen={sections.category}
            onToggle={() => toggleSection('category')}
          >
            <div className="refine-category-row">
              {selectedSubcategory && (
                <span className="refine-chip" onClick={() => setIsCategoryModalOpen(true)} style={{ cursor: 'pointer' }}>
                  <Home size={14} />
                  {selectedSubcategory}
                  <Check size={14} className="chip-check" />
                </span>
              )}
              <button
                className="refine-change-link"
                onClick={() => setIsCategoryModalOpen(true)}
              >
                Change
              </button>
            </div>
          </Section>

          {/* Price Section */}
          <Section
            title="Price"
            isOpen={sections.price}
            onToggle={() => toggleSection('price')}
          >
            <div className="refine-price-options">
              {priceRanges.map(range => (
                <button
                  key={range.label}
                  className={`option-pill ${selectedPriceRange === range.label ? 'active' : ''}`}
                  onClick={() => handlePriceRangeClick(range)}
                >
                  {range.label}
                </button>
              ))}
            </div>
            <div className="refine-range-inputs">
              <div className="input-field-group">
                <label>Min Price (Rs.)</label>
                <input
                  type="text"
                  placeholder="Enter Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <span className="separator">–</span>
              <div className="input-field-group">
                <label>Max Price (Rs.)</label>
                <input
                  type="text"
                  placeholder="Enter Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="clear-row">
              <button
                className="refine-clear-link"
                onClick={() => {
                  setMinPrice('');
                  setMaxPrice('');
                  setSelectedPriceRange(null);
                }}
              >
                Clear
              </button>
            </div>
          </Section>

          {/* House Size Section */}
          <Section
            title="House Size"
            isOpen={sections.houseSize}
            onToggle={() => toggleSection('houseSize')}
          >
            <div className="house-size-section">
              <div className="slider-container">
                <div className="range-slider" ref={sliderRef}>
                  <div className="slider-track"></div>
                  <div
                    className="slider-track-fill"
                    style={{
                      left: `${(minSize / SLIDER_MAX) * 100}%`,
                      width: `${((maxSize - minSize) / SLIDER_MAX) * 100}%`
                    }}
                  ></div>
                  <div
                    className="slider-thumb thumb-left"
                    style={{ left: `${(minSize / SLIDER_MAX) * 100}%` }}
                    onMouseDown={() => handleMouseDown('left')}
                  ></div>
                  <div
                    className="slider-thumb thumb-right"
                    style={{ left: `${(maxSize / SLIDER_MAX) * 100}%` }}
                    onMouseDown={() => handleMouseDown('right')}
                  ></div>
                </div>
              </div>
              <div className="size-inputs">
                <div className="size-input-box">
                  <input
                    type="text"
                    value={minSize.toLocaleString()}
                    onChange={(e) => setMinSize(Math.min(Number(e.target.value.replace(/,/g, '')) || 0, maxSize))}
                  />
                  <span className="size-unit">sq ft</span>
                </div>
                <span className="separator">–</span>
                <div className="size-input-box">
                  <input
                    type="text"
                    value={maxSize.toLocaleString()}
                    onChange={(e) => setMaxSize(Math.max(Number(e.target.value.replace(/,/g, '')) || 0, minSize))}
                  />
                  <span className="size-unit">sq ft</span>
                </div>
              </div>
            </div>
          </Section>

          {/* Bedrooms Section */}
          <Section
            title="Bedrooms"
            isOpen={sections.bedrooms}
            onToggle={() => toggleSection('bedrooms')}
          >
            <div className="bedroom-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, '10+'].map((num, idx) => (
                <button
                  key={idx}
                  className={`bed-btn ${selectedBeds.includes(num) ? 'active' : ''}`}
                  onClick={() => toggleBed(num)}
                >
                  {selectedBeds.includes(num) && <Check size={12} className="bed-check" />}
                  <span>{num}</span>
                </button>
              ))}
            </div>
          </Section>

          {/* Bathrooms Section */}
          <Section
            title="Bathrooms"
            isOpen={sections.bathrooms}
            onToggle={() => toggleSection('bathrooms')}
          >
            <div className="bedroom-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'].map((num, idx) => (
                <button
                  key={idx}
                  className={`bed-btn ${selectedBaths === num ? 'active' : ''}`}
                  onClick={() => setSelectedBaths(num === selectedBaths ? null : num)}
                >
                  {selectedBaths === num && <Check size={12} className="bed-check" />}
                  <span>{num}</span>
                </button>
              ))}
            </div>
          </Section>

          {/* Property Type Section */}
          <Section
            title="Property Type"
            isOpen={sections.propertyType}
            onToggle={() => toggleSection('propertyType')}
          >
            <div className="refine-radio-list">
              <label className="radio-item"><input type="radio" name="ptype" defaultChecked /> <span className="radio-circle"></span> All types</label>
              <label className="radio-item"><input type="radio" name="ptype" /> <span className="radio-circle"></span> Residential</label>
              <label className="radio-item"><input type="radio" name="ptype" /> <span className="radio-circle"></span> Commercial</label>
              <label className="radio-item"><input type="radio" name="ptype" /> <span className="radio-circle"></span> Land</label>
            </div>
          </Section>

          {/* Promoted Listings Section */}
          <Section
            title="Promoted Listings"
            isOpen={sections.promoted}
            onToggle={() => toggleSection('promoted')}
          >
            <label className="check-item single">
              <input type="checkbox" />
              <span className="check-box"></span>
              <span className="urgent-badge">URGENT</span>
            </label>
          </Section>

        </div>

        <footer className="refine-modal-footer">
          <button className="reset-all-btn" onClick={resetAll}>Reset All</button>
          <button className="show-results-btn" onClick={onClose}>
            Show Results
            <ChevronRight size={18} />
          </button>
        </footer>
      </div>

      <CategorySelectionModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSelect={(cat) => setSelectedSubcategory(cat)}
        selectedSubcategory={selectedSubcategory}
      />

      <LocationSelectionModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
};

export default RefineModal;
