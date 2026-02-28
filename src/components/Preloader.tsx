import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  
  const loadingTexts = [
    "SELECTING FABRICS",
    "STITCHING SEAMS",
    "DESIGNING SILHOUETTES",
    
  ];

  useEffect(() => {
    const duration = 2500; 
    
    // Change text every ~600ms
    const textTimer = setInterval(() => {
      setTextIndex(prev => (prev + 1) % loadingTexts.length);
    }, 600);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration + 1000);

    return () => {
      clearInterval(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#997B66] text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Decorative Corners */}
      <div className="absolute top-8 left-8">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
          <Star size={24} fill="white" />
        </motion.div>
      </div>
      <div className="absolute top-8 right-8 font-mono text-xs tracking-widest hidden sm:block">
        EST. 2020
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-xs tracking-widest hidden sm:block">
        LAGOS • ABJ • PARIS
      </div>
      <div className="absolute bottom-8 right-8">
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
          <Star size={24} fill="white" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4">
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-9xl font-display font-bold tracking-tighter text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            VIBEVAULT
          </motion.h1>
        </div>
        
        <motion.div 
          className="h-[1px] bg-white/30 w-full max-w-md mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="flex flex-col items-center gap-6 h-24 justify-center">
          <div className="h-10 overflow-hidden relative w-full text-center">
            <motion.p 
              key={textIndex}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="font-mono text-sm sm:text-base tracking-[0.3em] uppercase font-bold text-white inline-block"
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
