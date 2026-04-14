import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, ExternalLink, X } from 'lucide-react';

export default function CredentialsModal({ isOpen, onClose, link }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#1a1c23] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl relative pointer-events-auto"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Accès restreint</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Le site de la roadmap CHU est protégé. Veuillez utiliser les identifiants suivants pour vous connecter :
              </p>
              
              <div className="bg-black/40 rounded-xl p-4 border border-white/5 space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400 text-sm w-16">Login :</span>
                  <span className="text-white font-mono font-medium">examinateur</span>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400 text-sm w-16">Mdp :</span>
                  <span className="text-white font-mono font-medium">E6-2026</span>
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Annuler
                </button>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="px-5 py-2 flex gap-2 items-center rounded-xl text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                >
                  Accéder au site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
