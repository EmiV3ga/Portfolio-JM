import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import PortfolioModal from './components/PortfolioModal';
import { useLanguage } from './context/LanguageContext';
import { Briefcase, PenTool, LineChart, Mail, Send } from 'lucide-react';

function MainContent() {
  const { t, language } = useLanguage();
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <p className="text-xl mb-2">{t.hero.greeting}</p>
          <h1 className="text-5xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-2xl text-secondary">{t.hero.subtitle}</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="section-title">{t.about.title}</h2>
            <p className="text-lg">{t.about.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <SkillCard
              icon={<Briefcase className="w-8 h-8" />}
              title={t.skills.business}
              delay={0}
            />
            <SkillCard
              icon={<LineChart className="w-8 h-8" />}
              title={t.skills.marketing}
              delay={0.2}
            />
            <SkillCard
              icon={<PenTool className="w-8 h-8" />}
              title={t.skills.design}
              delay={0.4}
              onClick={() => setIsPortfolioOpen(true)}
              interactive
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="max-w-lg mx-auto bg-background rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Name' : 'Nombre'}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-accent/20 bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Email' : 'Correo'}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-accent/20 bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Message' : 'Mensaje'}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-accent/20 bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-background py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors"
              >
                <Send className="w-5 h-5" />
                {language === 'en' ? 'Send Message' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
      />
    </div>
  );
}

function SkillCard({ 
  icon, 
  title, 
  delay,
  onClick,
  interactive = false 
}: { 
  icon: React.ReactNode; 
  title: string; 
  delay: number;
  onClick?: () => void;
  interactive?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className={`bg-background p-6 rounded-lg shadow-lg text-center transition-transform ${
        interactive ? 'cursor-pointer hover:scale-105' : ''
      }`}
      onClick={onClick}
    >
      <div className="mb-4 text-secondary flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}