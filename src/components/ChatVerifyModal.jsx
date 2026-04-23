import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Phone, MessageCircle, ShieldCheck, ArrowLeft } from 'lucide-react';

const ChatVerifyModal = ({ isOpen, onClose, onVerified }) => {
    const [step, setStep] = useState('phone'); // 'phone' | 'otp' | 'success'
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const otpRefs = useRef([]);

    const resetModal = () => {
        setStep('phone');
        setPhone('');
        setOtp(['', '', '', '', '', '']);
        setError('');
        setLoading(false);
    };

    const handleClose = () => {
        resetModal();
        onClose();
    };

    const handleSendOtp = () => {
        if (phone.length < 9) {
            setError('Please enter a valid phone number.');
            return;
        }
        setError('');
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('otp');
        }, 1200);
    };

    const handleOtpChange = (val, idx) => {
        if (!/^\d*$/.test(val)) return;
        const next = [...otp];
        next[idx] = val.slice(-1);
        setOtp(next);
        if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
    };

    const handleOtpKeyDown = (e, idx) => {
        if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
            otpRefs.current[idx - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const code = otp.join('');
        if (code.length < 6) {
            setError('Please enter the full 6-digit code.');
            return;
        }
        setError('');
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('success');
        }, 1500);
    };

    const handleStartChat = () => {
        handleClose();
        if (onVerified) onVerified();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={handleClose}
                        style={{
                            position: 'fixed', inset: 0,
                            background: 'rgba(10,20,30,0.5)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 9999
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.93, y: 28 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 28 }}
                        transition={{ type: 'spring', damping: 28, stiffness: 340 }}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 10000,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '1rem'
                        }}
                    >
                        <div style={{
                            background: '#fff', borderRadius: '24px',
                            boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
                            width: '100%', maxWidth: '420px',
                            padding: '2.5rem 2rem 2rem',
                            position: 'relative', overflow: 'hidden'
                        }}>

                            {/* Green top accent */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0,
                                height: '5px',
                                background: 'linear-gradient(90deg, #119977, #0f8668)'
                            }} />

                            {/* Close */}
                            <button onClick={handleClose} style={{
                                position: 'absolute', top: '1.25rem', right: '1.25rem',
                                background: '#f1f5f9', border: 'none', cursor: 'pointer',
                                width: '34px', height: '34px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#64748b'
                            }}>
                                <X size={17} />
                            </button>

                            <AnimatePresence mode="wait">

                                {/* ── Step 1: Phone ── */}
                                {step === 'phone' && (
                                    <motion.div
                                        key="phone"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.22 }}
                                    >
                                        {/* Icon */}
                                        <div style={{
                                            width: '64px', height: '64px',
                                            background: 'linear-gradient(135deg, #e8f8f3, #d1f0e6)',
                                            borderRadius: '18px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            margin: '0 auto 1.5rem'
                                        }}>
                                            <MessageCircle size={30} color="#119977" />
                                        </div>

                                        <h2 style={{
                                            textAlign: 'center', fontWeight: 800,
                                            fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.5rem'
                                        }}>
                                            Enter Phone Number
                                        </h2>
                                        <p style={{
                                            textAlign: 'center', fontSize: '0.875rem',
                                            color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6
                                        }}>
                                            Please enter your phone number to verify<br />before starting the chat.
                                        </p>

                                        {/* Phone input */}
                                        <div style={{ marginBottom: '1.25rem' }}>
                                            <label style={{
                                                display: 'block', fontSize: '0.8rem',
                                                fontWeight: 700, color: '#475569', marginBottom: '8px'
                                            }}>
                                                Phone Number
                                            </label>
                                            <div style={{ position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute', left: '14px', top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    display: 'flex', alignItems: 'center', gap: '6px',
                                                    borderRight: '1.5px solid #e2e8f0', paddingRight: '10px',
                                                    color: '#475569', fontSize: '0.9rem', fontWeight: 700
                                                }}>
                                                    <Phone size={15} color="#119977" />
                                                    +94
                                                </div>
                                                <input
                                                    type="tel"
                                                    placeholder="7X XXX XXXX"
                                                    value={phone}
                                                    onChange={e => { setPhone(e.target.value.replace(/\D/g, '')); setError(''); }}
                                                    maxLength={10}
                                                    style={{
                                                        width: '100%', padding: '0.875rem 1rem 0.875rem 80px',
                                                        border: '1.5px solid #e2e8f0', borderRadius: '14px',
                                                        fontSize: '1rem', fontWeight: 600, color: '#0f172a',
                                                        outline: 'none', fontFamily: 'inherit',
                                                        boxSizing: 'border-box',
                                                        background: '#f8fafc',
                                                        letterSpacing: '1px'
                                                    }}
                                                    onFocus={e => e.target.style.borderColor = '#119977'}
                                                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                                                    onKeyDown={e => e.key === 'Enter' && handleSendOtp()}
                                                />
                                            </div>
                                            {error && (
                                                <p style={{ color: '#f43f5e', fontSize: '0.8rem', marginTop: '6px', fontWeight: 600 }}>
                                                    {error}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            onClick={handleSendOtp}
                                            disabled={loading}
                                            style={{
                                                width: '100%', padding: '0.9rem',
                                                background: loading ? '#94a3b8' : '#119977',
                                                border: 'none', borderRadius: '14px',
                                                color: '#fff', fontWeight: 800, fontSize: '0.95rem',
                                                cursor: loading ? 'not-allowed' : 'pointer',
                                                fontFamily: 'inherit',
                                                boxShadow: loading ? 'none' : '0 4px 16px rgba(17,153,119,0.3)',
                                                transition: 'all 0.2s',
                                                display: 'flex', alignItems: 'center',
                                                justifyContent: 'center', gap: '8px'
                                            }}
                                        >
                                            {loading ? (
                                                <>
                                                    <span style={{
                                                        width: '16px', height: '16px',
                                                        border: '2px solid rgba(255,255,255,0.4)',
                                                        borderTopColor: '#fff',
                                                        borderRadius: '50%',
                                                        display: 'inline-block',
                                                        animation: 'spin 0.7s linear infinite'
                                                    }} />
                                                    Sending...
                                                </>
                                            ) : 'Send OTP'}
                                        </button>

                                        <p style={{
                                            textAlign: 'center', fontSize: '0.78rem',
                                            color: '#94a3b8', marginTop: '1rem'
                                        }}>
                                            We'll send a 6-digit code to verify your number.
                                        </p>
                                    </motion.div>
                                )}

                                {/* ── Step 2: OTP ── */}
                                {step === 'otp' && (
                                    <motion.div
                                        key="otp"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.22 }}
                                    >
                                        {/* Back */}
                                        <button onClick={() => { setStep('phone'); setOtp(['', '', '', '', '', '']); setError(''); }}
                                            style={{
                                                background: 'none', border: 'none', cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                color: '#64748b', fontSize: '0.85rem', fontWeight: 600,
                                                marginBottom: '1.5rem', padding: 0, fontFamily: 'inherit'
                                            }}>
                                            <ArrowLeft size={16} /> Back
                                        </button>

                                        {/* Icon */}
                                        <div style={{
                                            width: '64px', height: '64px',
                                            background: 'linear-gradient(135deg, #e8f8f3, #d1f0e6)',
                                            borderRadius: '18px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            margin: '0 auto 1.5rem'
                                        }}>
                                            <ShieldCheck size={30} color="#119977" />
                                        </div>

                                        <h2 style={{
                                            textAlign: 'center', fontWeight: 800,
                                            fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.5rem'
                                        }}>
                                            Verify Your Number
                                        </h2>
                                        <p style={{
                                            textAlign: 'center', fontSize: '0.875rem',
                                            color: '#94a3b8', marginBottom: '0.5rem', lineHeight: 1.6
                                        }}>
                                            Enter the 6-digit code sent to
                                        </p>
                                        <p style={{
                                            textAlign: 'center', fontWeight: 800,
                                            fontSize: '1rem', color: '#119977', marginBottom: '2rem'
                                        }}>
                                            +94 {phone}
                                        </p>

                                        {/* OTP boxes */}
                                        <div style={{
                                            display: 'flex', gap: '10px',
                                            justifyContent: 'center', marginBottom: '1.5rem'
                                        }}>
                                            {otp.map((digit, idx) => (
                                                <input
                                                    key={idx}
                                                    ref={el => otpRefs.current[idx] = el}
                                                    type="text"
                                                    inputMode="numeric"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={e => handleOtpChange(e.target.value, idx)}
                                                    onKeyDown={e => handleOtpKeyDown(e, idx)}
                                                    style={{
                                                        width: '48px', height: '56px',
                                                        textAlign: 'center', fontSize: '1.4rem', fontWeight: 800,
                                                        border: `2px solid ${digit ? '#119977' : '#e2e8f0'}`,
                                                        borderRadius: '12px', outline: 'none',
                                                        color: '#0f172a', background: digit ? '#f0fdf8' : '#f8fafc',
                                                        fontFamily: 'inherit', transition: 'all 0.15s'
                                                    }}
                                                    onFocus={e => e.target.style.borderColor = '#119977'}
                                                    onBlur={e => e.target.style.borderColor = otp[idx] ? '#119977' : '#e2e8f0'}
                                                />
                                            ))}
                                        </div>

                                        {error && (
                                            <p style={{
                                                color: '#f43f5e', fontSize: '0.8rem',
                                                textAlign: 'center', marginBottom: '1rem', fontWeight: 600
                                            }}>
                                                {error}
                                            </p>
                                        )}

                                        <button
                                            onClick={handleVerify}
                                            disabled={loading}
                                            style={{
                                                width: '100%', padding: '0.9rem',
                                                background: loading ? '#94a3b8' : '#119977',
                                                border: 'none', borderRadius: '14px',
                                                color: '#fff', fontWeight: 800, fontSize: '0.95rem',
                                                cursor: loading ? 'not-allowed' : 'pointer',
                                                fontFamily: 'inherit',
                                                boxShadow: loading ? 'none' : '0 4px 16px rgba(17,153,119,0.3)',
                                                transition: 'all 0.2s',
                                                display: 'flex', alignItems: 'center',
                                                justifyContent: 'center', gap: '8px'
                                            }}
                                        >
                                            {loading ? (
                                                <>
                                                    <span style={{
                                                        width: '16px', height: '16px',
                                                        border: '2px solid rgba(255,255,255,0.4)',
                                                        borderTopColor: '#fff', borderRadius: '50%',
                                                        display: 'inline-block',
                                                        animation: 'spin 0.7s linear infinite'
                                                    }} />
                                                    Verifying...
                                                </>
                                            ) : 'Verify & Start Chat'}
                                        </button>

                                        <p style={{
                                            textAlign: 'center', fontSize: '0.78rem',
                                            color: '#94a3b8', marginTop: '1rem'
                                        }}>
                                            Didn't receive the code?{' '}
                                            <button onClick={handleSendOtp} style={{
                                                background: 'none', border: 'none', cursor: 'pointer',
                                                color: '#119977', fontWeight: 700, fontSize: '0.78rem',
                                                fontFamily: 'inherit', padding: 0
                                            }}>
                                                Resend
                                            </button>
                                        </p>
                                    </motion.div>
                                )}

                                {/* ── Step 3: Success ── */}
                                {step === 'success' && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ textAlign: 'center' }}
                                    >
                                        {/* Success Icon */}
                                        <div style={{
                                            width: '90px', height: '90px',
                                            background: '#e8f8f3',
                                            borderRadius: '50%',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            margin: '0 auto 1.5rem',
                                            border: '4px solid #fff',
                                            boxShadow: '0 8px 20px rgba(17,153,119,0.15)'
                                        }}>
                                            <ShieldCheck size={48} color="#119977" />
                                        </div>

                                        <h2 style={{
                                            fontWeight: 800, fontSize: '1.6rem',
                                            color: '#0f172a', marginBottom: '0.75rem'
                                        }}>
                                            Verified Successfully!
                                        </h2>
                                        <p style={{
                                            fontSize: '1rem', color: '#94a3b8',
                                            marginBottom: '2.5rem', lineHeight: 1.5
                                        }}>
                                            Your phone number has been verified.<br />You can now start chatting with the seller.
                                        </p>

                                        <button
                                            onClick={handleStartChat}
                                            style={{
                                                width: '100%', padding: '1.1rem',
                                                background: '#119977',
                                                border: 'none', borderRadius: '16px',
                                                color: '#fff', fontWeight: 800, fontSize: '1.1rem',
                                                cursor: 'pointer', fontFamily: 'inherit',
                                                boxShadow: '0 10px 25px rgba(17,153,119,0.3)',
                                                transition: 'all 0.2s',
                                                display: 'flex', alignItems: 'center',
                                                justifyContent: 'center', gap: '10px'
                                            }}
                                        >
                                            <MessageCircle size={22} />
                                            Start Chatting
                                        </button>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Spinner CSS */}
                    <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
                </>
            )}
        </AnimatePresence>
    );
};

export default ChatVerifyModal;