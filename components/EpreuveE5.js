"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function EpreuveE5() {
  const competences = [
    { id: 'patrimoine', short: 'Gérer', title: 'Gérer le patrimoine informatique' },
    { id: 'incidents', short: 'Répondre', title: 'Répondre aux incidents & assistance' },
    { id: 'presence', short: 'Présence', title: 'Développer la présence en ligne' },
    { id: 'projet', short: 'Projet', title: 'Travailler en mode projet' },
    { id: 'service', short: 'Services', title: 'Service informatique & utilisateurs' },
    { id: 'developpement', short: 'Dev. Pro', title: 'Développement professionnel' }
  ];

  const realisations = [
    {
      category: 'Réalisation en cours de formation',
      items: [
        { title: 'TP GLPI: Inventaire GLPI-Agent', competences: ['patrimoine', 'service'] },
        { title: 'Organisation CV + LinkedIn', competences: ['developpement'] },
        { title: 'Création VM Debian, Windows', competences: ['incidents'] },
        { title: 'Mise en place DHCP & AD DS', competences: ['patrimoine', 'service'] },
        { title: 'Installation serveur SSH', competences: ['patrimoine', 'incidents'] }
      ]
    },
    {
      category: 'Réalisations en milieu professionnel (Banque de France)',
      items: [
        { title: 'Gestion parc avec Newport', competences: ['patrimoine'] },
        { title: 'Gestion tickets (Portser, Jira)', competences: ['incidents'] },
        { title: 'Masterisation de postes', competences: ['patrimoine'] },
        { title: 'Déploiement du service M365', competences: ['patrimoine', 'incidents', 'projet', 'service'] },
        { title: 'Gestion de droits AD', competences: ['incidents'] }
      ]
    }
  ];

  return (
    <section className="py-12 px-4 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-y-1/2" />
      
      <div className="max-w-[95vw] mx-auto xl:max-w-7xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Épreuve <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">E5</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Tableau de synthèse des réalisations professionnelles (Session 2026), 
            démontrant mes compétences acquises en situation réelle.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Header Card */}
          <motion.div variants={fadeInUp} className="glass-card rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300 font-light">
              <div>
                <p className="font-semibold text-green-400 mb-2 tracking-wide uppercase">BTS SIO • Option SISR</p>
                <p>Année de session: <span className="font-medium text-white">2026</span></p>
              </div>
              <div className="md:text-right">
                <p>Étudiant: <span className="font-semibold text-white">Dimitri Linqué</span></p>
              </div>
            </div>
          </motion.div>

          {/* E5 Matrix Desktop*/}
          <motion.div variants={fadeInUp} className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-2 mb-4 pb-4 border-b border-green-500/20">
                <div className="col-span-4 text-white font-bold tracking-tight">Réalisation Professionnelle</div>
                {competences.map((comp) => (
                  <div key={comp.id} className="col-span-1 text-center font-mono text-xs text-green-400" title={comp.title}>
                    {comp.short}
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              {realisations.map((cat, catIdx) => (
                <div key={catIdx} className="mb-8 last:mb-0">
                  <h4 className="text-cyan-400 font-semibold mb-4 text-sm tracking-widest uppercase bg-cyan-500/10 inline-block px-4 py-1.5 rounded-full border border-cyan-500/20">
                    {cat.category}
                  </h4>
                  <div className="space-y-2">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="grid grid-cols-12 gap-2 items-center hover:bg-white/5 p-3 rounded-xl transition-colors border border-transparent hover:border-white/10 group">
                        <div className="col-span-4 pr-4">
                          <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{item.title}</p>
                        </div>
                        {competences.map((comp) => {
                          const hasSkill = item.competences.includes(comp.id);
                          return (
                            <div key={comp.id} className="col-span-1 flex justify-center">
                              {hasSkill ? (
                                <CheckCircle2 className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                              ) : (
                                <span className="block w-1.5 h-1.5 rounded-full bg-gray-800" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-green-500/20 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/tableau-e5.xlsx"
                download="tableau-e5.xlsx"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-400 text-black font-semibold rounded-2xl hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                <Download className="w-5 h-5 mr-3" />
                Tableau complet (Excel)
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
