import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Globe, Award, Rocket, Sparkles } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    icon: Brain,
    title: 'Company Founded',
    description: 'Nevsto begins its journey in AI innovation',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    year: '2021',
    icon: Rocket,
    title: 'First AI Product',
    description: 'Launch of our flagship automation platform',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    year: '2022',
    icon: Globe,
    title: 'Global Expansion',
    description: 'Opening offices in major tech hubs worldwide',
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    year: '2023',
    icon: Award,
    title: 'Industry Recognition',
    description: 'Named as top AI innovator by leading analysts',
    color: 'from-emerald-500/20 to-cyan-500/20'
  },
  {
    year: '2024',
    icon: Sparkles,
    title: 'Next Generation AI',
    description: 'Revolutionary breakthroughs in AI capabilities',
    color: 'from-pink-500/20 to-purple-500/20'
  }
];

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={milestone.year}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`
                  relative h-full p-6 rounded-2xl overflow-hidden
                  backdrop-blur-xl border border-white/10
                  bg-gradient-to-br ${milestone.color}
                  transition-all duration-500 ease-out
                  ${hoveredIndex === index ? 'shadow-2xl shadow-purple-500/20' : 'shadow-lg'}
                `}>
                  {/* Reflection effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center justify-between mb-4"
                      animate={hoveredIndex === index ? { y: -5 } : { y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        {milestone.year}
                      </span>
                      <Icon className={`w-8 h-8 transform transition-all duration-500
                        ${hoveredIndex === index ? 'scale-110 rotate-12' : ''}`} 
                      />
                    </motion.div>
                    
                    <motion.h3
                      className="text-xl font-semibold mb-2"
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-300"
                      initial={{ opacity: 0.8 }}
                      animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.description}
                    </motion.p>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-purple-400"
                      initial={{ opacity: 0.3 }}
                      animate={hoveredIndex === index ? { opacity: 1, scale: 1.2 } : { opacity: 0.3, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;