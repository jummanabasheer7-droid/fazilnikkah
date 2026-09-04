import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config';

const Closing = () => (
  <section style={{ 
    padding: '50px 20px', 
    textAlign: 'center', 
    backgroundColor: '#4a3627', 
    color: '#fdfaf5'
  }}>
    <motion.div whileInView={{opacity:1}} initial={{opacity:0}}>
      <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', fontStyle: 'italic', color: '#d4af37', marginBottom: '10px' }}>With Love,</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '3rem', marginBottom: '20px' }}>
        {weddingData.bride.name.split(' ')[0]} & {weddingData.groom.name.split(' ')[0]}
      </h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '1.2rem', color: '#d4af37', marginBottom: '10px' }}>
        <span>✦</span><span>✦</span><span>✦</span>
      </div>
      
      <p style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#e8d5b5' }}>
        We await your presence
      </p>
    </motion.div>
  </section>
);

export default Closing;