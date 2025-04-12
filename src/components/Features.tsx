import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Learning',
    description: 'Self-improving algorithms that adapt to your business needs'
  },
  {
    icon: Cpu,
    title: 'Automated Processing',
    description: 'Streamline operations with intelligent automation'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise-grade protection for your sensitive data'
  },
  {
    icon: Zap,
    title: 'Real-time Analytics',
    description: 'Instant insights for informed decision making'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative p-6 bg-white/5 rounded-xl backdrop-blur-lg hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;