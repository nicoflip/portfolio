"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Server, ExternalLink } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const projectData = [
  { id: 1, title: "Infrastructure AD", desc: "Déploiement réseau entreprise (AD DS avec OU, DHCP, DNS).", icon: Server, tech: ["Windows Server", "AD"] },
  { id: 2, title: "Déploiement GLPI", desc: "Installation GLPI et mise en place d'un inventaire avec GLPI-Agent.", icon: Database, tech: ["Linux", "GLPI", "Réseau"] },
  { id: 3, title: "Masterisation M365", desc: "Déploiement du service M365 et masterisation de postes clients.", icon: Terminal, tech: ["M365", "Scripting"] },
  { id: 4, title: "Serveur Sécurisé", desc: "Installation serveur SSH Debian et Windows avec clés publiques.", icon: Code, tech: ["Debian", "SSH", "Sécurité"] },
];

export default function Projects() {
  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Projets</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Sélection de réalisations techniques en formation et entreprise.</p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projectData.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl p-8 group relative overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-green-400" />
                  </div>
                  <button className="text-gray-500 hover:text-green-400 transition-colors" aria-label="Voir le projet">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-green-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 relative z-10 font-light leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-900/50 border border-gray-700 text-gray-300 rounded-full text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}