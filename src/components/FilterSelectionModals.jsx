import React, { useState } from 'react';
import { X } from 'lucide-react';
import './FilterModals.css';

export const BedroomsSelectionModal = ({ isOpen, onClose, onSelect, selectedValue }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'];

  if (!isOpen) return null;

  return (
    <div className="filter-sel-overlay">
      <div className="filter-sel-modal">
        <header className="filter-sel-header">
          <h2>Bedrooms</h2>
          <button className="filter-sel-close" onClick={onClose}><X size={24} /></button>
        </header>
        <div className="filter-sel-body">
          <div className="filter-check-grid">
            {options.map(num => (
              <label key={num} className="check-item">
                <input
                  type="checkbox"
                  checked={selectedValue && selectedValue.includes(num)}
                  onChange={() => {
                    const newValue = selectedValue ? [...selectedValue] : [];
                    if (newValue.includes(num)) {
                      onSelect(newValue.filter(v => v !== num));
                    } else {
                      onSelect([...newValue, num]);
                    }
                  }}
                />
                <span className="check-box"></span>
                <span className="check-label">{num}</span>
              </label>
            ))}
          </div>
        </div>
        <footer className="filter-sel-footer">
          <button className="filter-reset-btn" onClick={() => { onSelect([]); onClose(); }}>Reset</button>
          <button className="filter-apply-btn" onClick={onClose}>Show 20485 posts</button>
        </footer>
      </div>
    </div>
  );
};

export const BathroomsSelectionModal = ({ isOpen, onClose, onSelect, selectedValue }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'];

  if (!isOpen) return null;

  return (
    <div className="filter-sel-overlay">
      <div className="filter-sel-modal">
        <header className="filter-sel-header">
          <h2>Bathrooms</h2>
          <button className="filter-sel-close" onClick={onClose}><X size={24} /></button>
        </header>
        <div className="filter-sel-body">
          <div className="filter-check-grid">
            {options.map(num => (
              <label key={num} className="check-item">
                <input
                  type="checkbox"
                  checked={selectedValue && selectedValue.includes(num)}
                  onChange={() => {
                    const newValue = selectedValue ? [...selectedValue] : [];
                    if (newValue.includes(num)) {
                      onSelect(newValue.filter(v => v !== num));
                    } else {
                      onSelect([...newValue, num]);
                    }
                  }}
                />
                <span className="check-box"></span>
                <span className="check-label">{num}</span>
              </label>
            ))}
          </div>
        </div>
        <footer className="filter-sel-footer">
          <button className="filter-reset-btn" onClick={() => { onSelect([]); onClose(); }}>Reset</button>
          <button className="filter-apply-btn" onClick={onClose}>Show 20485 posts</button>
        </footer>
      </div>
    </div>
  );
};

export const PosterTypeSelectionModal = ({ isOpen, onClose, onSelect, selectedValue }) => {
  const options = ['All posters', 'Members', 'Authorized Agent', 'Non-members'];

  if (!isOpen) return null;

  return (
    <div className="filter-sel-overlay">
      <div className="filter-sel-modal">
        <header className="filter-sel-header">
          <h2>Type of poster</h2>
          <button className="filter-sel-close" onClick={onClose}><X size={24} /></button>
        </header>
        <div className="filter-sel-body">
          <div className="filter-radio-list">
            {options.map(opt => (
              <label key={opt} className="radio-item">
                <input
                  type="radio"
                  name="poster"
                  checked={selectedValue === opt}
                  onChange={() => {
                    onSelect(opt);
                    onClose();
                  }}
                />
                <span className="radio-circle"></span>
                <span className="radio-label">{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <footer className="filter-sel-footer">
          <button className="filter-reset-btn" onClick={() => { onSelect('All posters'); onClose(); }}>Reset</button>
        </footer>
      </div>
    </div>
  );
};
