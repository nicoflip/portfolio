"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Download } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Contacts() {
  return (
    <section className="py-12 px-4 relative z-10 overflow-hidden">
      {/* Background glowing shapes */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
           variants={fadeInUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Contacter</span>
          </h2>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center"
        >
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Let's Connect.
            </h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Je suis activement à la recherche d'une <strong>entreprise pour mon alternance en 3ème année (Administrateur Système et Réseaux DevOps avec l'ENI)</strong>. 
              Pour toute proposition, opportunité, ou simplement pour échanger, n'hésitez pas à me contacter directement !
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:dimlinque@gmail.com" className="w-full md:w-auto flex items-center p-5 bg-black/40 border border-gray-800 hover:border-green-500/50 rounded-2xl group transition-all duration-300">
              <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mr-5 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <p className="text-gray-500 text-sm font-mono mb-1">EMAIL DIRECT</p>
                <p className="text-white font-medium group-hover:text-green-300 transition-colors">dimlinque@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/dimitri-linqu%C3%A9/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center p-5 bg-black/40 border border-gray-800 hover:border-blue-500/50 rounded-2xl group transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mr-5 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-gray-500 text-sm font-mono mb-1">LINKEDIN</p>
                <p className="text-white font-medium group-hover:text-blue-300 transition-colors">/in/dimitri-linqué</p>
              </div>
            </a>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="max-w-xl mx-auto border-t border-white/10 pt-10">
            <a 
              href="/cv.pdf" 
              download="CV_Dimitri_Linque.pdf"
              className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-5 bg-gradient-to-r from-green-600 to-cyan-500 text-black font-bold text-lg rounded-2xl hover:brightness-110 transition-all duration-300 shadow-[0_4px_30px_rgba(34,197,94,0.3)] group"
            >
              <Download className="w-6 h-6 mr-3 group-hover:-translate-y-1 transition-transform" />
              Télécharger mon CV
            </a>
            <p className="text-xs text-gray-500 mt-4 font-mono">
              (Format PDF, incluant mes expériences et compétences détaillées)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}