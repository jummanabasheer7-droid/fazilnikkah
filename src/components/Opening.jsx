import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Opening = ({ onOpen }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    onOpen();
  };

  return (
    <motion.div 
      className="opening-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0, filter: 'blur(15px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100dvh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, textAlign: 'center', padding: '20px', overflow: 'hidden'
      }}
    >
      {/* Animated Islamic Pattern Background */}
      <div className="islamic-pattern" />

      {/* Floating Gold Dust */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 5}s`
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ fontFamily: 'Great Vibes', fontSize: '3rem', color: 'var(--gold)', marginBottom: '20px', zIndex: 1 }}
      >
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        style={{ fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--text-grey)', zIndex: 1 }}
      >
        In the name of Allah, the Most Gracious, the Most Merciful
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        style={{ fontSize: '14px', letterSpacing: '8px', margin: '50px 0 20px', color: 'var(--dark-gold)', zIndex: 1 }}
      >
        THE NIKKAH OF
      </motion.h2>

      <motion.h1
        className="gold-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        style={{ fontFamily: 'Cormorant Garamond', fontSize: '4.5rem', color: 'var(--gold)', lineHeight: 1, zIndex: 1 }}
      >
        Mehnaaz Banu
      </motion.h1>

      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        style={{ fontFamily: 'Cormorant Garamond', fontSize: '3rem', margin: '20px 0', color: 'var(--gold)', fontStyle: 'italic', zIndex: 1 }}
      >
        &
      </motion.span>

      <motion.h1
        className="gold-text"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3.8 }}
        style={{ fontFamily: 'Cormorant Garamond', fontSize: '4.5rem', color: 'var(--gold)', lineHeight: 1, zIndex: 1 }}
      >
        Faruk Moideen
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.5 }}
        style={{ fontSize: '18px', letterSpacing: '2px', marginTop: '30px', color: 'var(--dark-brown)', zIndex: 1 }}
      >
        13 • 09 • 2026
      </motion.p>

      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="luxury-btn"
          onClick={handleOpen}
          style={{ 
            marginTop: '25px', /* Moved UP from 60px to 25px */
            zIndex: 1,
            /* Enhanced Visibility */
            backgroundColor: 'var(--gold)',
            color: 'var(--ivory)',
            fontSize: '16px',
            letterSpacing: '6px',
            padding: '18px 45px',
            fontWeight: '600',
            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.5)',
            border: '2px solid var(--ivory)'
          }}
        >
          OPEN INVITATION
        </motion.button>
      )}
    </motion.div>
  );
};

export default Opening;