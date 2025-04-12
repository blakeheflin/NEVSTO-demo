import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    { name: 'Discover', href: '#products' },
    { name: 'Innovations', href: '#features' },
    { name: 'Our Story', href: '#about-us' },
    { name: 'Connect', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="w-8 h-8 text-[#FF3333]" />
            <motion.span
              className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF3333] via-[#FF4D4D] to-[#FF6666] tracking-wider"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,51,51,0.3)',
                  '0 0 40px rgba(255,102,102,0.6)',
                  '0 0 20px rgba(255,51,51,0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Nevsto
            </motion.span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-6 py-2 group"
                onHoverStart={() => setActiveItem(item.name)}
                onHoverEnd={() => setActiveItem('')}
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10 font-medium tracking-wide text-sm uppercase">
                  {item.name}
                </span>
                <motion.div
                  className="absolute inset-0 w-full h-full bg-[#FF3333]/10 rounded-full -z-10"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ 
                    scale: activeItem === item.name ? 1 : 0.95,
                    opacity: activeItem === item.name ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#FF3333] to-[#FF6666]"
                  initial={{ width: 0, x: '-50%' }}
                  animate={{ 
                    width: activeItem === item.name ? '80%' : '0%'
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;