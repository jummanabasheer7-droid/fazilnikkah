import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config';

const Hero = () => (
  <section style={{ 
    minHeight: '80vh', /* Reduced from 100vh to 80vh */
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center', 
    padding: '100px 20px 180px', /* Lowered top padding, raised bottom for flowers */
    background: 'radial-gradient(circle at center, #ffffff 0%, #f5ead6 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    
    {/* Top Floral Decoration */}
    <div className="floral-border-top" />

    {/* Bottom Floral Decoration */}
    <div className="floral-border-bottom" />

    {/* Bismillah */}
    <motion.p 
      initial={{ opacity: 0, scale: 0.8 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      style={{ fontFamily: 'Great Vibes', fontSize: '2rem', color: '#d4af37', marginBottom: '10px' }}
    >
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </motion.p>

    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} style={{ fontSize: '11px', letterSpacing: '4px', marginBottom: '20px', color: '#4a3627' }}>TOGETHER WITH THEIR FAMILIES</motion.p>
    
    <motion.h1 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} style={{ fontFamily: 'Cormorant Garamond', fontSize: '3.5rem', color: '#d4af37', marginBottom: '5px', lineHeight: 1.2 }}>{weddingData.bride.name}</motion.h1>
    
    <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.5rem', color: '#d4af37', margin: '10px 0', fontStyle: 'italic' }}>&</span>
    
    <motion.h1 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} style={{ fontFamily: 'Cormorant Garamond', fontSize: '3.5rem', color: '#d4af37', marginBottom: '15px', lineHeight: 1.2 }}>{weddingData.groom.name}</motion.h1>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', color: '#d4af37' }}>
      <span>✦</span><span>✦</span><span>✦</span>
    </div>

    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} style={{ fontSize: '16px', color: '#4a3627', letterSpacing: '2px' }}>
      {weddingData.date}
    </motion.p>

    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} style={{ fontSize: '12px', color: '#6b5d4f', marginTop: '10px' }}>
      {weddingData.time}
    </motion.p>
    
  </section>
);

export default Hero;