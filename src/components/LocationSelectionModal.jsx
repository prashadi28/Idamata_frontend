import React, { useState } from 'react';
import { X, ChevronRight, Search, MapPin, RotateCcw, Building2, GraduationCap, Accessibility } from 'lucide-react';
import './LocationSelectionModal.css';

const districts = [
  'Colombo', 'Kandy', 'Galle', 'Ampara', 'Anuradhapura',
  'Badulla', 'Batticaloa', 'Gampaha', 'Hambantota', 'Jaffna',
  'Kalutara', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar',
  'Matale', 'Matara', 'Monaragala', 'Mullativu', 'Nuwara Eliya',
  'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
];

const cityData = {
  'Colombo': {
    popular: ['Nugegoda', 'Maharagama', 'Piliyandala'],
    all: ['Angoda', 'Athurugiriya', 'Avissawella', 'Baththramulla', 'Boralesgamuwa', 'Colombo 1', 'Colombo 2', 'Colombo 3', 'Colombo 4', 'Colombo 5', 'Colombo 6', 'Colombo 7', 'Colombo 8', 'Colombo 9', 'Colombo 10', 'Colombo 11', 'Colombo 12', 'Colombo 13', 'Colombo 14', 'Colombo 15', 'Dehiwala', 'Embulgama', 'Godagama', 'Hanwella', 'Homagama', 'Kaduwela', 'Kalubowila', 'Kesbewa', 'Kohuwala', 'Kolonnawa', 'Kotikawatta', 'Kottawa', 'Kotte', 'Maharagama', 'Malabe', 'Meegoda', 'Moratuwa', 'Mount Lavinia', 'Nawagamuwa', 'Nawala', 'Nugegoda', 'Olaboduwa', 'Padukka', 'Pannipitiya', 'Piliyandala', 'Polgasowita', 'Rajagiriya', 'Ranala', 'Ratmalana', 'Talawatugoda', 'Wellampitiya']
  },
  'Kandy': {
    popular: ['Kandy City', 'Peradeniya', 'Katugastota'],
    all: ['Akurana', 'Ampitiya', 'Danthure', 'Deltota', 'Digana', 'Dodamwala', 'Doluwa', 'Galagedara', 'Galaha', 'Gampola', 'Gelioya', 'Kadugannawa', 'Kandy City', 'Kundasale', 'Madawala Bazaar', 'Menikhinna', 'Nawalapitiya', 'Pallakale', 'Pathahewaheta', 'Peradeniya', 'Pilimatalawa', 'Poththapitiya', 'Pussellawa', 'Rattapiiya', 'Katugastota', 'Tawalantenne', 'Udunuwara', 'Wattegama', 'Yatinuwara', 'Yatihalagala']
  },
  'Galle': {
    popular: ['Galle City', 'Hikkaduwa', 'Ambalangoda'],
    all: ['Ahangama', 'Ahungalla', 'Akmeemana', 'Ambalangoda', 'Balapitiya', 'Batapola', 'Bentota', 'Baddegama', 'Boossa', 'Elpitiya', 'Gonapinuwala', 'Habaraduwa', 'Hikkaduwa', 'Hiniduma', 'Imaduwa', 'Karandeniya', 'Karapitiya', 'Koggala', 'Kosgoda', 'Galle City', 'Mapalagama', 'Nagoda', 'Neluwa', 'Pitigala', 'Rathgama', 'Thawalama', 'Udugama', 'Uragasmanhandiya', 'Wanduramba', 'Yakkalamulla']
  },
  'Ampara': {
    popular: ['Kalmunai', 'Akkaraipattu', 'Ampara City'],
    all: ['Addalaichenai', 'Akkaraipattu', 'Alayadivembu', 'Ampara City', 'Damana', 'Dehiattakandiya', 'Eragama', 'Irakkamam', 'Kalmunai', 'Karaitivu', 'Lahugala', 'Mahaoya', 'Navithanveli', 'Ninthanvur', 'Padiyathalawa', 'Pottuvil', 'Sainthamaruthu', 'Sammanthurai', 'Thirukkovil', 'Uhana']
  },
  'Anuradhapura': {
    popular: ['Anuradhapura City', 'Kekirawa', 'Tambuttegama'],
    all: ['Anuradhapura City', 'Eppawala', 'Galenbindunuwewa', 'Galnewa', 'Horowpothana', 'Ipalogama', 'Kahatagasdigiliya', 'Kebithigollewa', 'Kekirawa', 'Mahavilachchiya', 'Medawachchiya', 'Mihintale', 'Nachchaduwa', 'Padaviya', 'Palagala', 'Palugaswewa', 'Rajanganaya', 'Rambewa', 'Tambuttegama', 'Thalawa', 'Thirappane']
  },
  'Badulla': {
    popular: ['Badulla City', 'Bandarawela', 'Ella'],
    all: ['Badulla City', 'Bandarawela', 'Ella', 'Haldummulla', 'Hali-Ela', 'Haputale', 'Kandaketiya', 'Lunugala', 'Mahiyanganaya', 'Meegahakivula', 'Passara', 'Rideemaliyadda', 'Soranathota', 'Uva-Paranagama', 'Welimada']
  },
  'Batticaloa': {
    popular: ['Batticaloa City'],
    all: ['Batticaloa City', 'Eravur', 'Kattankudy', 'Valaichchenai']
  },
  'Gampaha': {
    popular: ['Negombo', 'Wattala', 'Kiribathgoda'],
    all: ['Biyagama', 'Delgoda', 'Divulapitiya', 'Dompe', 'Gampaha City', 'Ja-Ela', 'Kadawatha', 'Kandana', 'Katana', 'Kelaniya', 'Kiribathgoda', 'Lunuwila', 'Minuwangoda', 'Mirigama', 'Negombo', 'Nittambuwa', 'Ragama', 'Seeduwa', 'Wattala', 'Yakkala']
  },
  'Hambantota': {
    popular: ['Hambantota City', 'Tangalla', 'Tissamaharama'],
    all: ['Ambalantota', 'Beliatta', 'Hambantota City', 'Tangalla', 'Tissamaharama', 'Weeraketiya']
  },
  'Jaffna': {
    popular: ['Jaffna City', 'Nallur', 'Chavakachcheri'],
    all: ['Chavakachcheri', 'Jaffna City', 'Karainagar', 'Kayts', 'Nallur', 'Point Pedro', 'Velanai']
  },
  'Kalutara': {
    popular: ['Panadura', 'Horana', 'Kalutara City'],
    all: ['Agalawatta', 'Alutgama', 'Bandaragama', 'Beruwala', 'Bulathsinhala', 'Dodangoda', 'Horana', 'Ingiriya', 'Kalutara City', 'Madurawela', 'Mathugama', 'Millaniya', 'Palindanuwara', 'Panadura', 'Walallavita']
  },
  'Kegalle': {
    popular: ['Kegalle City', 'Mawanella', 'Rambukkana'],
    all: ['Aranayaka', 'Bulathkohupitiya', 'Dehiovita', 'Deraniyagala', 'Galigamuwa', 'Kegalle City', 'Mawanella', 'Rambukkana', 'Ruwanwella', 'Warakapola', 'Yatiyanthota']
  },
  'Kilinochchi': {
    popular: ['Kilinochchi City'],
    all: ['Kilinochchi City', 'Karachchi', 'Pallai']
  },
  'Kurunegala': {
    popular: ['Kurunegala City', 'Kuliyapitiya', 'Wariyapola'],
    all: ['Alawwa', 'Bingiriya', 'Galgamuwa', 'Ganewatta', 'Giribawa', 'Ibbagamuwa', 'Katupotha', 'Kuliyapitiya', 'Kurunegala City', 'Maho', 'Mawathagama', 'Narammala', 'Nikaweratiya', 'Panduwasnuwara', 'Pannala', 'Polgahawela', 'Ridigama', 'Wariyapola', 'Weerambugedara']
  },
  'Mannar': {
    popular: ['Mannar City'],
    all: ['Mannar City', 'Madhu', 'Musali', 'Nanaddan']
  },
  'Matale': {
    popular: ['Matale City', 'Dambulla', 'Galewela'],
    all: ['Ambanganga Korale', 'Dambulla', 'Galewela', 'Laggala Pallegama', 'Matale City', 'Naula', 'Pallepola', 'Palapathwela', 'Rattota', 'Ukuwela', 'Wilgamuwa', 'Yatawatta']
  },
  'Matara': {
    popular: ['Matara City', 'Weligama', 'Dikwella'],
    all: ['Akuressa', 'Athuraliya', 'Devinuwara', 'Dikwella', 'Hakmana', 'Kamburupitiya', 'Kekanadurra', 'Kirinda Puhulwella', 'Kotapola', 'Malimbada', 'Matara City', 'Mulatiyana', 'Pasgoda', 'Pitabeddara', 'Thihagoda', 'Welipitiya', 'Weligama']
  },
  'Monaragala': {
    popular: ['Monaragala City', 'Wellawaya', 'Kataragama'],
    all: ['Bibile', 'Buttala', 'Kataragama', 'Monaragala City', 'Wellawaya']
  },
  'Mullativu': {
    popular: ['Mullativu City'],
    all: ['Mullativu City', 'Oddusuddan', 'Puthukudiyiruppu']
  },
  'Nuwara Eliya': {
    popular: ['Nuwara Eliya City', 'Hatton', 'Ginigathhena'],
    all: ['Ambagamuwa', 'Ginigathhena', 'Hanguranketha', 'Hatton', 'Kotmale', 'Nuwara Eliya City', 'Rikillagaskada', 'Walapane']
  },
  'Polonnaruwa': {
    popular: ['Polonnaruwa City', 'Hingurakgoda', 'Kaduruwela'],
    all: ['Hingurakgoda', 'Kaduruwela', 'Medirigiriya', 'Polonnaruwa City']
  },
  'Puttalam': {
    popular: ['Puttalam City', 'Chilaw', 'Wennappuwa'],
    all: ['Anamaduwa', 'Arachchikattuwa', 'Chilaw', 'Dankotuwa', 'Kalpitiya', 'Karuwalagaswewa', 'Madampe', 'Mahakumbukkadawala', 'Mahawewa', 'Mundalama', 'Nattandiya', 'Nawagattegama', 'Pallama', 'Puttalam City', 'Vanathavilluwa', 'Wennappuwa']
  },
  'Ratnapura': {
    popular: ['Ratnapura City', 'Embilipitiya', 'Balangoda'],
    all: ['Ayagama', 'Balangoda', 'Eheliyagoda', 'Elapatha', 'Embilipitiya', 'Godakawela', 'Imbulpe', 'Kahawatta', 'Kalawana', 'Kiriella', 'Kolonne', 'Kuruvita', 'Nivithigala', 'Pelmadulla', 'Ratnapura City', 'Weligepola']
  },
  'Trincomalee': {
    popular: ['Trincomalee City', 'Kinniya'],
    all: ['Kinniya', 'Mutur', 'Seruvila', 'Thambalagamuwa', 'Trincomalee City']
  },
  'Vavuniya': {
    popular: ['Vavuniya City'],
    all: ['Vavuniya City', 'Vavuniya North', 'Vengalacheddikulam']
  }
};

