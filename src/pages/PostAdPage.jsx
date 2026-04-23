import React, { useState } from 'react';
import {
  Home, Building, MapPin, DollarSign, Image as ImageIcon,
  User, MessageCircle, HelpCircle, UploadCloud, CheckCircle,
  ChevronRight, ArrowLeft, PlusSquare, Map, Phone, Briefcase,
  BedDouble, Bath, Maximize, FileText, Layers, CheckSquare
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LocationSelectionModal from '../components/LocationSelectionModal';
import './PostAdPage.css';

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

const PostAdPage = ({ onChatClick, onLoginClick }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('idamata_test_name') || 'Peshala';

  const [currentStep, setCurrentStep] = useState(1);
  const [isLocModalOpen, setIsLocModalOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    category: 'Houses For Sale',
    title: '',
    description: '',
    price: '',
    priceUnit: 'Total price',
    negotiable: false,
    bedrooms: '',
    bathrooms: '',
    landSize: '',
    landSizeUnit: 'Perches',
    houseSize: '',
    landType: 'Residential',
    completionStatus: 'Ready',
    furnishedStatus: 'Unfurnished',
    district: '',
    city: '',
    address: '',
    landmark: '',
    contactName: userName,
    phone: '',
    whatsapp: '',
    email: '',
    hideNumber: false,
    paymentMethod: 'online',
    otherLandType: '',
  });

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      const newPhotos = files.map(file => URL.createObjectURL(file));
      setPhotos(prev => [...prev, ...newPhotos].slice(0, 5)); // Keep max 5 photos
    }
  };

  const removePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const steps = [
    { id: 1, name: 'Details' },
    { id: 2, name: 'Location' },
    { id: 3, name: 'Photos' },
    { id: 4, name: 'Contact' },
    { id: 5, name: 'Payment' }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        const cat = formData.category;
        const isHouse = cat === 'Houses For Sale' || cat === 'Houses For Rent';
        const isLand = cat === 'Land For Sale';
        const isApt = cat === 'Apartments For Sale' || cat === 'Apartment Rentals';
        const isCommercial = cat === 'Commercial Property';

        return (
          <div className="step-content fade-in">
            <h3 className="s-title">Property Details</h3>

            {/* SECTION: Basic Info */}
            <div className="ik-form-section-box">
              <h4 className="ik-section-title"><Layers size={20} /> Basic Info</h4>
              <div className="ik-form-group">
                <label>Property Category *</label>
                <select value={formData.category} onChange={e => updateForm('category', e.target.value)}>
                  <option value="Houses For Sale">Houses For Sale</option>
                  <option value="Land For Sale">Land For Sale</option>
                  <option value="Apartments For Sale">Apartments For Sale</option>
                  <option value="Houses For Rent">Houses For Rent</option>
                  <option value="Apartment Rentals">Apartment Rentals</option>
                  <option value="Commercial Property">Commercial Property</option>
                </select>
              </div>
            </div>

            {/* SECTION: Land Details */}
            {(isLand || isHouse) && (
              <div className="ik-form-section-box mt-6">
                <h4 className="ik-section-title"><Map size={20} /> Land Details</h4>
                {isLand && (
                  <div className="ik-grid-2">
                    <div className="ik-form-group">
                      <label>Land Type</label>
                      <select value={formData.landType} onChange={e => updateForm('landType', e.target.value)}>
                        <option value="Agricultural">Agricultural</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {formData.landType === 'Other' && (
                      <div className="ik-form-group">
                        <label>Specify Land Type</label>
                        <input
                          type="text"
                          value={formData.otherLandType}
                          onChange={e => updateForm('otherLandType', e.target.value)}
                          placeholder="e.g. Industrial"
                        />
                      </div>
                    )}
                  </div>
                )}
                <div className="ik-grid-2 mt-4">
                  <div className="ik-form-group">
                    <label><Maximize size={16} /> Land Size</label>
                    <input type="number" value={formData.landSize} onChange={e => updateForm('landSize', e.target.value)} placeholder="Eg. 10" />
                  </div>
                  <div className="ik-form-group">
                    <label>Unit</label>
                    <select value={formData.landSizeUnit} onChange={e => updateForm('landSizeUnit', e.target.value)}>
                      <option value="Perches">Perches</option>
                      <option value="Acres">Acres</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION: Property Specs */}
            {(isHouse || isApt || isCommercial) && (
              <div className="ik-form-section-box mt-6">
                <h4 className="ik-section-title"><Building size={20} /> Property Specs</h4>
                <div className="ik-grid-2">
                  <div className="ik-form-group">
                    <label><Maximize size={16} /> {isApt ? 'Size (sq-ft)' : isCommercial ? 'Size (sq-ft)' : 'House Size (sq-ft)'}</label>
                    <input type="number" value={formData.houseSize} onChange={e => updateForm('houseSize', e.target.value)} placeholder="Eg. 1500" />
                  </div>
                  {!isCommercial && (
                    <div className="ik-form-group">
                      <label><BedDouble size={16} /> Bedrooms</label>
                      <input type="number" value={formData.bedrooms} onChange={e => updateForm('bedrooms', e.target.value)} placeholder="Eg. 3" />
                    </div>
                  )}
                </div>

                {(isHouse || isApt) && (
                  <div className="ik-grid-2 mt-4">
                    <div className="ik-form-group">
                      <label><Bath size={16} /> Bathrooms</label>
                      <input type="number" value={formData.bathrooms} onChange={e => updateForm('bathrooms', e.target.value)} placeholder="Eg. 2" />
                    </div>
                  </div>
                )}

                {isApt && (
                  <div className="ik-grid-2 mt-4">
                    <div className="ik-form-group">
                      <label><CheckSquare size={16} /> Completion Status</label>
                      <select value={formData.completionStatus} onChange={e => updateForm('completionStatus', e.target.value)}>
                        <option value="Ready">Ready</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Upcoming">Upcoming</option>
                      </select>
                    </div>
                    <div className="ik-form-group">
                      <label><Home size={16} /> Furnished Status</label>
                      <select value={formData.furnishedStatus} onChange={e => updateForm('furnishedStatus', e.target.value)}>
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Semi furnished">Semi furnished</option>
                        <option value="Fully furnished">Fully furnished</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* SECTION: Pricing Details */}
            <div className="ik-form-section-box mt-6">
              <h4 className="ik-section-title"><DollarSign size={20} /> Pricing Details</h4>
              <div className="ik-grid-2">
                <div className="ik-form-group">
                  <label>Price (LKR) *</label>
                  <input type="number" value={formData.price} onChange={e => updateForm('price', e.target.value)} placeholder="Eg. 15000000" />
                </div>
                {isLand && (
                  <div className="ik-form-group">
                    <label>Unit</label>
                    <select value={formData.priceUnit} onChange={e => updateForm('priceUnit', e.target.value)}>
                      <option value="Total price">Total price</option>
                      <option value="Per perch">Per perch</option>
                      <option value="Per acre">Per acre</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* SECTION: Description */}
            <div className="ik-form-section-box mt-6">
              <h4 className="ik-section-title"><FileText size={20} /> Description</h4>
              <div className="ik-form-group mt-2">
                <label>Include features, nearby places and other details *</label>
                <textarea rows="5" value={formData.description} onChange={e => updateForm('description', e.target.value)} placeholder="Describe your property..."></textarea>
              </div>
            </div>

          </div>
        );
      case 2:
        return (
          <div className="step-content fade-in">
            <h3 className="s-title">Location Information</h3>

            <button className="ik-btn ik-btn-outline" onClick={() => setIsLocModalOpen(true)} style={{ width: '100%', justifyContent: 'space-between', padding: '16px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={24} className="ik-text-green" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>Select Location</div>
                  <div style={{ fontWeight: '700', color: '#0f172a' }}>
                    {formData.district ? `${formData.city ? formData.city + ', ' : ''}${formData.district}` : 'Choose a district & city...'}
                  </div>
                </div>
              </div>
              <ChevronRight size={20} color="#94a3b8" />
            </button>

            <div className="ik-form-group mt-6">
              <label>Address</label>
              <input type="text" value={formData.address} onChange={e => updateForm('address', e.target.value)} placeholder="Street name, house no." />
            </div>

            <div className="ik-form-group mt-4">
              <label>Landmark (Optional)</label>
              <input type="text" value={formData.landmark} onChange={e => updateForm('landmark', e.target.value)} placeholder="Near to..." />
            </div>

          </div>
        );
      case 3:
        return (
          <div className="step-content fade-in">
            <h3 className="s-title">Upload Photos</h3>
            <p className="ik-sub-text">Add up to 5 photos to get more views. Cover image should be high quality.</p>

            <label className="ik-drag-zone" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
              <input type="file" multiple accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
              <UploadCloud size={40} className="text-gray-400" />
              <h4>Drag & Drop your photos here</h4>
              <p>or click to browse</p>
              <div className="ik-btn ik-btn-outline mt-4" style={{ pointerEvents: 'none' }}>Select Images</div>
            </label>

            <div className="ik-photo-grid mt-6">
              {Array(5).fill(0).map((_, idx) => {
                const photo = photos[idx];
                return (
                  <div key={idx} className="ik-photo-slot" style={{ position: 'relative', overflow: 'hidden' }}>
                    {photo ? (
                      <>
                        <img src={photo} alt={`Upload ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); removePhoto(idx); }}
                          style={{ position: 'absolute', top: '4px', right: '4px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px' }}
                        >✕</button>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={24} />
                        <span>Photo {idx + 1}</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content fade-in">
            <h3 className="s-title">Contact Information</h3>
            <div className="ik-form-group">
              <label>Name</label>
              <input type="text" value={formData.contactName} onChange={e => updateForm('contactName', e.target.value)} />
            </div>

            <div className="ik-grid-2 mt-4">
              <div className="ik-form-group">
                <label>Phone Number *</label>
                <input type="text" value={formData.phone} onChange={e => updateForm('phone', e.target.value)} placeholder="Eg. 077 XXX XXXX" />
              </div>
              <div className="ik-form-group">
                <label>WhatsApp Number</label>
                <input type="text" value={formData.whatsapp} onChange={e => updateForm('whatsapp', e.target.value)} placeholder="Optional" />
              </div>
            </div>

            <div className="ik-form-group mt-4">
              <label>Email Address</label>
              <input type="email" value={formData.email} onChange={e => updateForm('email', e.target.value)} placeholder="Eg. you@example.com" />
            </div>

            <label className="ik-checkbox mt-4">
              <input type="checkbox" checked={formData.hideNumber} onChange={e => updateForm('hideNumber', e.target.checked)} />
              <span>Hide phone numbers from public (buyers will contact via website messaging)</span>
            </label>
          </div>
        );
      case 5:
        return (
          <div className="step-content fade-in">
            <h3 className="s-title">Payment Method</h3>

            <div style={{ background: '#ecfdf5', border: '1px solid #10b981', padding: '16px', borderRadius: '12px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: 0, color: '#065f46', fontSize: '16px' }}>Premium Listing Fee</h4>
                <p style={{ margin: 0, color: '#047857', fontSize: '13px', marginTop: '4px' }}>One-time payment for up to 60 days</p>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>Rs 3,000</div>
            </div>

            <p className="ik-sub-text">Select how you want to pay for this premium listing.</p>

            <div className="ik-grid-2">
              <button
                className={`ik-select-card ${formData.paymentMethod === 'online' ? 'active' : ''}`}
                onClick={() => updateForm('paymentMethod', 'online')}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ background: '#1d4ed8', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>VISA</div>
                  <div style={{ background: '#f59e0b', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>Master</div>
                </div>
                <span>Online Payment</span>
              </button>

              <button
                className={`ik-select-card ${formData.paymentMethod === 'bank' ? 'active' : ''}`}
                onClick={() => updateForm('paymentMethod', 'bank')}
              >
                <Briefcase size={28} />
                <span>Bank Transfer</span>
              </button>
            </div>

            {formData.paymentMethod === 'bank' && (
              <div className="ik-info-card mt-6" style={{ background: '#f8fafc', borderStyle: 'dashed' }}>
                <h4 style={{ marginBottom: '12px' }}>Bank Account Details</h4>
                <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#475569' }}>Please transfer <strong>Rs 3,000</strong> to the following account and upload the receipt to verify your ad.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0', fontSize: '14px', color: '#0f172a' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Bank:</strong> Commercial Bank</li>
                  <li style={{ marginBottom: '8px' }}><strong>Branch:</strong> Nugegoda</li>
                  <li style={{ marginBottom: '8px' }}><strong>Account Name:</strong> Idamata PVT LTD</li>
                  <li style={{ marginBottom: '8px' }}><strong>Account Number:</strong> 1000 2345 6789</li>
                </ul>
                <div className="ik-form-group mt-4" style={{ marginBottom: 0 }}>
                  <label>Reference No. / Receipt Upload</label>
                  <input type="file" accept="image/*" />
                </div>
              </div>
            )}

            {formData.paymentMethod === 'online' && (
              <div className="ik-info-card mt-6" style={{ background: '#f8fafc', borderStyle: 'dashed', textAlign: 'center' }}>
                <CheckCircle size={32} color="#10b981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ margin: '0 0 8px' }}>Secure Online Checkout</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>You will be redirected to the secure payment gateway to complete your transaction after clicking Publish Ad.</p>
              </div>
            )}
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="ik-page-wrapper">
      {/* GLOBAL HEADER */}
      <header className="header p-global-header ik-header">
        <div className="container nav ik-nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">
              <LogoSmile size={28} />
              <span className="logo-text">idamata</span>
            </Link>
          </div>

          <div className="nav-right">
            <button className="nav-action-btn" onClick={onChatClick}>
              <MessageCircle size={18} />
              <span>Chat</span>
            </button>
            <Link to="/account" className="nav-action-btn" style={{ textDecoration: 'none' }}>
              <User size={18} />
              <span>My Account</span>
            </Link>
            <button className="post-ad-btn ik-post-btn">
              POST YOUR AD
            </button>
          </div>
        </div>
      </header>

      {/* PAGE BODY */}
      <div className="ik-main-container">

        <div className="ik-page-header">
          <h1>Post Your Property</h1>
          <p>Sell or rent your land, house, apartment or commercial property quickly in Sri Lanka.</p>
        </div>

        <div className="ik-layout-flex">

          {/* LEFT: FORM AREA */}
          <div className="ik-form-section">

            {/* PROGRESS BAR */}
            <div className="ik-stepper">
              {steps.map((s, idx) => (
                <div key={s.id} className={`ik-step-item ${currentStep === s.id ? 'active' : ''} ${currentStep > s.id ? 'completed' : ''}`}>
                  <div className="ik-step-circle">{currentStep > s.id ? <CheckCircle size={14} /> : s.id}</div>
                  <span className="ik-step-name">{s.name}</span>
                  {idx < steps.length - 1 && <div className="ik-step-line"></div>}
                </div>
              ))}
            </div>

            {/* FORM CARD */}
            <div className="ik-card">
              {renderStep()}

              <div className="ik-card-footer">
                <button
                  className="ik-btn ik-btn-text"
                  onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                  style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
                >
                  <ArrowLeft size={18} /> Back
                </button>

                {currentStep < 5 ? (
                  <button className="ik-btn ik-btn-primary" onClick={() => setCurrentStep(prev => Math.min(5, prev + 1))}>
                    Save & Continue <ChevronRight size={18} />
                  </button>
                ) : (
                  <button className="ik-btn ik-btn-success" onClick={() => {
                    alert('Your secure payment has been processed and your ad is now under review!');

                    // Create a mock ad object from form data
                    const isLand = formData.category === 'Land For Sale';
                    const isCommercial = formData.category === 'Commercial Property';
                    
                    let adDetails = '';
                    if (isLand) {
                      adDetails = `${formData.landSize || 0} ${formData.landSizeUnit}`;
                    } else if (isCommercial) {
                      adDetails = `${formData.houseSize || 0} sqft`;
                    } else {
                      adDetails = `${formData.bedrooms || 0} Beds • ${formData.bathrooms || 0} Baths • ${formData.houseSize || 0} sqft`;
                    }

                    const priceFormatted = formData.price
                      ? `Rs ${parseInt(formData.price).toLocaleString()}${formData.priceUnit !== 'Total price' ? ' ' + formData.priceUnit : ''}`
                      : 'Negotiable';

                    const newAd = {
                      id: Date.now(),
                      title: formData.title || 'Premium Property',
                      price: priceFormatted,
                      location: formData.city || formData.district || 'Colombo',
                      details: adDetails,
                      img: photos && photos.length > 0 ? photos[0] : 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
                      category: formData.category, // Exact match
                      isUserAd: true,
                      status: 'Under Review'
                    };

                    // Save to localStorage
                    const existingAds = JSON.parse(localStorage.getItem('idamata_user_ads') || '[]');
                    localStorage.setItem('idamata_user_ads', JSON.stringify([newAd, ...existingAds]));

                    navigate('/');
                  }}>
                    {formData.paymentMethod === 'online' ? 'Pay & Publish Ad' : 'Submit Bank Details'} <CheckCircle size={18} />
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT: RULES & PREVIEW */}
          <div className="ik-sidebar-section">

            <div className="ik-info-card focus-card">
              <h4>Ad Posting Rules</h4>
              <ul>
                <li>Add descriptive and honest details.</li>
                <li>Upload minimum 3 clear, landscape images.</li>
                <li>Make sure the price is realistic.</li>
                <li>Do not post duplicate ads.</li>
              </ul>
            </div>

            <div className="ik-preview-card mt-6">
              <h4>Listing Preview</h4>
              <div className="ik-preview-inner">
                <div className="p-img" style={{ overflow: 'hidden' }}>
                  {photos.length > 0 ? (
                    <img src={photos[0]} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <ImageIcon size={32} color="#94a3b8" />
                  )}
                </div>
                <div className="p-info">
                  <h5 className={formData.title ? '' : 'text-empty'}>{formData.title || 'Property Title Here'}</h5>
                  <p className="p-price">
                    {formData.price
                      ? `Rs ${parseInt(formData.price).toLocaleString()}${formData.priceUnit !== 'Total price' ? ' ' + formData.priceUnit : ''}`
                      : 'Rs 0'}
                  </p>
                  <p className="p-loc"><MapPin size={12} /> {formData.city ? `${formData.city}, ${formData.district}` : 'Location missing'}</p>

                  <div className="p-tags">
                    {formData.category && <span>{formData.category}</span>}
                    {formData.bedrooms && <span>{formData.bedrooms} Beds</span>}
                    {formData.bathrooms && <span>{formData.bathrooms} Baths</span>}
                    {formData.houseSize && <span>{formData.houseSize} sqft</span>}
                    {formData.landSize && <span>{formData.landSize} {formData.landSizeUnit}</span>}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <LocationSelectionModal
        isOpen={isLocModalOpen}
        onClose={() => setIsLocModalOpen(false)}
        isPostAdMode={true}
        onSelect={(loc) => {
          if (loc.district) {
            updateForm('district', loc.district);
            updateForm('city', loc.city || '');
          }
        }}
      />
    </div>
  );
};

export default PostAdPage;
