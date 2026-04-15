"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronLeft, ChevronRight, ShieldCheck, Terminal, Server, Shield, Database, Layout } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const SkillCard = ({ title, icon: Icon }) => (
  <motion.div 
    variants={fadeInUp}
    className="p-6 rounded-2xl flex flex-col items-center justify-center text-center"
    style={{
      background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.6) 100%)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(34, 197, 94, 0.15)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
    }}
  >
    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-green-400" />
    </div>
    <h4 className="text-white font-medium">{title}</h4>
  </motion.div>
);

const certifications = [
  {
    name: "Cisco CCNA",
    authority: "Cisco",
    date: "2025",
    images: ["ccna-module-1.webp", "ccna-module-2.webp", "ccna-module-3.webp", "ccna-module-4.webp"],
  },
  {
    name: "MOOC de l'ANSSI (SecNumacadémie)",
    authority: "ANSSI",
    date: "2024",
    images: ["secnumacademie.webp"],
  },
  {
    name: "Certification RGPD",
    authority: "CNIL",
    date: "2024",
    images: ["rgpd-1.webp", "rgpd-2.webp", "rgpd-3.webp", "rgpd-4.webp", "rgpd-5.webp"],
  },
];

export default function SkillsAndCertifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCertification = (cert) => {
    setSelectedCert(cert);
    setCurrentImageIndex(0);
  };

  const closeCertification = () => {
    setSelectedCert(null);
    setCurrentImageIndex(0);
  };

  const showNextImage = () => {
    if (!selectedCert?.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedCert.images.length);
  };

  const showPrevImage = () => {
    if (!selectedCert?.images) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedCert.images.length) % selectedCert.images.length);
  };

  useEffect(() => {
    if (!selectedCert) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') closeCertification();
      if (!selectedCert.images?.length || selectedCert.images.length === 1) return;
      if (event.key === 'ArrowRight') showNextImage();
      if (event.key === 'ArrowLeft') showPrevImage();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedCert]);

  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* MERGED SKILLS AND CERTIFICATIONS SECTION */}
        <motion.div
           variants={fadeInUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="w-full"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 glass rounded-full mb-6 relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
              <Award className="w-8 h-8 text-green-400 relative z-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Compétences & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Certifications</span>
            </h2>
            <p className="text-gray-400 font-light text-center max-w-2xl mx-auto">
              Une stack technique solide pour garantir la fiabilité et la sécurité de vos infrastructures, validée par des certifications reconnues.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            <SkillCard title="Cybersécurité" icon={Shield} />
            <SkillCard title="Réseaux" icon={Server} />
            <SkillCard title="Admin Sys" icon={Terminal} />
            <SkillCard title="Virtualisation" icon={Database} />
            <SkillCard title="Service Client" icon={Layout} />
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl p-8 text-center group cursor-pointer relative overflow-hidden"
                onClick={() => openCertification(cert)}
              >
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500" />
                
                <div className="w-16 h-16 mx-auto bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-green-400 transition-all duration-300">
                  <ShieldCheck className="w-8 h-8 text-green-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 font-light">{cert.authority}</p>
                
                <div className="inline-flex items-center text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 mb-4">
                  {cert.date}
                </div>
                
                <p className="text-xs text-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span>Cliquez pour voir</span>
                  {cert.images.length > 1 && (
                    <span className="bg-white/10 text-white rounded-full px-2 py-0.5">
                      {cert.images.length}
                    </span>
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={closeCertification}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl glass-card rounded-3xl overflow-hidden border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.1)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeCertification}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-red-500/20 hover:text-red-400 text-white backdrop-blur-md transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-[60vh] md:h-[70vh] bg-black/50 flex items-center justify-center p-4">
                {selectedCert?.images?.length > 1 && (
                  <>
                    <button
                      onClick={showPrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-black/40 hover:bg-green-500/40 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-black/40 hover:bg-green-500/40 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-mono text-green-400 bg-black/60 px-4 py-1.5 rounded-full border border-green-500/20 backdrop-blur-md z-10">
                      PAGE {currentImageIndex + 1} / {selectedCert.images.length}
                    </div>
                  </>
                )}
                
                {/* Fallback Display if image is not found */}
                <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 bg-gray-900/50">
                   <Award className="w-24 h-24 text-green-500/20 mb-4" />
                   <p className="text-gray-500 text-sm">Aperçu du diplôme non disponible</p>
                </div>

                <img
                  src={`/images/certifications/${selectedCert?.images?.[currentImageIndex]}`}
                  alt={`${selectedCert?.name} - page ${currentImageIndex + 1}`}
                  className="object-contain w-full h-full relative z-0"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="p-6 md:p-8 bg-black/60 border-t border-green-500/20 backdrop-blur-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold text-white mb-1">{selectedCert.name}</p>
                  <p className="text-gray-400 font-light">{selectedCert.authority}</p>
                </div>
                <div className="inline-flex items-center text-sm font-mono text-green-400 bg-green-500/10 px-4 py-2 rounded-xl border border-green-500/20">
                  OBTENU EN {selectedCert.date}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