const LocationSelectionModal = ({ isOpen, onClose, onSelect, isPostAdMode = false }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('Kandy');
  const [selectedArea, setSelectedArea] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const currentDistrictData = cityData[selectedDistrict] || { popular: [], all: [] };
  const filteredPopular = currentDistrictData.popular.filter(area =>
    area.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredAll = currentDistrictData.all.filter(area =>
    area.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort();

  return (
    <div className="loc-sel-overlay">
      <div className="loc-sel-modal">
        {/* Header Section */}
        <div className="loc-sel-header">
          <div className="header-info">
            <h2>Select City or Division</h2>
            <p>Choose a district and area to find relevant ads</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Stepper Section */}
        <div className="loc-sel-stepper">
          <div className="step active">
            <div className="step-number">1</div>
            <div className="step-text">
              <span className="step-title">Select District</span>
              <span className="step-desc">Choose a district</span>
            </div>
          </div>
          <ChevronRight size={20} className="step-arrow" />
          <div className={`step ${selectedArea ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-text">
              <span className="step-title">Select Area</span>
              <span className="step-desc">Choose an area or city</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="loc-sel-search-wrapper">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search for a city, district or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-shortcut">Ctrl + K</div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="loc-sel-main">
          {/* Districts Column */}
          <div className="districts-column">
            <div className="column-header">
              <MapPin size={18} />
              <span>Districts</span>
            </div>
            <div className="districts-list">
              {districts.map((district) => (
                <div
                  key={district}
                  className={`district-item ${selectedDistrict === district ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedDistrict(district);
                    setSelectedArea('');
                  }}
                >
                  <MapPin size={16} className="item-icon" />
                  <span className="item-name">{district}</span>
                  {selectedDistrict === district ? (
                    <div className="check-mark">✓</div>
                  ) : (
                    <ChevronRight size={14} className="item-arrow" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Areas Column */}
          <div className="areas-column">
            <div className="column-header">
              <MapPin size={18} className="header-icon-active" />
              <div className="header-title-group">
                <span className="header-title">{selectedDistrict}</span>
                <span className="header-subtitle">Province Territory</span>
              </div>
              <span className="area-count-badge">{currentDistrictData.all.length} areas</span>
            </div>

            <div className="areas-content">
              {/* Popular Areas */}
              <div className="popular-areas-section">
                <div className="section-title">
                  <span role="img" aria-label="fire">🔥</span> Popular Areas
                </div>
                <div className="popular-grid">
                  {filteredPopular.map((area, idx) => (
                    <div
                      key={area}
                      className={`popular-pill ${selectedArea === area ? 'selected' : ''}`}
                      onClick={() => setSelectedArea(area)}
                    >
                      {idx === 0 && <Building2 size={14} />}
                      {idx === 1 && <GraduationCap size={14} />}
                      {idx === 2 && <Accessibility size={14} />}
                      <span>{area}</span>
                    </div>
                  ))}
                  <div className="popular-nav-arrow">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>

              {/* All Areas List */}
              <div className="all-areas-section">
                <div className="section-header">
                  <span>All Areas (A-Z)</span>
                  <div className="sort-icons">
                    <span>A</span>
                    <span>Z</span>
                  </div>
                </div>
                <div className="areas-list">
                  {filteredAll.map((area) => (
                    <div
                      key={area}
                      className={`area-list-item ${selectedArea === area ? 'selected' : ''}`}
                      onClick={() => setSelectedArea(area)}
                    >
                      <MapPin size={16} className="item-icon" />
                      <span className="item-name">{area}</span>
                      <ChevronRight size={14} className="item-arrow" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="loc-sel-footer">
          <button className="reset-btn" onClick={() => {
            setSelectedDistrict('Kandy');
            setSelectedArea('');
            setSearchQuery('');
          }}>
            <RotateCcw size={16} />
            Reset all
          </button>

          <div className="footer-right">
            {!isPostAdMode && <span className="ad-count">1245 ads found</span>}
            <button className="show-posts-btn" onClick={() => {
              if (onSelect) onSelect({ district: selectedDistrict, city: selectedArea });
              onClose();
            }}>
              {isPostAdMode ? 'Select Location' : 'Show 1245 posts'}
              {!isPostAdMode && <ChevronRight size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSelectionModal;
