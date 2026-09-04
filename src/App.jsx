import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Opening from './components/Opening';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Couple from './components/Couple';
import DateReveal from './components/DateReveal';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import Closing from './components/Closing';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Called when user clicks "OPEN INVITATION"
  const handleOpen = async () => {
    setIsOpen(true);
    
    // Start music
    if (audioRef.current) {
      audioRef.current.volume = 0.4; 
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
        // If autoplay fails (some browsers block it), we still set isPlaying to true 
        // so the button works when they click it manually.
        setIsPlaying(true);
      }
    }
  };

  // Toggle music
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="opening-bg">
      
      {/* Background Audio Element */}
      <audio ref={audioRef} src="/music1.mp3" loop preload="auto" />

      <AnimatePresence>
        {!isOpen && <Opening onOpen={handleOpen} />}
      </AnimatePresence>

      {isOpen && (
        <main style={{ animation: 'contentFadeIn 1.5s ease', position: 'relative', zIndex: 2 }}>
          <Hero />
          <Invitation />
          <DateReveal />
          <Countdown />
          <Couple />
          <Venue />
          <RSVP />
          <Closing />
        </main>
      )}

      {/* Floating Play/Pause Button */}
      {isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={toggleMusic}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(74, 54, 39, 0.9)',
            color: '#d4af37',
            border: '1px solid #d4af37',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 9999,
            boxShadow: '0 4px 15px rgba(74, 54, 39, 0.4)',
          }}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>
      )}
    </div>
  );
}

export default App;