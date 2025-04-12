import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
    quote: 'Nevsto has revolutionized our workflow with their AI solutions. The results have been nothing short of extraordinary.'
  },
  {
    name: 'Michael Chen',
    role: 'Director of Innovation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
    quote: 'The level of automation and intelligence that Nevsto brings to the table is unmatched in the industry.'
  },
  {
    name: 'Emma Davis',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
    quote: 'Implementing Nevsto\'s AI solutions has resulted in a 300% increase in our operational efficiency.'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full mb-6 object-cover"
            />
            <blockquote className="text-2xl font-light italic mb-6 max-w-2xl">
              "{testimonials[current].quote}"
            </blockquote>
            <cite className="not-italic">
              <div className="font-semibold">{testimonials[current].name}</div>
              <div className="text-purple-400">{testimonials[current].role}</div>
            </cite>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-purple-400' : 'bg-gray-600'
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;