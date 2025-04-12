import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#FF3333] to-[#FF6666] rounded-full shadow-lg shadow-[#FF3333]/20 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-8 w-96 bg-space-black/95 backdrop-blur-xl rounded-lg shadow-xl overflow-hidden border border-[#FF3333]/20 z-50"
          >
            <div className="bg-gradient-to-r from-[#FF3333] to-[#FF6666] p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold">Chat Support</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-96 p-4">
              <div className="text-center text-gray-400">
                How can we help you today?
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;