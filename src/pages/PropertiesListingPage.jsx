import React from 'react';
import {
  Home, MapPin, Search, ChevronDown, CheckCircle2, Bookmark,
  MessageCircle, User, Star, Map, Building2, Key, Building, Briefcase
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import RefineModal from '../components/RefineModal';
import LocationSelectionModal from '../components/LocationSelectionModal';
import CategorySelectionModal from '../components/CategorySelectionModal';
import PriceSelectionModal from '../components/PriceSelectionModal';
import HouseSizeSelectionModal from '../components/HouseSizeSelectionModal';
import { BedroomsSelectionModal, BathroomsSelectionModal, PosterTypeSelectionModal, SortBySelectionModal, AdTypeSelectionModal, FurnishedStatusSelectionModal, PropertyTypeSelectionModal } from '../components/FilterSelectionModals';
import './PropertiesListingPage.css';

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

const mockProperties = [
  {
    id: 1,
    title: "Negombo Brand New Super Luxury Solid House",
    beds: 4,
    baths: 4,
    location: "Gampaha, Houses For Sale",
    price: "Rs 51,000,000",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    isMember: true,
    isVerified: true,
    isTopAd: true,
  },
  {
    id: 2,
    title: "Luxury House For Sale In Pelawatta",
    beds: 5,
    baths: 3,
    location: "Colombo, Houses For Sale",
    price: "Rs 65,000,000",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
    isMember: true,
    isVerified: true,
    isTopAd: true,
  },
  {
    id: 3,
    title: "Battaramulla Pelawatthe Lake Road Brand new House",
    beds: 4,
    baths: 4,
    location: "Colombo, Houses For Sale",
    price: "Rs 64,000,000",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
    isMember: true,
    isVerified: true,
    isFeatured: true, // Note this
    imageOverlay: "+10"
  },
  {
    id: 4,
    title: "Two Story House For Sale In Dehiwala",
    beds: 4,
    baths: 3,
    location: "Colombo, Houses For Sale",
    price: "Rs 45,000,000",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&q=80",
    isMember: true,
    isVerified: true,
  }
];

export default function PropertiesListingPage({ onChatClick, onLoginClick }) {
  const [isRefineModalOpen, setIsRefineModalOpen] = React.useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = React.useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = React.useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = React.useState(false);
  const [isSizeModalOpen, setIsSizeModalOpen] = React.useState(false);
  const [isBedroomsModalOpen, setIsBedroomsModalOpen] = React.useState(false);
  const [isBathroomsModalOpen, setIsBathroomsModalOpen] = React.useState(false);
  const [isPosterTypeModalOpen, setIsPosterTypeModalOpen] = React.useState(false);
  const [isSortByModalOpen, setIsSortByModalOpen] = React.useState(false);
  const [isAdTypeModalOpen, setIsAdTypeModalOpen] = React.useState(false);
  const [isFurnishedModalOpen, setIsFurnishedModalOpen] = React.useState(false);
  const [isPropertyTypeModalOpen, setIsPropertyTypeModalOpen] = React.useState(false);

  const { categoryId } = useParams();

  // Decide default subcategory based on ID
  const initialCategory = categoryId === '2' ? 'Land For Sale' : (categoryId === '3' ? 'Apartments For Sale' : (categoryId === '4' ? 'Houses For Rent' : (categoryId === '5' ? 'Apartment Rentals' : (categoryId === '6' ? 'Commercial Property' : 'Houses For Sale'))));
  const [selectedSubcategory, setSelectedSubcategory] = React.useState(initialCategory);
  const [priceRange, setPriceRange] = React.useState({ min: '', max: '' });
  const [sizeRange, setSizeRange] = React.useState({ min: 0, max: 100000 });
  const [selectedBeds, setSelectedBeds] = React.useState([]);
  const [selectedBaths, setSelectedBaths] = React.useState([]);
  const [selectedPosterType, setSelectedPosterType] = React.useState('All posters');
  const [selectedSortBy, setSelectedSortBy] = React.useState('Date: Newest first');
  const [selectedAdType, setSelectedAdType] = React.useState('For sale');
  const [selectedFurnished, setSelectedFurnished] = React.useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = React.useState('All');

  return (
    <div className="layout listing-page">
      {/* Header - kept consistent with the main app but simplified for the mock */}
      <header className="header" style={{ background: '#009f7f' }}>
        <div className="container nav">
          <div className="nav-left">
            <Link to="/" className="logo" style={{ color: '#fff' }}>
              <LogoSmile size={28} />
              <span className="logo-text">idamata</span>
            </Link>
            <Link to="/all-ads" className="nav-all-ads" style={{ color: '#fff' }}>All ads</Link>
            <div className="lang-selector">
              <button className="lang-btn" style={{ color: '#fff' }}>සිංහල</button>
              <button className="lang-btn" style={{ color: '#fff' }}>தமிழ்</button>
            </div>
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
            <button onClick={() => onLoginClick('post')} className="post-ad-btn" style={{ backgroundColor: '#ffcc00', color: '#000', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}>POST YOUR PROPERTY</button>
          </div>
        </div>
      </header>

      <div className="listing-top-bar">
        <div className="container">
          <div className="top-search-row">
            <h1 className="top-search-title">{selectedSubcategory || 'Property'} in Sri Lanka</h1>
          </div>

          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span> <Link to="/all-ads">All ads</Link> <span>›</span> <Link to="#" onClick={(e) => { e.preventDefault(); setSelectedSubcategory(''); }}>Property</Link> {selectedSubcategory && (<><span>›</span> <strong>{selectedSubcategory}</strong></>)}
          </div>

          <div className="filter-row">
            <button
              className="filter-btn active-filter-outline"
              onClick={() => setIsRefineModalOpen(true)}
            >
              <MapPin size={14} /> Refine
            </button>
            <button
              className="filter-btn"
              onClick={() => setIsLocationModalOpen(true)}
            >
              All of Sri Lanka <ChevronDown size={14} />
            </button>
            <button
              className={`filter-btn ${selectedSubcategory ? 'active-filter' : ''}`}
              onClick={() => setIsCategoryModalOpen(true)}
            >
              {selectedSubcategory || 'Category'} <span style={{ marginLeft: 5 }} onClick={(e) => { e.stopPropagation(); setSelectedSubcategory(''); }}>✕</span>
            </button>
            <button
              className={`filter-btn ${priceRange.min || priceRange.max ? 'active-filter' : ''}`}
              onClick={() => setIsPriceModalOpen(true)}
            >
              {priceRange.min || priceRange.max ? `Rs. ${priceRange.min || 0} - ${priceRange.max || 'Any'}` : 'Price'} <ChevronDown size={14} />
            </button>
            <button
              className={`filter-btn ${sizeRange.min > 0 || sizeRange.max < 100000 ? 'active-filter' : ''}`}
              onClick={() => setIsSizeModalOpen(true)}
            >
              {sizeRange.min > 0 || sizeRange.max < 100000 ? `${sizeRange.min} - ${sizeRange.max} ${selectedSubcategory === 'Land For Sale' ? 'perches' : 'sqft'}` : (selectedSubcategory === 'Land For Sale' ? 'Land size' : (selectedSubcategory === 'Apartments For Sale' ? 'Unit size' : (selectedSubcategory === 'Commercial Property' ? 'Size' : 'House size')))} <ChevronDown size={14} />
            </button>

            {/* Bedrooms and Bathrooms are hidden when Land For Sale or Commercial is selected */}
            {selectedSubcategory !== 'Land For Sale' && selectedSubcategory !== 'Commercial Property' && (
              <>
                <button
                  className={`filter-btn ${selectedBeds.length > 0 ? 'active-filter' : ''}`}
                  onClick={() => setIsBedroomsModalOpen(true)}
                >
                  {selectedBeds.length > 0 ? `Beds: ${selectedBeds.join(', ')}` : 'Bedrooms'} <ChevronDown size={14} />
                </button>
                <button
                  className={`filter-btn ${selectedBaths.length > 0 ? 'active-filter' : ''}`}
                  onClick={() => setIsBathroomsModalOpen(true)}
                >
                  {selectedBaths.length > 0 ? `Baths: ${selectedBaths.join(', ')}` : 'Bathrooms'} <ChevronDown size={14} />
                </button>
              </>
            )}

            {/* Furnished status for Apartments only */}
            {(selectedSubcategory === 'Apartments For Sale' || selectedSubcategory === 'Apartment Rentals') && (
              <button
                className={`filter-btn ${selectedFurnished.length > 0 ? 'active-filter' : ''}`}
                onClick={() => setIsFurnishedModalOpen(true)}
              >
                {selectedFurnished.length > 0 ? selectedFurnished.join(', ') : 'Furnished status'} <ChevronDown size={14} />
              </button>
            )}

            {/* Property Type Filter */}
            {(selectedSubcategory === 'Houses For Sale' || selectedSubcategory === 'Commercial Property') && (
              <button
                className={`filter-btn ${selectedPropertyType !== 'All' ? 'active-filter' : ''}`}
                onClick={() => setIsPropertyTypeModalOpen(true)}
              >
                {selectedPropertyType === 'All' ? 'Property type' : selectedPropertyType}
                <ChevronDown size={14} />
              </button>
            )}

            <button
              className={`filter-btn`}
              onClick={() => setIsSortByModalOpen(true)}
            >
              Sort by <ChevronDown size={14} />
            </button>

            {/* Ad Type filter */}
            <button
              className={`filter-btn ${selectedAdType ? 'active-filter' : ''}`}
              onClick={() => setIsAdTypeModalOpen(true)}
            >
              {selectedAdType || 'Ad Type'} {selectedAdType ? <span style={{ marginLeft: 5 }} onClick={(e) => { e.stopPropagation(); setSelectedAdType(''); }}>✕</span> : <ChevronDown size={14} />}
            </button>

            <button
              className={`filter-btn ${selectedPosterType !== 'All posters' ? 'active-filter' : ''}`}
              onClick={() => setIsPosterTypeModalOpen(true)}
            >
              {selectedPosterType !== 'All posters' ? selectedPosterType : 'Type of poster'} <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="container listing-main-content">
        {/* Left Sidebar */}
        <aside className="listing-sidebar">
          <div className="sidebar-category-tree">
            <ul>
              <li className="tree-level-1"><Link to="/all-ads">All Categories</Link></li>
              <li className="tree-level-2">
                <Home size={16} color="#ff3366" /> <Link to="/category/property">Property</Link>
              </li>
              {selectedSubcategory ? (
                <>
                  <li className="tree-level-3">
                    {selectedSubcategory === 'Apartments For Sale' ? <Building2 size={16} color="#707676" /> :
                      selectedSubcategory === 'Houses For Rent' ? <Key size={16} color="#707676" /> :
                        selectedSubcategory === 'Apartment Rentals' ? <Building size={16} color="#707676" /> :
                          selectedSubcategory === 'Commercial Property' ? <Briefcase size={16} color="#707676" /> :
                            <Home size={16} color="#707676" />}
                    <span style={{ fontWeight: 600 }}>{selectedSubcategory}</span>
                  </li>
                  <li className="tree-level-4 tree-count">
                    ({selectedSubcategory === 'Land For Sale' ? '26,629' :
                      (selectedSubcategory === 'Houses For Sale' ? '17,854' :
                        (selectedSubcategory === 'Houses For Rent' ? '3,244' :
                          (selectedSubcategory === 'Apartments For Sale' ? '2,918' :
                            (selectedSubcategory === 'Apartment Rentals' ? '1,809' :
                              (selectedSubcategory === 'Commercial Property' ? '1,724' : '19,991')))))})
                  </li>
                </>
              ) : (
                <div className="subcategory-list-sidebar">
                  {[
                    { name: 'Houses For Sale', count: '23,450', icon: <Home size={16} /> },
                    { name: 'Land For Sale', count: '18,210', icon: <Map size={16} /> },
                    { name: 'Apartments For Sale', count: '8,420', icon: <Building2 size={16} /> },
                    { name: 'Houses For Rent', count: '5,120', icon: <Key size={16} /> },
                    { name: 'Apartment Rentals', count: '3,890', icon: <Building size={16} /> },
                    { name: 'Commercial Property', count: '4,150', icon: <Briefcase size={16} /> }
                  ].map((sub) => (
                    <li key={sub.name} className="tree-level-3 sub-link" onClick={() => setSelectedSubcategory(sub.name)}>
                      <Link to="#">
                        <span className="sub-icon">{sub.icon}</span>
                        <span className="sub-name">{sub.name}</span>
                        <span className="sub-count">({sub.count})</span>
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="listing-results">
          <div className="results-header">
            <span className="results-count">Showing 1-25 of {selectedSubcategory ? (selectedSubcategory === 'Land For Sale' ? '26,629' : (selectedSubcategory === 'Houses For Sale' ? '17,854' : (selectedSubcategory === 'Houses For Rent' ? '3,244' : (selectedSubcategory === 'Apartments For Sale' ? '2,918' : (selectedSubcategory === 'Apartment Rentals' ? '1,809' : (selectedSubcategory === 'Commercial Property' ? '1,724' : '19,991')))))) : '57,527'} ads</span>
            <button className="save-search-btn">
              <Bookmark size={16} /> Save search
            </button>
          </div>

          <div className="cards-list">
            {mockProperties.map((property, index) => {
              const currentType = selectedSubcategory || ['Houses For Sale', 'Land For Sale', 'Commercial Property', 'Apartments For Sale', 'Apartment Rentals', 'Houses For Rent'][index % 6];
              return (
                <Link to={`/ad/${property.id}`} key={property.id} className={`horizontal-card ${property.isFeatured ? 'horizontal-card-featured' : ''}`}>
                  {property.isFeatured && <div className="featured-tag">FEATURED</div>}

                  <div className="card-image-wrapper">
                    <img
                      src={currentType === 'Apartment Rentals' || currentType === 'Apartments For Sale'
                        ? [
                          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80',
                          'https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80',
                          'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80'
                        ][index % 4]
                        : (currentType === 'Commercial Property' || currentType === 'Commercial Properties For Sale'
                          ? [
                            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
                            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
                            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80',
                            'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80'
                          ][index % 4]
                          : (currentType === 'Houses For Rent' || currentType === 'Houses For Sale' || currentType === 'House Rentals'
                            ? [
                              'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
                              'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80',
                              'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&q=80',
                              'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80'
                            ][index % 4]
                            : [
                              'https://images.unsplash.com/photo-1629016943072-0bf0ce4e2608?w=400&q=80',
                              'https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?w=400&q=80',
                              'https://images.unsplash.com/photo-1622480771645-8fe195084754?w=400&q=80',
                              'https://plus.unsplash.com/premium_photo-1683547021548-fb209f39b225?w=400&q=80'
                            ][index % 4]))
                      }
                      alt={property.title}
                    />
                    {property.imageOverlay && (
                      <div className="image-overlay-text">{property.imageOverlay}</div>
                    )}
                  </div>

                  <div className="card-details">
                    <h3 className="card-title">
                      {currentType === 'Holiday Rentals' && index === 0 ? 'Rooms In Kandy' : (
                        currentType === 'Land For Sale'
                          ? property.title.replace('House', 'Land').replace('Brand New Super Luxury Solid Land', 'Premium Land').replace('Two Story Land', 'Prime Land')
                          : (currentType === 'Apartments For Sale' || currentType === 'Apartment Rentals'
                            ? property.title.replace('House', 'Apartment')
                            : (currentType === 'Commercial Property' || currentType === 'Commercial Properties For Sale'
                              ? property.title.replace('House', 'Commercial Building').replace('Luxury', 'Premium Business')
                              : (currentType.includes('Rent') ? property.title.replace('Sale', 'Rent') : property.title)))
                      )}
                    </h3>
                    {currentType === 'Land For Sale' || currentType === 'Land Rentals' ? (
                      <p className="card-specs">{15 + index}.0 perches</p>
                    ) : (
                      <p className="card-specs">
                        {currentType === 'Holiday Rentals' && index === 0 ? 'Beds: 8, Baths: 8' : (
                          <>
                            {currentType.includes('Apartment') ? 'Apartment' : (currentType.includes('Commercial') ? 'Commercial' : 'House')}
                            {!currentType.includes('Commercial') && !currentType.includes('Land') && ` • Bedrooms: ${property.beds}, Bathrooms: ${property.baths}`}
                            {currentType.includes('Commercial') && ` • Size: ${3500 + index * 500} sqft`}
                          </>
                        )}
                      </p>
                    )}

                    <div className="card-meta">
                      {(property.isMember || property.isVerified || property.isTopAd) && (
                        <div className="card-badges">
                          {property.isMember && (
                            <span className="badge-member"><Star size={10} fill="white" /> MEMBER</span>
                          )}
                          {property.isVerified && (
                            <span className="badge-verified"><CheckCircle2 size={12} /> VERIFIED SELLER</span>
                          )}
                        </div>
                      )}
                      <p className="card-location">{property.location}, {currentType}</p>
                      <p className="card-price">{currentType === 'Holiday Rentals' && index === 0 ? 'Rs 3,500 /night' : (currentType.includes('Land') ? `Rs ${150000 + index * 1000} per perch` : property.price)}</p>
                    </div>
                  </div>
                  {property.isTopAd && (
                    <div className="top-ad-badge">
                      <div className="top-ad-circle">1</div>
                      <div className="top-ad-tail"></div>
                    </div>
                  )}

                  {property.isFeatured && (
                    <div className="featured-crown">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffcc00" stroke="none">
                        <path d="M3 17h18l-2-11-4 6-3-8-3 8-4-6L3 17zm0 2h18v2H3v-2z" />
                      </svg>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </main>

        {/* Right Sidebar (Ads) */}
        <aside className="ad-sidebar">
          <div className="sidebar-banner">
            <div style={{ background: '#333', color: '#fff', padding: '15px', textAlign: 'center', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ margin: 0 }}>PRIME GROUP</h3>
              <p>Super Luxury Houses</p>
              <button style={{ background: '#fff', color: '#0074d9', border: 'none', padding: '5px 15px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>CLICK HERE</button>
            </div>
          </div>
          <div className="sidebar-banner" style={{ background: '#fdf5eb', padding: '20px', border: '1px solid #eadbc7', textAlign: 'center', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ color: '#bf4040', fontFamily: 'serif', margin: 0, fontSize: '24px' }}>Elizabeth</h4>
            <p style={{ color: '#7a5a5a', fontSize: '14px' }}>Victorian arches in tropical light.</p>
            <p style={{ color: '#bf4040', fontWeight: 'bold', marginTop: '30px' }}>0702 777 777</p>
          </div>
        </aside>
      </div>
      <RefineModal
        isOpen={isRefineModalOpen}
        onClose={() => setIsRefineModalOpen(false)}
        selectedSubcategory={selectedSubcategory}
        onSubcategoryChange={setSelectedSubcategory}
        selectedSortBy={selectedSortBy}
        onSortByChange={setSelectedSortBy}
        selectedPosterType={selectedPosterType}
        onPosterTypeChange={setSelectedPosterType}
        selectedAdType={selectedAdType}
        onAdTypeChange={setSelectedAdType}
        selectedFurnished={selectedFurnished}
        onFurnishedChange={setSelectedFurnished}
        selectedPropertyType={selectedPropertyType}
        onPropertyTypeChange={setSelectedPropertyType}
      />
      <LocationSelectionModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
      <CategorySelectionModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSelect={(cat) => setSelectedSubcategory(cat)}
        selectedSubcategory={selectedSubcategory}
      />
      <PriceSelectionModal
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
        onSelect={(range) => setPriceRange(range)}
        initialMin={priceRange.min}
        initialMax={priceRange.max}
      />
      <HouseSizeSelectionModal
        isOpen={isSizeModalOpen}
        onClose={() => setIsSizeModalOpen(false)}
        onSelect={(range) => setSizeRange(range)}
        initialMin={sizeRange.min}
        initialMax={sizeRange.max}
      />
      <BedroomsSelectionModal
        isOpen={isBedroomsModalOpen}
        onClose={() => setIsBedroomsModalOpen(false)}
        onSelect={(val) => setSelectedBeds(val)}
        selectedValue={selectedBeds}
      />
      <BathroomsSelectionModal
        isOpen={isBathroomsModalOpen}
        onClose={() => setIsBathroomsModalOpen(false)}
        onSelect={(val) => setSelectedBaths(val)}
        selectedValue={selectedBaths}
      />
      <PosterTypeSelectionModal
        isOpen={isPosterTypeModalOpen}
        onClose={() => setIsPosterTypeModalOpen(false)}
        onSelect={(val) => setSelectedPosterType(val)}
        selectedValue={selectedPosterType}
      />
      <SortBySelectionModal
        isOpen={isSortByModalOpen}
        onClose={() => setIsSortByModalOpen(false)}
        onSelect={(val) => setSelectedSortBy(val)}
        selectedValue={selectedSortBy}
      />
      <AdTypeSelectionModal
        isOpen={isAdTypeModalOpen}
        onClose={() => setIsAdTypeModalOpen(false)}
        onSelect={(val) => setSelectedAdType(val)}
        selectedValue={selectedAdType}
      />
      <FurnishedStatusSelectionModal
        isOpen={isFurnishedModalOpen}
        onClose={() => setIsFurnishedModalOpen(false)}
        onSelect={(val) => setSelectedFurnished(val)}
        selectedValue={selectedFurnished}
      />
      <PropertyTypeSelectionModal
        isOpen={isPropertyTypeModalOpen}
        onClose={() => setIsPropertyTypeModalOpen(false)}
        onSelect={(val) => setSelectedPropertyType(val)}
        selectedValue={selectedPropertyType}
        category={selectedSubcategory}
      />
    </div>
  );
}
