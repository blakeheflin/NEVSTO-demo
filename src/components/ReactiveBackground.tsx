import React from 'react';
import { motion } from 'framer-motion';
import { useBackground } from '../contexts/BackgroundContext';

export const ReactiveBackground: React.FC = () => {
  const { smoothX, smoothY } = useBackground();

  return (
    <div className="fixed inset-0 z-0">
      {/* Base layer with enhanced tech-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#1A1A1A]/95 to-[#000000] opacity-95" />
      
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,51,51,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,51,51,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }} />
      </div>

      {/* Dynamic data flow streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-[300px] w-[1px]"
            style={{
              left: `${(i + 1) * 4}%`,
              background: 'linear-gradient(180deg, rgba(255,51,51,0.4), transparent)',
            }}
            animate={{
              y: [-300, window.innerHeight],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Interactive gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at ${smoothX}px ${smoothY}px,
              rgba(255,51,51,0.15) 0%,
              rgba(255,51,51,0.08) 20%,
              rgba(255,51,51,0.02) 40%,
              transparent 60%
            )
          `,
        }}
      />

      {/* Subtle scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,51,51,0.03) 3px, transparent 3px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Section transition overlay */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent" />
    </div>
  );
};