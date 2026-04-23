import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  User, Mail, MapPin, Lock, LayoutDashboard, Settings,
  LogOut, Eye, EyeOff, CheckCircle2, Home, X, MessageCircle, Phone
} from 'lucide-react';
import './AccountPage.css';

/* ── Logo (same as App.jsx) ── */
const LogoSmile = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ marginRight: '6px' }}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9.5 22V16.5h5V22" />
  </svg>
);

/* ── Logout Modal ── */
const LogoutModal = ({ isOpen, onConfirm, onCancel }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onCancel}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(15,23,42,0.45)',
            backdropFilter: 'blur(4px)',
            zIndex: 200
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 201,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem'
          }}
        >
          <div style={{
            background: '#fff', borderRadius: '20px',
            boxShadow: '0 24px 60px rgba(0,0,0,0.15)',
            width: '100%', maxWidth: '360px',
            padding: '2rem', position: 'relative'
          }}>
            <button onClick={onCancel} style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#94a3b8', padding: '4px', borderRadius: '50%',
              display: 'flex', alignItems: 'center'
            }}>
              <X size={18} />
            </button>

            <div style={{
              width: '62px', height: '62px', background: '#fff1f2',
              borderRadius: '16px', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <LogOut size={27} color="#f43f5e" />
            </div>

            <h3 style={{ textAlign: 'center', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0f172a' }}>
              Logout?
            </h3>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.75rem' }}>
              Are you sure you want to sign out?
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={onCancel} style={{
                flex: 1, padding: '0.875rem',
                background: '#f1f5f9', border: 'none', borderRadius: '14px',
                fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                color: '#334155', fontFamily: 'inherit'
              }}>Cancel</button>
              <button onClick={onConfirm} style={{
                flex: 1, padding: '0.875rem',
                background: '#f43f5e', border: 'none', borderRadius: '14px',
                fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                color: '#fff', fontFamily: 'inherit',
                boxShadow: '0 4px 14px rgba(244,63,94,0.3)'
              }}>Yes, Logout</button>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

/* ── Input ── */
const Input = ({ label, type = 'text', placeholder, icon: Icon }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginLeft: '2px' }}>{label}</label>
      <div style={{ position: 'relative' }}>
        {Icon && <Icon size={16} style={{
          position: 'absolute', left: '14px', top: '50%',
          transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none'
        }} />}
        <input
          type={isPassword && show ? 'text' : type}
          placeholder={placeholder}
          style={{
            width: '100%', padding: '0.8rem 1rem',
            paddingLeft: Icon ? '42px' : '1rem',
            paddingRight: isPassword ? '42px' : '1rem',
            background: '#f8fafc', border: '1.5px solid #e2e8f0',
            borderRadius: '12px', outline: 'none',
            fontSize: '0.9rem', fontWeight: 500, color: '#1e293b',
            fontFamily: 'inherit', boxSizing: 'border-box',
            transition: 'border-color 0.2s'
          }}
          onFocus={e => e.target.style.borderColor = '#119977'}
          onBlur={e => e.target.style.borderColor = '#e2e8f0'}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(!show)} style={{
            position: 'absolute', right: '12px', top: '50%',
            transform: 'translateY(-50%)', background: 'none',
            border: 'none', cursor: 'pointer', color: '#94a3b8',
            display: 'flex', alignItems: 'center'
          }}>
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  );
};

