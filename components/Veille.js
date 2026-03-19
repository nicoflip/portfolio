"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, X, ExternalLink } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Veille() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const veilleArticles = [
    [
      {
        title: "Avancées majeures en informatique quantique",
        summary: "IBM, Microsoft et Boeing annoncent des progrès significatifs lors du Quantum World Congress",
        month: "Septembre",
        year: "2024",
        details:
          "Septembre 2024 marque une période intense d'innovations dans le secteur quantique. Lors du Quantum World Congress, IBM, Microsoft et Boeing ont présenté des avancées significatives en informatique quantique. Ces entreprises ont démontré des progrès notables dans le développement de technologies quantiques, marquant une nouvelle phase de développement dans le secteur. Les annonces couvrent plusieurs domaines : amélioration de la stabilité des qubits, optimisation quantique pour la gestion des erreurs dans les systèmes hybrides, et applications industrielles de l'informatique quantique.",
        link: "https://csirt-universitaire.org/publications/actualites/ibm-microsoft-et-boeing-progressent-dans-linformatique-quantique"
      },
      {
        title: "IBM Quantum Network Expansion",
        summary: "IBM étend son réseau quantique avec de nouveaux partenaires",
        month: "Octobre",
        year: "2024",
        details:
          "Le réseau IBM Quantum accueille plusieurs universités européennes et des startups spécialisées dans la chimie numérique, ouvrant l'accès aux processeurs Heron. Objectif: mutualiser les cas d'usage et accélérer le transfert technologique vers des applications industrielles concrètes.",
        link: "https://www.ibm.com/quantum"
      }
    ],
    [
      {
        title: "Google's Quantum Supremacy Update",
        summary: "Nouvelles performances des processeurs quantiques de Google",
        month: "Novembre",
        year: "2024",
        details:
          "Google annonce surpasser son benchmark de 2019 avec un nouveau circuit de 70 qubits effectifs. L'équipe met en avant un gain x241 en temps de calcul face aux meilleurs supercalculateurs classiques, démontrant les progrès continus dans la scalabilité des systèmes quantiques.",
        link: "https://quantumai.google"
      },
      {
        title: "Google valide la correction d'erreurs quantiques",
        summary: "Validation expérimentale d'une prédiction théorique vieille de 30 ans",
        month: "Décembre",
        year: "2024",
        details:
          "Google franchit une étape clé en validant expérimentalement une prédiction théorique vieille de 30 ans sur la correction d'erreurs quantiques. En utilisant leur puce quantique \"Willow\" de 105 qubits, ils démontrent que doubler la protection des qubits réduit de moitié le taux d'erreur, atteignant environ 0,1%. Cette avancée relance la course au calcul quantique et ouvre la voie vers des systèmes quantiques plus fiables.",
        link: "https://www.lemonde.fr/sciences/article/2024/12/09/google-relance-la-course-au-calcul-quantique_6438547_1650684.html"
      }
    ],
    [
      {
        title: "Alice & Bob lève 100 millions d'euros",
        summary: "La start-up française accélère le développement de son ordinateur quantique",
        month: "Janvier",
        year: "2025",
        details:
          "Alice & Bob, start-up française spécialisée dans l'informatique quantique, lève 100 millions d'euros pour accélérer le développement de son ordinateur quantique. L'objectif est de livrer un ordinateur quantique opérationnel d'ici 2030. Cette levée de fonds majeure témoigne de la confiance des investisseurs dans l'écosystème quantique français et positionne la France comme un acteur clé dans cette technologie d'avenir.",
        link: "https://www.lemonde.fr/economie/article/2025/01/28/alice-bob-leve-100-millions-d-euros-pour-developper-son-ordinateur-quantique_6520663_3234.html"
      },
      {
        title: "Microsoft annonce la puce Majorana One",
        summary: "Révolution avec des qubits topologiques pour des ordinateurs quantiques plus stables",
        month: "Février",
        year: "2025",
        details:
          "Microsoft jette un pavé dans la mare en annonçant la puce \"Majorana One\", basée sur des qubits topologiques. Cette approche révolutionnaire ouvre la voie à des ordinateurs quantiques plus stables et tolérants aux pannes. Les qubits topologiques sont théoriquement plus robustes face aux erreurs, ce qui pourrait résoudre l'un des principaux défis de l'informatique quantique : la décohérence.",
        link: "https://www.lemonde.fr/sciences/article/2025/02/21/ordinateurs-quantiques-microsoft-jette-un-pave-dans-la-mare_6557701_1650684.html"
      }
    ],
    [
      {
        title: "L'Europe prépare le Quantum Act",
        summary: "Plan stratégique pour structurer et réglementer le secteur des puces quantiques",
        month: "Mars",
        year: "2025",
        details:
          "L'Union européenne annonce la préparation d'un plan stratégique pour les puces quantiques, baptisé \"EU Quantum Chips Plan\", ainsi qu'un projet de législation nommé \"Quantum Act\". L'objectif est de structurer et réglementer ce secteur crucial. Deux appels à propositions ont été clôturés pour démarrer la production expérimentale de ces puces, avec un investissement initial de 130 millions d'euros, témoignant de l'ambition européenne dans ce domaine stratégique.",
        link: "https://www.lemonde.fr/economie/article/2025/03/02/puces-quantiques-l-europe-prepare-son-quantum-act-pour-reglementer-le-secteur_6572889_3234.html"
      },
      {
        title: "Quandela renforce son équipe dirigeante",
        summary: "Arrivée de Michel Paulin, ex-PDG d'OVHcloud, pour l'expansion internationale",
        month: "Avril",
        year: "2025",
        details:
          "La start-up française Quandela, spécialisée dans les ordinateurs quantiques, renforce son équipe avec l'arrivée de Michel Paulin, ancien directeur général d'OVHcloud, à son conseil d'administration. Cette nomination stratégique vise à soutenir l'expansion internationale de l'entreprise et à capitaliser sur l'expérience de Paulin dans le développement d'une entreprise tech française à l'international.",
        link: "https://www.lemonde.fr/economie/article/2025/04/15/la-start-up-quandela-compte-sur-l-ex-patron-d-ovhcloud-pour-faire-le-saut-a-l-international_6596198_3234.html"
      }
    ],
    [
      {
        title: "Alice & Bob investit 44 millions pour un laboratoire",
        summary: "Création d'un laboratoire quantique en Seine-Saint-Denis",
        month: "Mai",
        year: "2025",
        details:
          "Alice & Bob annonce un investissement de 44 millions d'euros pour la création d'un laboratoire quantique en Seine-Saint-Denis. Ce laboratoire est destiné à soutenir le développement de ses processeurs quantiques et renforce l'écosystème quantique français. Cette infrastructure de pointe permettra d'accélérer la recherche et le développement de technologies quantiques innovantes.",
        link: "https://fr.wikipedia.org/wiki/Alice_%26_Bob"
      },
      {
        title: "IBM dévoile sa feuille de route quantique",
        summary: "Objectif 2029 pour l'IBM Quantum Starling avec 200 qubits logiques",
        month: "Juin",
        year: "2025",
        details:
          "IBM dévoile une version ambitieuse de sa feuille de route quantique, annonçant le développement de l'IBM Quantum Starling. Ce système sera capable d'exécuter 100 millions de portes quantiques sur 200 qubits logiques, avec pour objectif de livrer ce système d'ici 2029. Cette annonce marque une étape cruciale vers des ordinateurs quantiques commercialement viables et tolérants aux pannes.",
        link: "https://www.museeinformatique.fr/informatique-quantique-ibm/"
      }
    ],
    [
      {
        title: "Record mondial de durée de vie d'un qubit",
        summary: "Des chercheurs finlandais doublent la cohérence quantique",
        month: "Juillet",
        year: "2025",
        details:
          "Des chercheurs finlandais pulvérisent un record mondial en doublant la durée de vie d'un qubit supraconducteur, atteignant une cohérence maximale de 1,02 milliseconde. Cette avancée majeure marque durablement l'histoire de l'informatique quantique car la durée de cohérence est l'un des principaux facteurs limitants pour les ordinateurs quantiques. Cette amélioration ouvre la voie à des calculs quantiques plus longs et plus complexes.",
        link: "https://media24.fr/2025/07/28/la-finlande-pulverise-un-record-qui-va-marquer-durablement-lhistoire-de-linformatique-quantique-en-doublant-la-duree-de-vie-dun-qubit/"
      },
      {
        title: "L'ANSSI alerte sur la menace quantique",
        summary: "Alerte sur la cybersécurité et date limite pour la transition post-quantique",
        month: "Août",
        year: "2025",
        details:
          "L'Agence nationale de la sécurité des systèmes d'information (ANSSI) alerte sur la menace que représente l'informatique quantique pour la cybersécurité mondiale et fixe une date limite pour se préparer à la transition vers la cryptographie post-quantique. Cette alerte souligne l'urgence pour les organisations de migrer vers des algorithmes résistants aux attaques quantiques, car les ordinateurs quantiques pourraient un jour casser les systèmes de chiffrement actuels.",
        link: "https://www.clubic.com/actualite-582496-la-menace-quantique-est-la-l-anssi-alerte-et-fixe-une-date-limite-pour-se-preparer.html"
      }
    ],
    [
      {
        title: "Polymère quantique à température ambiante",
        summary: "Révolution avec un semi-conducteur fonctionnant sans refroidissement extrême",
        month: "Septembre",
        year: "2025",
        details:
          "Des chercheurs américains et australiens développent un polymère semi-conducteur fonctionnant à température ambiante, ouvrant la voie à des ordinateurs quantiques plus accessibles. Cette avancée résout l'un des principaux problèmes des ordinateurs quantiques : la nécessité de refroidissement extrême (près du zéro absolu). Si cette technologie se confirme, elle pourrait démocratiser l'accès à l'informatique quantique en réduisant drastiquement les coûts et la complexité d'infrastructure.",
        link: "https://media24.fr/2025/09/22/le-principal-probleme-des-ordinateurs-quantiques-enfin-solutionne-grace-a-du-plastique/"
      },
      {
        title: "Quandela dévoile Lucy, ordinateur quantique photonique",
        summary: "Premier ordinateur quantique photonique accessible en ligne via le cloud européen",
        month: "Octobre",
        year: "2025",
        details:
          "La start-up française Quandela dévoile \"Lucy\", le premier ordinateur quantique photonique accessible en ligne via le cloud européen. Lucy utilise des photons uniques comme unités d'information, une approche différente des qubits supraconducteurs traditionnels. Cette innovation rend l'informatique quantique accessible à distance et ouvre de nouvelles perspectives pour la recherche et les applications industrielles via le cloud quantique.",
        link: "https://media24.fr/2025/11/11/lallemagne-reussit-une-grande-premiere-mondiale-en-informatique-quantique-en-integrant-un-systeme-optique-directement-dans-des-puces-a-piege-a-ions/"
      }
    ]
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % veilleArticles.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + veilleArticles.length) % veilleArticles.length);

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative"
        >
          {/* Background glow for the title area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-green-500/20 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight relative z-10">
            Veille <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Technologique</span>
          </h2>
          <div className="inline-flex items-center gap-4 bg-black/50 border border-green-500/30 rounded-full px-6 py-2 glass shadow-[0_0_20px_rgba(34,197,94,0.15)] relative z-10 backdrop-blur-md hover:border-green-400/60 transition-colors">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
            </span>
            <p className="text-gray-300 font-mono text-sm tracking-wide">Sujet : <span className="text-green-300 font-bold uppercase">L'Informatique Quantique</span></p>
          </div>
        </motion.div>
        
        <div className="relative">
          {/* Main Container */}
          <motion.div
             variants={fadeInUp}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             className="glass-card rounded-[2rem] p-6 md:p-10 border border-white/5 relative bg-gradient-to-b from-black/40 to-black/80 shadow-2xl overflow-hidden"
          >
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="flex justify-between items-center mb-10 relative z-10">
              <button onClick={prevSlide} className="p-4 bg-black/40 border border-white/10 hover:border-green-500/50 rounded-full transition-all duration-300 group shadow-lg hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-green-400 group-hover:-translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-2 items-center">
                {veilleArticles.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-8 bg-green-400 shadow-[0_0_10px_#4ade80]' : 'w-2 bg-gray-700'}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="p-4 bg-black/40 border border-white/10 hover:border-green-500/50 rounded-full transition-all duration-300 group shadow-lg hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid lg:grid-cols-2 gap-8 relative z-10"
              >
                {veilleArticles[currentSlide] && veilleArticles[currentSlide].map((article, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedArticle(article)}
                    className="text-left bg-black/50 border border-gray-800 rounded-3xl p-8 hover:border-green-400/50 hover:bg-[#0a1510] transition-all duration-500 group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col justify-between min-h-[280px]"
                  >
                    {/* Hover Glow effect inside card */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/0 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-cyan-500/20 transition-colors duration-700" />
                    
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center text-xs font-mono text-green-300 bg-green-900/30 border border-green-500/30 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                          <Calendar className="w-3.5 h-3.5 mr-2" />
                          {article.month} {article.year}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-green-500/10 group-hover:border-green-400/50 transition-all duration-300 group-hover:rotate-45">
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-gray-400/90 text-sm leading-relaxed font-light line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center text-green-400 font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-widest">
                      Lire l'article <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-4 md:p-6"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-[2rem] p-8 md:p-14 shadow-[0_0_50px_rgba(34,197,94,0.15)] overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative top-left line */}
              <div className="absolute top-0 left-10 w-32 h-1 bg-gradient-to-r from-green-400 to-cyan-400 shadow-[0_0_15px_#4ade80]" />

              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 border border-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="inline-flex items-center text-sm font-mono text-cyan-400 mb-8 bg-cyan-900/30 px-4 py-2 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Calendar className="w-4 h-4 mr-2" />
                {selectedArticle.month} {selectedArticle.year}
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
                {selectedArticle.title}
              </h3>
              
              <p className="text-xl text-green-300 font-light italic mb-8 border-l-4 border-green-500/50 pl-6">
                {selectedArticle.summary}
              </p>
              
              <div className="w-full h-px bg-gradient-to-r from-gray-800 via-gray-700 to-transparent mb-8" />
              
              <p className="text-gray-300 mb-12 leading-loose font-light text-lg md:text-xl text-justify">
                {selectedArticle.details}
              </p>
              
              {selectedArticle.link && (
                <a
                  href={selectedArticle.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto font-bold text-black bg-gradient-to-r from-green-400 to-cyan-400 hover:brightness-110 px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] group"
                >
                  Lire l'étude complète
                  <ExternalLink className="w-5 h-5 ml-3 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}