
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

const RefineModal = ({
  isOpen,
  onClose,
  selectedSubcategory: externalSubcategory,
  onSubcategoryChange,
  selectedSortBy: externalSortBy,
  onSortByChange,
  selectedPosterType: externalPosterType,
  onPosterTypeChange,
  selectedAdType: externalAdType,
  onAdTypeChange,
  selectedFurnished: externalFurnished,
  onFurnishedChange,
  selectedPropertyType: externalPropertyType,
  onPropertyTypeChange
}) => {
  const [sections, setSections] = useState({
    location: true,
    category: true,
    price: true,
    houseSize: true,
    bedrooms: true,
    bathrooms: false,
    propertyType: false,
    sortBy: false,
    posterType: false,
    adType: false,
    furnished: false,
  });

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(externalSubcategory || 'Houses For Sale');

  const [selectedSortBy, setSelectedSortBy] = useState(externalSortBy || 'Date: Newest first');
  const [selectedPosterType, setSelectedPosterType] = useState(externalPosterType || 'All posters');
  const [selectedAdType, setSelectedAdType] = useState(externalAdType || 'For sale');
  const [selectedFurnished, setSelectedFurnished] = useState(externalFurnished || []);
  const [selectedPropertyType, setSelectedPropertyType] = useState(externalPropertyType || 'All');

  // Sync with external props
  useEffect(() => {
    if (externalSubcategory) setSelectedSubcategory(externalSubcategory);
    if (externalSortBy) setSelectedSortBy(externalSortBy);
    if (externalPosterType) setSelectedPosterType(externalPosterType);
    if (externalAdType) setSelectedAdType(externalAdType);
    if (externalFurnished) setSelectedFurnished(externalFurnished);
    if (externalPropertyType) setSelectedPropertyType(externalPropertyType);
  }, [externalSubcategory, externalSortBy, externalPosterType, externalAdType, externalFurnished, externalPropertyType]);

  const [selectedBeds, setSelectedBeds] = useState([]);
  const [selectedBaths, setSelectedBaths] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(100000);
  const [minSizeRaw, setMinSizeRaw] = useState("0");
  const [maxSizeRaw, setMaxSizeRaw] = useState("100000");
  const [isMinFocused, setIsMinFocused] = useState(false);
  const [isMaxFocused, setIsMaxFocused] = useState(false);
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
        const val = Math.min(value, maxSize);
        setMinSize(val);
        setMinSizeRaw(val.toString());
      } else {
        const val = Math.max(value, minSize);
        setMaxSize(val);
        setMaxSizeRaw(val.toString());
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
    setSelectedSortBy('Date: Newest first');
    setSelectedPosterType('All posters');
    setSelectedAdType('For sale');
    setSelectedFurnished([]);
    setSelectedPropertyType('All');
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

          {/* Size Section (Dynamic Title) */}
          <Section
            title={selectedSubcategory === 'Land For Sale' ? 'Land Size' : (selectedSubcategory === 'Apartments For Sale' ? 'Unit Size' : (selectedSubcategory === 'Commercial Property' ? 'Size' : 'House Size'))}
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
                    value={isMinFocused ? minSizeRaw : minSize.toLocaleString()}
                    onFocus={() => {
                      setIsMinFocused(true);
                      setMinSizeRaw(minSize.toString());
                    }}
                    onBlur={() => {
                      setIsMinFocused(false);
                      const num = Number(minSizeRaw) || 0;
                      const finalNum = Math.min(Math.max(0, num), maxSize);
                      setMinSize(finalNum);
                    }}
                    onChange={(e) => setMinSizeRaw(e.target.value.replace(/[^0-9]/g, ''))}
                  />
                  <span className="size-unit">{selectedSubcategory === 'Land For Sale' ? 'perches' : 'sq ft'}</span>
                </div>
                <span className="separator">–</span>
                <div className="size-input-box">
                  <input
                    type="text"
                    value={isMaxFocused ? maxSizeRaw : maxSize.toLocaleString()}
                    onFocus={() => {
                      setIsMaxFocused(true);
                      setMaxSizeRaw(maxSize.toString());
                    }}
                    onBlur={() => {
                      setIsMaxFocused(false);
                      const num = Number(maxSizeRaw) || 0;
                      const finalNum = Math.max(Math.min(num, SLIDER_MAX), minSize);
                      setMaxSize(finalNum);
                    }}
                    onChange={(e) => setMaxSizeRaw(e.target.value.replace(/[^0-9]/g, ''))}
                  />
                  <span className="size-unit">{selectedSubcategory === 'Land For Sale' ? 'perches' : 'sq ft'}</span>
                </div>
              </div>
            </div>
          </Section>

          {/* Bedrooms Section (Hidden for Land and Commercial) */}
          {selectedSubcategory !== 'Land For Sale' && selectedSubcategory !== 'Commercial Property' && (
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
          )}

          {/* Bathrooms Section (Hidden for Land and Commercial) */}
          {selectedSubcategory !== 'Land For Sale' && selectedSubcategory !== 'Commercial Property' && (
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
          )}

          {/* Sort By Section */}
          <Section
            title="Sort by"
            isOpen={sections.sortBy}
            onToggle={() => toggleSection('sortBy')}
          >
            <div className="refine-radio-list">
              {['Date: Newest first', 'Date: Oldest first', 'Price: Highest to Lowest', 'Price: Lowest to Highest'].map(opt => (
                <label key={opt} className="radio-item">
                  <input
                    type="radio"
                    name="refine-sort"
                    checked={selectedSortBy === opt}
                    onChange={() => {
                      setSelectedSortBy(opt);
                      if (onSortByChange) onSortByChange(opt);
                    }}
                  />
                  <span className="radio-circle"></span>
                  {opt}
                </label>
              ))}
            </div>
          </Section>

          {/* Ad Type Section */}
          <Section
            title="Ad type"
            isOpen={sections.adType}
            onToggle={() => toggleSection('adType')}
          >
            <div className="refine-radio-list">
              {['For sale', 'Wanted'].map(opt => (
                <label key={opt} className="radio-item">
                  <input
                    type="radio"
                    name="refine-adtype"
                    checked={selectedAdType === opt}
                    onChange={() => {
                      setSelectedAdType(opt);
                      if (onAdTypeChange) onAdTypeChange(opt);
                    }}
                  />
                  <span className="radio-circle"></span>
                  {opt}
                </label>
              ))}
            </div>
          </Section>

          {/* Furnished Status Section (Only for Apartments) */}
          {selectedSubcategory === 'Apartments For Sale' && (
            <Section
              title="Furnished status"
              isOpen={sections.furnished}
              onToggle={() => toggleSection('furnished')}
            >
              <div className="refine-check-list">
                {['Unfurnished', 'Fully furnished', 'Semi furnished'].map(opt => (
                  <label key={opt} className="check-item">
                    <input
                      type="checkbox"
                      checked={selectedFurnished.includes(opt)}
                      onChange={() => {
                        const newValue = selectedFurnished.includes(opt)
                          ? selectedFurnished.filter(v => v !== opt)
                          : [...selectedFurnished, opt];
                        setSelectedFurnished(newValue);
                        if (onFurnishedChange) onFurnishedChange(newValue);
                      }}
                    />
                    <span className="check-box"></span>
                    {opt}
                  </label>
                ))}
              </div>
            </Section>
          )}

          {/* Type of Poster Section */}
          <Section
            title="Type of poster"
            isOpen={sections.posterType}
            onToggle={() => toggleSection('posterType')}
          >
            <div className="refine-radio-list">
              {['All posters', 'Members', 'Authorized Agent', 'Non-members'].map(opt => (
                <label key={opt} className="radio-item">
                  <input
                    type="radio"
                    name="refine-poster"
                    checked={selectedPosterType === opt}
                    onChange={() => {
                      setSelectedPosterType(opt);
                      if (onPosterTypeChange) onPosterTypeChange(opt);
                    }}
                  />
                  <span className="radio-circle"></span>
                  {opt}
                </label>
              ))}
            </div>
          </Section>

          {/* Property Type Section (Hidden for Land and Apartments) */}
          {selectedSubcategory !== 'Land For Sale' && selectedSubcategory !== 'Apartments For Sale' && selectedSubcategory !== 'Apartment Rentals' && (
            <Section
              title="Property Type"
              isOpen={sections.propertyType}
              onToggle={() => toggleSection('propertyType')}
            >
              <div className="refine-radio-list">
                {(selectedSubcategory === 'Commercial Property'
                  ? ['All', 'Hotel', 'Building', 'Other', 'Factory / Workshop', 'Warehouse / Storage']
                  : ['All', 'Residential', 'Commercial', 'Land']
                ).map(type => (
                  <label key={type} className="radio-item">
                    <input
                      type="radio"
                      name="refine-ptype"
                      checked={selectedPropertyType === type}
                      onChange={() => {
                        setSelectedPropertyType(type);
                        if (onPropertyTypeChange) onPropertyTypeChange(type);
                      }}
                    />
                    <span className="radio-circle"></span>
                    {type === 'All' ? 'All types' : type}
                  </label>
                ))}
              </div>
            </Section>
          )}


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
        onSelect={(cat) => {
          setSelectedSubcategory(cat);
          if (onSubcategoryChange) onSubcategoryChange(cat);
        }}
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