/* ── Main AccountPage ── */
const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('settings');
  const [saved, setSaved] = useState(false);
  const [pwSaved, setPwSaved] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('idamata_logged_in') === 'true';

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };
  const handlePwSave = () => { setPwSaved(true); setTimeout(() => setPwSaved(false), 2500); };
  const handleLogoutConfirm = () => {
    localStorage.removeItem('idamata_logged_in');
    navigate('/');
    window.location.reload();
  };

  const sidebarItems = [
    { id: 'ads', label: 'My Ads', icon: LayoutDashboard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  /* card style helper */
  const card = {
    background: '#fff', borderRadius: '16px',
    border: '1px solid #e9f0ed',
    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
    overflow: 'hidden'
  };

  const [userAds, setUserAds] = useState(() => {
    return JSON.parse(localStorage.getItem('idamata_user_ads') || '[]');
  });

  const handleDeleteAd = (id) => {
    if (window.confirm("Are you sure you want to delete this ad?")) {
      const updated = userAds.filter(ad => ad.id !== id);
      setUserAds(updated);
      localStorage.setItem('idamata_user_ads', JSON.stringify(updated));
    }
  };

  return (
    <>
      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={() => setShowLogoutModal(false)}
      />

      {/* ─── Navbar ─── */}
      <header className="header">
        <div className="container nav">
          <div className="nav-left">
            <Link to="/" className="logo">
              <LogoSmile size={28} />
              <span className="logo-text">idamata</span>
            </Link>
            <Link to="/all-ads" className="nav-all-ads">All ads</Link>
            <div className="lang-selector">
              <button className="lang-btn">සිංහල</button>
              <button className="lang-btn">தமிழ்</button>
            </div>
          </div>
          <div className="nav-right">
            <button className="nav-action-btn">
              <MessageCircle size={18} strokeWidth={2.5} />
              <span>Chat</span>
            </button>
            <Link to="/account" className="nav-action-btn" style={{ textDecoration: 'none' }}>
              <User size={18} strokeWidth={2.5} />
              <span>Account</span>
            </Link>
            {isLoggedIn ? (
              <Link to="/post-ad" className="post-ad-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontFamily: 'inherit', fontSize: '1rem' }}>
                POST YOUR PROPERTY
              </Link>
            ) : (
              <Link to="/" className="post-ad-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontFamily: 'inherit', fontSize: '1rem' }}>
                POST YOUR PROPERTY
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* ─── Page Body ─── */}
      <div className="account-page-wrapper">
        <div className="container">

          {/* Page title */}
          <div className="account-header">
            <h1>My Account</h1>
            <p>Manage your profile and security settings</p>
          </div>

          <div className="account-layout">

            {/* ─── Sidebar ─── */}
            <div className="account-card sidebar">
              {/* Avatar */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '2rem 1.5rem 1.5rem', borderBottom: '1px solid #f1f5f9'
              }}>
                <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #119977, #0f8668)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '1.4rem', fontWeight: 900,
                    boxShadow: '0 4px 16px rgba(17,153,119,0.3)'
                  }}>JD</div>
                  <span style={{
                    position: 'absolute', bottom: 2, right: 2,
                    width: '14px', height: '14px', background: '#22c55e',
                    borderRadius: '50%', border: '2px solid #fff'
                  }} />
                </div>
                <h2 style={{ fontWeight: 800, fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>John Doe</h2>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>john.doe@example.com</p>
              </div>

              {/* Nav items */}
              <div style={{ padding: '0.75rem' }}>
                {sidebarItems.map(({ id, label, icon: Icon }) => (
                  <button key={id} onClick={() => setActiveTab(id)} style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem 1rem', borderRadius: '12px', border: 'none',
                    cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 700,
                    marginBottom: '4px', textAlign: 'left',
                    background: activeTab === id ? '#119977' : 'transparent',
                    color: activeTab === id ? '#fff' : '#475569',
                    transition: 'all 0.2s'
                  }}>
                    <Icon size={17} />
                    {label}
                  </button>
                ))}
              </div>

              {/* Logout in sidebar */}
              <div style={{ padding: '0 0.75rem 0.75rem' }}>
                <button onClick={() => setShowLogoutModal(true)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.75rem 1rem', borderRadius: '12px', border: 'none',
                  cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 700,
                  background: 'transparent', color: '#f43f5e', transition: 'background 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fff1f2'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            </div>

            {/* ─── Main Content ─── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <AnimatePresence mode="wait">

                {activeTab === 'settings' ? (
                  <motion.div key="settings"
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                  >
                    {/* Change Details */}
                    <div className="account-card">
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '1.25rem 1.75rem', borderBottom: '1px solid #f1f5f9'
                      }}>
                        <div>
                          <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>Change Details</h3>
                          <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Update your profile information</p>
                        </div>
                        <div style={{
                          padding: '8px', background: '#f0fdf4', borderRadius: '10px',
                          display: 'flex', alignItems: 'center', color: '#119977'
                        }}>
                          <User size={20} />
                        </div>
                      </div>
                      <div className="form-grid">
                        <Input label="Email" type="email" placeholder="you@email.com" icon={Mail} />
                        <Input label="Name" type="text" placeholder="Full name" icon={User} />
                        <Input label="Phone Number" type="tel" placeholder="+94 7X XXX XXXX" icon={Phone} />
                      </div>
                      <div style={{ padding: '0 1.75rem 1.75rem' }}>
                        <button onClick={handleSave} style={{
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          padding: '0.8rem 1.75rem', borderRadius: '12px', border: 'none',
                          fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 700,
                          cursor: 'pointer', transition: 'all 0.25s',
                          background: saved ? '#22c55e' : '#119977',
                          color: '#fff',
                          boxShadow: saved ? '0 4px 14px rgba(34,197,94,0.3)' : '0 4px 14px rgba(17,153,119,0.25)'
                        }}>
                          {saved ? <><CheckCircle2 size={16} /> Saved!</> : 'Update Details'}
                        </button>
                      </div>
                    </div>

                    {/* Change Password */}
                    <div className="account-card">
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '1.25rem 1.75rem', borderBottom: '1px solid #f1f5f9'
                      }}>
                        <div>
                          <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>Change Password</h3>
                          <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Keep your account secure</p>
                        </div>
                        <div style={{
                          padding: '8px', background: '#fffbeb', borderRadius: '10px',
                          display: 'flex', alignItems: 'center', color: '#f59e0b'
                        }}>
                          <Lock size={20} />
                        </div>
                      </div>
                      <div className="form-grid">
                        <Input label="New Password" type="password" placeholder="••••••••" icon={Lock} />
                        <Input label="Confirm Password" type="password" placeholder="••••••••" icon={Lock} />
                      </div>
                      <div style={{ padding: '0 1.75rem 1.75rem' }}>
                        <button onClick={handlePwSave} style={{
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          padding: '0.8rem 1.75rem', borderRadius: '12px', border: 'none',
                          fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 700,
                          cursor: 'pointer', transition: 'all 0.25s',
                          background: pwSaved ? '#22c55e' : '#1e293b',
                          color: '#fff',
                          boxShadow: pwSaved ? '0 4px 14px rgba(34,197,94,0.3)' : '0 4px 14px rgba(30,41,59,0.15)'
                        }}>
                          {pwSaved ? <><CheckCircle2 size={16} /> Updated!</> : 'Change Password'}
                        </button>
                      </div>
                    </div>

                    {/* Logout Card */}
                    <div className="account-card">
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '1.25rem 1.75rem'
                      }}>
                        <div>
                          <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#1e293b', marginBottom: '2px' }}>Logout</h3>
                          <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Sign out of your account safely</p>
                        </div>
                        <button onClick={() => setShowLogoutModal(true)} style={{
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          padding: '0.7rem 1.25rem', borderRadius: '12px',
                          border: '1.5px solid #fecdd3', background: '#fff1f2',
                          color: '#f43f5e', fontWeight: 700, fontSize: '0.875rem',
                          cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s'
                        }}
                          onMouseEnter={e => e.currentTarget.style.background = '#ffe4e6'}
                          onMouseLeave={e => e.currentTarget.style.background = '#fff1f2'}
                        >
                          <LogOut size={16} /> Logout
                        </button>
                      </div>
                    </div>

                  </motion.div>

                ) : (
                  <motion.div key="ads"
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  >
                    {userAds.length > 0 ? (
                      userAds.map((ad) => (
                        <div key={ad.id} className="account-card account-ad-card">
                          <div className="account-ad-image">
                            <img src={ad.img} alt={ad.title} />
                          </div>
                          <div className="account-ad-details-container">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                              <h4 style={{ fontWeight: 800, fontSize: '1rem', color: '#1e293b', margin: 0 }}>{ad.title}</h4>
                              <div style={{
                                padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: 800,
                                background: ad.status === 'Under Review' ? '#fff7ed' : '#f0fdf4',
                                color: ad.status === 'Under Review' ? '#ea580c' : '#119977',
                                border: `1px solid ${ad.status === 'Under Review' ? '#ffedd5' : '#dcfce7'}`
                              }}>
                                {ad.status.toUpperCase()}
                              </div>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '8px' }}>{ad.location} • {ad.category}</p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <span style={{ fontWeight: 800, color: '#119977', fontSize: '1rem' }}>{ad.price}</span>
                              <div style={{ display: 'flex', gap: '8px' }}>
                                <button style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 600, color: '#475569', cursor: 'pointer' }}>Edit</button>
                                <button onClick={() => handleDeleteAd(ad.id)} style={{ background: 'none', border: '1px solid #fee2e2', borderRadius: '8px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 600, color: '#ef4444', cursor: 'pointer' }}>Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="account-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                        <div style={{
                          width: '60px', height: '60px', background: '#f1f5f9',
                          borderRadius: '14px', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem'
                        }}>
                          <Home size={28} color="#cbd5e1" />
                        </div>
                        <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1e293b', marginBottom: '0.5rem' }}>No ads yet</h3>
                        <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.75rem' }}>
                          Start selling your property by posting your first ad.
                        </p>
                        <Link to="/post-ad" style={{
                          display: 'inline-block', padding: '0.8rem 2rem',
                          background: '#119977', color: '#fff', borderRadius: '12px',
                          textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem',
                          boxShadow: '0 4px 14px rgba(17,153,119,0.25)'
                        }}>
                          Post Your First Ad
                        </Link>
                      </div>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;