import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useBackground } from '../contexts/BackgroundContext';

const Hero = () => {
  const { mouseX, mouseY } = useBackground();
  const glowControls = useAnimationControls();
  const [isHovered, setIsHovered] = React.useState(false);

  const words = [
    'Welcome',
    'to',
    {
      text: 'NEVSTO',
      gradient: 'from-[#FF3333] via-[#E62626] to-[#CC1919]',
      glow: 'drop-shadow-[0_0_15px_rgba(255,51,51,0.6)]'
    },
    'where',
    {
      text: 'AI',
      gradient: 'from-[#FF6666] via-[#FF4D4D] to-[#FF3333]',
      glow: 'drop-shadow-[0_0_15px_rgba(255,102,102,0.6)]'
    },
    'automation',
    'meets',
    'unlimited',
    'innovation'
  ];

  const DataStreamEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[#FF3333] to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20%',
          }}
          animate={{
            y: ['0%', '120%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );

  const NeuralNetworkEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#FF4D4D]/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: mouseX.get() * 50 - 25,
            y: mouseY.get() * 50 - 25,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );

  const HolographicEffect = () => (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#FF3333]/10 via-transparent to-[#FF6666]/10"
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-black"
    >
      <DataStreamEffect />
      <NeuralNetworkEffect />
      <HolographicEffect />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 mb-8">
          {words.map((word, index) => (
            <motion.span
              key={typeof word === 'string' ? word : word.text}
              className="inline-block text-4xl md:text-6xl font-bold relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              onHoverStart={() => {
                if (typeof word !== 'string') {
                  setIsHovered(true);
                  glowControls.start({
                    textShadow: [
                      '0 0 20px rgba(255,51,51,0.6)',
                      '0 0 40px rgba(255,102,102,0.6)',
                      '0 0 20px rgba(255,51,51,0.6)',
                    ],
                    transition: { duration: 1.5, repeat: Infinity }
                  });
                }
              }}
              onHoverEnd={() => {
                setIsHovered(false);
                glowControls.stop();
              }}
            >
              <span className={`
                relative z-10 bg-clip-text text-transparent tracking-wider
                ${typeof word === 'string' 
                  ? 'bg-gradient-to-r from-space-silver to-nev-metallic'
                  : `bg-gradient-to-r ${word.gradient} animate-glow ${word.glow} font-extrabold tracking-widest`}
              `}>
                {typeof word === 'string' ? word : word.text}
              </span>
              
              {/* Interactive glow effect */}
              {typeof word !== 'string' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF3333]/20 via-transparent to-[#FF6666]/20 blur-xl"
                  animate={glowControls}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              )}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="text-xl md:text-2xl text-nev-metallic mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Harness the power of AI to transform your business operations effortlessly
        </motion.p>

        <motion.button
          className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#FF3333] to-[#FF6666] rounded-full overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Explore Innovations
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF3333]/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;