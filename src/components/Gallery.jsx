import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config';

const Gallery = () => (
  <section style={{ padding: '80px 20px' }}>
    <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '40px' }}>Gallery</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', maxWidth: '800px', margin: '0 auto' }}>
      {weddingData.galleryImages.map((img, idx) => (
        <motion.div key={idx} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} style={{ aspectRatio: '1', overflow: 'hidden', background: 'var(--beige)' }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'var(--gold)' }}>
            {idx % 2 === 0 ? '🌹' : '✨'}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Gallery;