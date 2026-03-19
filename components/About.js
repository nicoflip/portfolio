"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Server, Shield, Database, Layout } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const SkillCard = ({ title, icon: Icon, level }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group"
  >
    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:border-green-400 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500">
      <Icon className="w-8 h-8 text-green-400" />
    </div>
    <h4 className="text-white font-medium mb-2">{title}</h4>
    <div className="w-full bg-gray-900/50 rounded-full h-1.5 mt-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
      />
    </div>
  </motion.div>
);

export default function About() {
  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-8"
        >
          {/* Main Info Card */}
          <motion.div variants={fadeInUp} className="glass-card p-10 md:p-12 rounded-[2.5rem] lg:col-span-8 flex flex-col justify-center relative overflow-hidden group border border-white/5 bg-gradient-to-br from-black/60 to-black/90 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none group-hover:bg-green-500/20 transition-colors duration-1000" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight relative z-10">
              À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">moi</span>
            </h2>
            
            <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6 font-light relative z-10">
              <p>
                Je m'appelle Dimitri Linqué, 19 ans. Mon parcours a débuté par un Bac STI2D (spécialité SIN), 
                renforçant ma capacité à allier <span className="text-white font-medium">technique et méthode</span>.
              </p>
              <p>
                Actuellement en alternance à la <strong className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Banque de France</strong> dans le cadre 
                de mon <strong className="text-green-400 font-medium tracking-wide">BTS SIO SISR</strong>, je plonge quotidiennement au cœur des infrastructures critiques et réseaux.
              </p>
              <p>
                Mon objectif ? M'orienter vers la <strong className="text-cyan-400 font-medium">cybersécurité</strong> pour protéger, innover et construire un avenir numérique de confiance.
              </p>
              
              <div className="mt-8 p-6 md:p-8 backdrop-blur-md border border-cyan-500/30 bg-gradient-to-r from-cyan-900/20 to-green-900/10 rounded-3xl text-cyan-100 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group/alert">
                <div className="absolute inset-0 bg-cyan-400/5 -translate-x-full group-hover/alert:animate-[shimmer_2s_infinite]" />
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <span className="text-2xl animate-pulse">🚀</span>
                  </div>
                  <div>
                    <strong className="text-white text-lg block mb-1">Recherche d'Alternance</strong>
                    Je suis activement à l'écoute pour ma <strong>3ème année Administrateur Système et Réseaux DevOps</strong> avec l'école <strong>ENI</strong>.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Small accent card */}
          <motion.div variants={fadeInUp} className="glass-card p-10 rounded-[2.5rem] lg:col-span-4 flex flex-col items-center justify-center text-center relative overflow-hidden group border border-white/5 bg-black/60 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent group-hover:from-green-500/10 transition-colors duration-500" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500/20 blur-[50px] rounded-full group-hover:bg-green-400/30 transition-colors duration-500" />
            
            <div className="text-7xl mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">🏦</div>
            
            <h3 className="text-3xl font-bold text-white mb-3 relative z-10 tracking-tight">Alternant</h3>
            
            <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/30 mb-8 relative z-10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-green-400 font-mono text-xs tracking-widest uppercase">Banque de France</p>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent relative z-10 mb-8" />
            
            <p className="text-gray-400 text-sm md:text-base relative z-10 font-light leading-relaxed">
              Expertise technique en <span className="text-white font-medium">Infrastructure</span> & <span className="text-white font-medium">Sécurité</span>.
            </p>
          </motion.div>

          {/* Performances Header */}
          <div className="lg:col-span-12 mt-16 mb-2 flex flex-col items-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-green-500/50 mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center tracking-tight mb-4">
              Performances & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Compétences</span>
            </h3>
            <p className="text-gray-400 font-light text-center max-w-2xl">
              Des métriques mesurables et une stack technique solide pour garantir la fiabilité et la sécurité de vos infrastructures.
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="glass-card p-10 text-center rounded-[2rem] border-b-4 border-green-400/50 bg-black/40 hover:bg-black/60 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500" />
              <h4 className="text-6xl md:text-7xl mb-4 font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-green-100 to-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform duration-500">100<span className="text-4xl text-green-400">%</span></h4>
              <p className="text-gray-400 text-sm tracking-widest uppercase font-semibold">Disponibilité Systèmes</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="glass-card p-10 text-center rounded-[2rem] border-b-4 border-cyan-400/50 bg-black/40 hover:bg-black/60 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-500" />
              <h4 className="text-6xl md:text-7xl mb-4 font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform duration-500">5<span className="text-4xl text-cyan-400">+</span></h4>
              <p className="text-gray-400 text-sm tracking-widest uppercase font-semibold">Projets d'Infrastructure</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="glass-card p-10 text-center rounded-[2rem] border-b-4 border-green-400/50 bg-black/40 hover:bg-black/60 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500" />
              <h4 className="text-6xl md:text-7xl mb-4 font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-green-100 to-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform duration-500">50<span className="text-4xl text-green-400">+</span></h4>
              <p className="text-gray-400 text-sm tracking-widest uppercase font-semibold">Tickets Résolus</p>
            </motion.div>
          </div>

          <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <SkillCard title="Cybersécurité" icon={Shield} level={90} />
            <SkillCard title="Réseaux" icon={Server} level={85} />
            <SkillCard title="Admin Sys" icon={Terminal} level={80} />
            <SkillCard title="Virtualisation" icon={Database} level={80} />
            <SkillCard title="Service Client" icon={Layout} level={95} />
          </div>

        </motion.div>
      </div>
    </section>
  );
}