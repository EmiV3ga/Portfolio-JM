import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    description: 'Complete brand identity including logo, color palette, and guidelines.',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Marketing Materials',
    description: 'Social media graphics and promotional materials design.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User interface and experience design for web applications.',
    image: 'https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?auto=format&fit=crop&q=80&w=800',
  },
];

export default function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
  const { language } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-primary/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {language === 'en' ? 'Design Portfolio' : 'Portafolio de Diseño'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-accent/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map(project => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-accent/10 rounded-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-primary/80">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}