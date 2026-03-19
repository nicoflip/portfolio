"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CalendarDays } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const TimelineItem = ({ item, isEdu }) => (
  <motion.div
    variants={fadeInUp}
    className="relative pl-8 md:pl-0"
  >
    {/* Line connector for mobile */}
    <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-green-500/20" />
    
    <div className="md:grid md:grid-cols-5 md:gap-8 items-center group">
      {/* Date side */}
      <div className="col-span-2 md:text-right mb-2 md:mb-0 relative">
        <div className="hidden md:flex absolute right-[calc(-2rem-6px)] top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] group-hover:scale-150 transition-transform duration-300 z-10" />
        <span className="inline-flex items-center text-green-400 font-mono text-sm bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
          <CalendarDays className="w-3.5 h-3.5 mr-2" />
          {item.date}
        </span>
      </div>

      {/* Content side */}
      <div className="col-span-3 glass-card p-6 rounded-2xl relative">
        <div className="md:hidden absolute left-[-16px] top-6 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] -translate-x-1/2" />
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors">{item.title}</h3>
        <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
          {isEdu ? <GraduationCap className="w-4 h-4 text-green-500/70" /> : <Briefcase className="w-4 h-4 text-green-500/70" />}
          {item.location}
        </p>
        <p className="text-gray-300 font-light text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  </motion.div>
);

export default function Parcours() {
  const parcoursScolaire = [
    {
      date: "2024-2026",
      title: "BTS SIO SISR",
      location: "En cours",
      description: "Solutions d'Infrastructure, Systèmes et Réseaux."
    },
    {
      date: "2021-2024",
      title: "Bac STI2D",
      location: "Lycée Léonard de Vinci, Montaigu",
      description: "Spécialité Systèmes d'Information et Numérique (SIN)."
    }
  ];

  const parcoursPro = [
    {
      date: "2024-2026",
      title: "Alternant en Infrastructure",
      location: "Banque de France",
      description: "Administration système, gestion de parc, déploiement réseau, et support utilisateur de niveau 1 et 2."
    },
    {
      date: "Mai 2023 - Août 2024",
      title: "Équipier Polyvalent",
      location: "McDonald's",
      description: "Service client, travail en équipe, gestion du stress et respect strict des procédures d'hygiène."
    },
    {
      date: "Mai - Août 2022",
      title: "Employé d'usine",
      location: "Sodebo",
      description: "Travail en ligne de production, respect rigoureux des cadences et normes."
    }
  ];

  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">
            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Parcours</span>
          </motion.h2>

          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/0 via-green-500/30 to-green-500/0 -translate-x-1/2" />
            
            <div className="space-y-12">
              <motion.div variants={fadeInUp} className="md:text-center mt-12 mb-8 relative z-10">
                <span className="inline-flex glass-card border border-green-500/30 py-2 px-6 rounded-full items-center gap-3">
                  <Briefcase className="text-green-400 w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">Expériences Pro</h3>
                </span>
              </motion.div>
              {parcoursPro.map((item, idx) => (
                <TimelineItem key={`pro-${idx}`} item={item} isEdu={false} />
              ))}

              <motion.div variants={fadeInUp} className="md:text-center mt-20 mb-8 relative z-10">
                <span className="inline-flex glass-card border border-cyan-500/30 py-2 px-6 rounded-full items-center gap-3">
                  <GraduationCap className="text-cyan-400 w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">Formations</h3>
                </span>
              </motion.div>
              {parcoursScolaire.map((item, idx) => (
                <TimelineItem key={`edu-${idx}`} item={item} isEdu={true} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
