import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config';

const Venue = () => {
  // Link for the embedded map (Works without an API key)
  const embedMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    weddingData.venue.name + ' ' + weddingData.venue.address
  )}&output=embed`;

  return (
    <section style={{ padding: '80px 20px', textAlign: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '20px' }}
      >
        Venue
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ fontSize: '14px', letterSpacing: '2px', color: 'var(--text-grey)', marginBottom: '40px' }}
      >
        Join us at
      </motion.p>

      {/* Interactive Embedded Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          maxWidth: '600px', 
          margin: '0 auto 30px', 
          padding: '10px', 
          background: 'var(--ivory)', 
          boxShadow: '0 20px 50px rgba(74,54,39,0.15)',
          borderRadius: '10px'
        }}
      >
        <iframe
          title="Venue Location Map"
          src={embedMapUrl}
          width="100%"
          height="300"
          style={{ border: '1px solid var(--gold)', borderRadius: '8px', display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Venue Details */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', marginBottom: '10px' }}>
          {weddingData.venue.name}
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-grey)', maxWidth: '400px', margin: '0 auto' }}>
          {weddingData.venue.address}
        </p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <a href={weddingData.venue.mapLink} target="_blank" rel="noopener noreferrer" className="luxury-btn">
          GET DIRECTIONS
        </a>
      </div>
    </section>
  );
};

export default Venue;