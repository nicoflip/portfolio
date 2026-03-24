"use client";

import React from 'react';
import { projectData } from '../../../lib/projectsData';
import Link from 'next/link';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const project = projectData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0b10] text-white">
        <h1 className="text-5xl font-bold mb-4">Projet non trouvé</h1>
        <Link href="/" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          Retourner à l'accueil
        </Link>
      </div>
    );
  }

  // Generate CSS classes dynamically safely
  const gradientText = `text-transparent bg-clip-text bg-gradient-to-r ${project.accentColor}`;
  const getButtonGlow = () => project.accentGlow || 'bg-green-500/20';

  return (
    <main className="min-h-screen bg-[#0a0b10] text-gray-200 selection:bg-gray-800 relative pb-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Sticky Global Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0b10]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Retour au Portfolio</span>
          </Link>
          <div className="text-sm font-mono text-gray-500 hidden sm:block">
            /projects/{project.id}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 pt-16 relative z-10">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 items-center mb-32"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight ${gradientText} pb-2`}>
                {project.title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                {project.desc}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  Consulter la RoadMap
                </a>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {project.tech.map((t, i) => (
                <span key={i} className="px-4 py-1.5 bg-gray-900 border border-gray-800 text-gray-300 rounded-full text-sm font-mono shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* MOCKUP RIGHT SIDE */}
          <motion.div variants={fadeInUp} className="relative hidden lg:block">
            {/* Glowing background behind mockup */}
            <div className={`absolute inset-0 max-w-md mx-auto aspect-square rounded-full blur-3xl opacity-30 ${getButtonGlow()}`} />
            
            {/* Mockup Container */}
            <div className="relative aspect-[4/3] bg-gray-900/50 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center p-8 backdrop-blur-sm group hover:border-white/20 transition-colors duration-500">
              <project.icon className="w-40 h-40 text-white/10 group-hover:text-white/20 transition-colors duration-500" strokeWidth={1} />
            </div>
          </motion.div>
        </motion.section>

        {/* CONTEXT SECTION */}
        {project.context && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-32"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Pourquoi ce projet ?</h2>
              <div className={`h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r ${project.accentColor}`} />
              <p className="text-lg text-gray-400 pt-6 leading-relaxed">
                {project.context.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {project.context.features.map((feat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-colors duration-300 group">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                    {feat.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* TECHNICAL DETAILS SECTION */}
        {project.technicalDetails && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Comment a-t-il été réalisé ?</h2>
              <div className={`h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r ${project.accentColor}`} />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.technicalDetails.map((detail, i) => {
                const DetailIcon = detail.icon;
                return (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="bg-gray-900/40 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    {/* Hover Glow Effect */}
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-10 -mt-10 ${getButtonGlow()}`} />
                    
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      {DetailIcon && <DetailIcon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" />}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{detail.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {detail.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
