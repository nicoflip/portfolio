"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Phone, ChevronUp } from 'lucide-react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 glass-card bg-black/40 border-green-500/30 text-green-400 rounded-2xl shadow-[0_4px_30px_rgba(34,197,94,0.15)] hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 z-50 backdrop-blur-md"
          aria-label="Remonter en haut"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="py-12 px-4 relative z-10 overflow-hidden">
        {/* Top border glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Dimitri Linqué</h3>
              <p className="text-gray-400 font-light">BTS SIO SISR • Future Cyber Security Expert</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <motion.a
                href="mailto:dimlinque@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass rounded-xl hover:border-green-400/50 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/dimitri-linqu%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass rounded-xl hover:border-blue-400/50 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-8 mt-8 border-t border-white/5"
          >
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Dimitri Linqué. Tous droits réservés. 
            </p>
          </motion.div>
        </div>
      </footer>
      
      <ScrollToTopButton />
    </>
  );
}