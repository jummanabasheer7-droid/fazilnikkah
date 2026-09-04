import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DateReveal = () => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2; 
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      
      // Draw the initial "scratch" layer
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#4a3627'; // Dark brown
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Add subtle gold speckles (like real metallic scratch cards)
      ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
      for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.offsetWidth, Math.random() * canvas.offsetHeight, Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // Hard-edge erasing logic
  const handleDraw = (e) => {
    if (isRevealed) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    // GPay Rewards Style: Hard, thick brush
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 40; // Thick brush size to clear instantly
    ctx.beginPath();
    ctx.moveTo(x, y); // Start line
    ctx.lineTo(x + 0.1, y + 0.1); // Draw a tiny line to force hard edge
    ctx.stroke();
    
    // Also draw a solid circle to completely erase the exact touch point instantly
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    checkScratchProgress();
  };

  // Check if 75% is scratched
  const checkScratchProgress = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Only check every few frames for performance
    if (Math.random() > 0.2) return;

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    let total = pixels.length / 4;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++;
    }

    const percentage = (transparent / total) * 100;
    if (percentage > 75) {
      setIsRevealed(true);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleDraw(e);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1 || e.touches.length > 0) {
      handleDraw(e);
    }
  };

  return (
    <section style={{ 
      padding: '50px 20px', 
      textAlign: 'center', 
      backgroundColor: '#f5ead6', 
      position: 'relative'
    }}>
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        style={{ fontSize: '12px', letterSpacing: '4px', color: '#6b5d4f', marginBottom: '20px', textTransform: 'uppercase' }}
      >
        Save The Date
      </motion.p>

      {/* The Scratch Card Container */}
      <div 
        style={{ 
          position: 'relative', 
          maxWidth: '400px', 
          height: '150px', 
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(74, 54, 39, 0.3)'
        }}
      >
        {/* The underlying Date */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          background: 'linear-gradient(135deg, #ffffff, #f5ead6)'
        }}>
          <h2 style={{ 
            fontSize: '4rem', 
            fontWeight: '600', 
            color: '#d4af37', 
            fontFamily: 'Cormorant Garamond', 
            lineHeight: 1,
          }}>
            13.09.2026
          </h2>
        </div>

        {/* The Scratch Layer (Canvas) */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              cursor: 'crosshair',
              touchAction: 'none'
            }}
          />
        )}
        
        {/* Text overlay */}
        {!isRevealed && (
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            pointerEvents: 'none',
            color: '#e8d5b5',
            fontSize: '14px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontFamily: 'Cormorant Garamond',
            fontStyle: 'italic',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)' // Darker shadow for contrast
          }}>
            ✦ Scratch to Reveal ✦
          </div>
        )}
      </div>
    </section>
  );
};

export default DateReveal;