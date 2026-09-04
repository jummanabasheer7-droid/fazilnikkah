import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2026-09-13T12:15:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ padding: '50px 20px', backgroundColor: '#fdfaf5', textAlign: 'center' }}>
      <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#6b5d4f', marginBottom: '30px', textTransform: 'uppercase' }}>Counting Down To Our Special Day</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
          <div key={label} style={{ textAlign: 'center', minWidth: '60px' }}>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '3rem', fontWeight: '600', color: '#d4af37', lineHeight: 1 }}>
              {Object.values(timeLeft)[index] || 0}
            </div>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#4a3627', textTransform: 'uppercase' }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;