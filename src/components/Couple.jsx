import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config';

const Couple = () => (
  <section style={{ padding: '40px 20px', backgroundColor: '#fdfaf5' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#d4af37', marginBottom: '30px' }}>The Couple</h2>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
      {/* Bride */}
      <motion.div whileInView={{opacity:1}} initial={{opacity:0}} style={{ textAlign: 'center' }}>
        <div className="monogram">M</div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '5px', color: '#4a3627' }}>{weddingData.bride.name}</h3>
        <p style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4af37', marginBottom: '10px' }}>{weddingData.bride.profession}</p>
        <p style={{ fontSize: '13px', color: '#6b5d4f' }}>{weddingData.bride.parents}</p>
      </motion.div>

      <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', color: '#d4af37' }}>&</span>

      {/* Groom */}
      <motion.div whileInView={{opacity:1}} initial={{opacity:0}} style={{ textAlign: 'center' }}>
        <div className="monogram">F</div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '5px', color: '#4a3627' }}>{weddingData.groom.name}</h3>
        <p style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4af37', marginBottom: '10px' }}>{weddingData.groom.profession}</p>
        <p style={{ fontSize: '13px', color: '#6b5d4f' }}>{weddingData.groom.parents}</p>
      </motion.div>
    </div>
  </section>
);

export default Couple;