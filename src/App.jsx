import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Opening from './components/Opening';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Couple from './components/Couple';
import DateReveal from './components/DateReveal';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import Closing from './components/Closing';

const Divider = ({ bg = 'transparent' }) => (
  <div style={{ 
    display: 'flex', justifyContent: 'center', alignItems: 'center', 
    gap: '10px', padding: '15px 0', backgroundColor: bg 
  }}>
    <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
    <span style={{ color: '#d4af37', fontSize: '1rem' }}>❁</span>
    <span style={{ color: '#d4af37', fontSize: '0.8rem' }}>✦</span>
    <span style={{ color: '#d4af37', fontSize: '1rem' }}>❁</span>
    <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
  </div>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="opening-bg">
      <AnimatePresence>
        {!isOpen && <Opening onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      {isOpen && (
        <main style={{ animation: 'contentFadeIn 1.5s ease', position: 'relative', zIndex: 2 }}>
          <Hero />
          <Invitation />
          
          <Divider bg="#f5ead6" />
          <DateReveal />
          
          <Countdown />
          
          <Divider bg="#fdfaf5" />
          <Couple />
          
          <Venue />
          <RSVP />
          <Closing />
        </main>
      )}
    </div>
  );
}

export default App;