import React, { createContext, useContext, useCallback, useState } from 'react';
import { useSpring, useMotionValue } from 'framer-motion';

interface BackgroundContextType {
  mouseX: any; // MotionValue type
  mouseY: any; // MotionValue type
  smoothX: any; // MotionValue type
  smoothY: any; // MotionValue type
  handleMouseMove: (e: React.MouseEvent | MouseEvent) => void;
  particles: Array<{ x: number; y: number; size: number }>;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const [particles] = useState(() => 
    Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
    }))
  );

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  }, [mouseX, mouseY]);

  return (
    <BackgroundContext.Provider value={{
      mouseX,
      mouseY,
      smoothX,
      smoothY,
      handleMouseMove,
      particles
    }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};