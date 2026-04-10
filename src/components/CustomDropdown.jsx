import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import './CustomDropdown.css';

const CustomDropdown = ({ options, selectedOption, onSelect, placeholder = "Select Category" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown-container" ref={dropdownRef}>
      <div className={`dropdown-header ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        <div className="dropdown-selected-value">
          {selectedOption ? selectedOption.name : placeholder}
        </div>
        <div className="dropdown-action-button">
          <ChevronDown size={22} strokeWidth={3} />
        </div>
      </div>

      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            <li 
              className={`dropdown-item ${!selectedOption ? 'selected' : ''}`}
              onClick={() => handleSelect(null)}
            >
              All Property Types
            </li>
            {options.map((option) => (
              <li
                key={option.id}
                className={`dropdown-item ${selectedOption?.id === option.id ? 'selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                <span className="item-icon">{option.icon}</span>
                <span className="item-name">{option.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
