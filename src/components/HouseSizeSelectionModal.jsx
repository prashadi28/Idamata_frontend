import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import './HouseSizeSelectionModal.css';

const HouseSizeSelectionModal = ({ isOpen, onClose, onSelect, initialMin = 0, initialMax = 100000 }) => {
  const [minSize, setMinSize] = useState(initialMin);
  const [maxSize, setMaxSize] = useState(initialMax);
  const sliderRef = useRef(null);
  const isDragging = useRef(null);

  const SLIDER_MAX = 100000;

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

    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isOpen, minSize, maxSize]);

  const handleMouseDown = (type) => {
    isDragging.current = type;
  };

  const handleApply = () => {
    onSelect({ min: minSize, max: maxSize });
    onClose();
  };

  const handleReset = () => {
    setMinSize(0);
    setMaxSize(100000);
  };

  if (!isOpen) return null;

  return (
    <div className="size-sel-overlay">
      <div className="size-sel-modal">
        <header className="size-sel-header">
          <h2>House size (sqft)</h2>
          <button className="size-sel-close" onClick={onClose}><X size={24} /></button>
        </header>

        <div className="size-sel-body">
          <div className="size-slider-row">
            <div className="range-slider-container">
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
              <input
                type="text"
                value={minSize}
                onChange={(e) => setMinSize(Math.min(Number(e.target.value) || 0, maxSize))}
              />
              <span className="separator">-</span>
              <input
                type="text"
                value={maxSize}
                onChange={(e) => setMaxSize(Math.max(Number(e.target.value) || 0, minSize))}
              />
            </div>
          </div>
        </div>

        <footer className="size-sel-footer">
          <button className="size-reset-btn" onClick={handleReset}>Reset</button>
          <button className="size-show-btn" onClick={handleApply}>Show 20485 posts</button>
        </footer>
      </div>
    </div>
  );
};

export default HouseSizeSelectionModal;
