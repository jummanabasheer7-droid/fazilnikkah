import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config';

const RSVP = () => {
  const message = `Hi, I would like to confirm my attendance for the Nikkah of ${weddingData.bride.name} & ${weddingData.groom.name} on ${weddingData.date}.`;
  const whatsappLink = `https://wa.me/${weddingData.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'var(--champagne)' }}>
      <motion.h2 whileInView={{opacity:1}} initial={{opacity:0}} style={{ fontSize: '3rem', marginBottom: '20px' }}>RSVP</motion.h2>
      <motion.p whileInView={{opacity:1}} initial={{opacity:0}} style={{ maxWidth: '400px', margin: '0 auto 40px', color: 'var(--text-grey)', lineHeight: '1.6' }}>We would be honored to have you join us. Kindly confirm your presence.</motion.p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="luxury-btn">CONFIRM VIA WHATSAPP</a>
    </section>
  );
};

export default RSVP;