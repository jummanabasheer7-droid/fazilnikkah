import React from 'react';
import { motion } from 'framer-motion';

const Invitation = () => (
  <section style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#fdfaf5' }}>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      style={{ maxWidth: '600px', margin: '0 auto' }}
    >
      <h3 style={{ fontFamily: 'Great Vibes', fontSize: '2.5rem', color: '#d4af37', marginBottom: '15px' }}>You are Invited</h3>
      <p style={{ fontSize: '16px', lineHeight: '1.8', fontFamily: 'Cormorant Garamond', color: '#4a3627' }}>
        With hearts full of gratitude and joy, we invite you to celebrate the union of our beloved children as they begin their journey of a lifetime together.
      </p>
    </motion.div>
  </section>
);

export default Invitation;