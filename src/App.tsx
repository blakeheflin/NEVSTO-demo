import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, ChevronDown, Cpu, Shield, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { BackgroundProvider, useBackground } from './contexts/BackgroundContext';
import { ReactiveBackground } from './components/ReactiveBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';

const features = [
  {
    icon: Brain,
    title: 'Neural Processing',
    description: 'Advanced AI algorithms that adapt and evolve with your business needs',
    gradient: 'from-[#FF3333]/20 via-[#FF4D4D]/20 to-transparent'
  },
  {
    icon: Cpu,
    title: 'Quantum Computing',
    description: 'Next-generation processing power for complex operations',
    gradient: 'from-[#FF4D4D]/20 via-[#FF6666]/20 to-transparent'
  },
  {
    icon: Shield,
    title: 'Cybernetic Security',
    description: 'Military-grade protection with AI-powered threat detection',
    gradient: 'from-[#FF6666]/20 via-[#FF3333]/20 to-transparent'
  },
  {
    icon: Zap,
    title: 'Instant Analytics',
    description: 'Real-time insights with predictive modeling capabilities',
    gradient: 'from-[#FF3333]/20 via-[#FF4D4D]/20 to-transparent'
  }
];

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { handleMouseMove } = useBackground();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-space-black flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <Brain className="w-16 h-16 text-[#FF3333]" />
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className="relative min-h-screen bg-space-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Navigation />
      <ReactiveBackground />

      <main className="relative z-10">
        <Hero />
        
        {/* Connecting Element */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#FF3333] to-transparent"
          animate={{
            scaleY: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          {/* Tech Grid Background */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4 opacity-5">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className="border border-[#FF3333]/20 rounded-lg backdrop-blur-sm"
              />
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="relative inline-block">
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(255,51,51,0.3)',
                      '0 0 40px rgba(255,102,102,0.6)',
                      '0 0 20px rgba(255,51,51,0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3333] via-[#FF4D4D] to-[#FF6666]">
                    Future
                  </span>
                  {" "}
                  <span className="text-white">of</span>
                  {" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6666] via-[#FF4D4D] to-[#FF3333]">
                    AI
                  </span>
                  {" "}
                  <span className="relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                      Innovation
                    </span>
                    <motion.span
                      className="absolute -inset-2 bg-gradient-to-r from-[#FF3333]/20 via-[#FF4D4D]/20 to-[#FF6666]/20 blur-lg -z-10"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </span>
                </motion.h2>
                
                {/* Decorative lines */}
                <motion.div
                  className="absolute -left-4 top-1/2 w-3 h-px bg-gradient-to-r from-[#FF3333] to-transparent"
                  animate={{
                    scaleX: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -right-4 top-1/2 w-3 h-px bg-gradient-to-l from-[#FF3333] to-transparent"
                  animate={{
                    scaleX: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="text-nev-metallic text-lg max-w-2xl mx-auto mt-6">
                Experience the next evolution of artificial intelligence with our cutting-edge solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className={`
                    relative h-full p-6 rounded-2xl
                    backdrop-blur-xl border border-white/10
                    bg-gradient-to-br ${feature.gradient}
                    transition-all duration-500
                    ${hoveredCard === index ? 'shadow-2xl shadow-[#FF3333]/20 scale-105' : 'shadow-lg'}
                  `}>
                    {/* Glow Effect */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#FF3333]/50 to-[#FF6666]/50 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <feature.icon className={`w-12 h-12 mb-4 transform transition-all duration-500
                        ${hoveredCard === index ? 'text-[#FF3333] scale-110 rotate-12' : 'text-[#FF6666]'}`} 
                      />
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>

                    {/* Interactive Particles */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#FF3333] rounded-full"
                            initial={{ x: "50%", y: "50%" }}
                            animate={{
                              x: `${50 + Math.cos(i * Math.PI * 0.4) * 50}%`,
                              y: `${50 + Math.sin(i * Math.PI * 0.4) * 50}%`,
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />

      <motion.div 
        className="fixed bottom-8 right-8 cursor-pointer"
        style={{ opacity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <BackgroundProvider>
      <AppContent />
    </BackgroundProvider>
  );
}

export default App;