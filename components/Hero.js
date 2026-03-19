"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center">
      {/* Decorative center ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-green-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10 px-4 mt-10 md:mt-16 w-full max-w-5xl"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
          className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500/20 to-black border border-green-500/40 rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(34,197,94,0.2)] backdrop-blur-md relative group cursor-default"
        >
          {/* Inner rotating gradient ring */}
          <div className="absolute inset-0 rounded-3xl border border-green-400/0 group-hover:border-green-400/50 transition-colors duration-500" />
          <ShieldCheck className="w-12 h-12 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold mb-6 tracking-tighter leading-none"
        >
          <span className="text-white drop-shadow-xl inline-block">DIMITRI&nbsp;</span>
          <br className="md:hidden" />
          <span className="bg-gradient-to-r from-green-400 via-green-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.3)] inline-block">
            LINQUÉ
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-12 md:w-24 bg-gradient-to-l from-green-500/50 to-transparent" />
          <p className="text-lg md:text-2xl text-gray-300 font-light tracking-[0.2em] uppercase">
            BTS SIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-bold">SISR</span>
          </p>
          <div className="h-px w-12 md:w-24 bg-gradient-to-r from-green-500/50 to-transparent" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="inline-flex items-center gap-4 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-black/40 border border-green-500/30 backdrop-blur-xl mb-16 shadow-[0_4px_30px_rgba(0,0,0,0.5)] cursor-default hover:border-green-400/60 hover:bg-black/60 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Animated background highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-transparent -translate-x-full" />
          
          <span className="relative flex h-3 w-3">
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
          </span>
          <span className="text-xs md:text-sm lg:text-base text-gray-200 font-mono tracking-wide relative z-10">
            Recherche Alternance DevOps / SysAdmin <span className="text-cyan-400 font-bold">(3ème année ENI)</span>
          </span>
        </motion.div>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-10 w-full flex flex-col justify-center items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">Découvrir</span>
        <ChevronDown className="w-6 h-6 text-green-400/50" />
      </motion.div>
    </section>
  );
}