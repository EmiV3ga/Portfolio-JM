import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import PortfolioModal from './components/PortfolioModal';
import { useLanguage } from './context/LanguageContext';
import JulietaImage from './assets/Julieta.jpeg';
import { Briefcase, PenTool, LineChart, Linkedin, Mail, Instagram, MessageSquare } from 'lucide-react';

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

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/julieta-mendiola-47705126a/',
      color: 'hover:text-[#0077B5]'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      href: 'mailto:julymendiola@hotmail.com',
      color: 'hover:text-secondary'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: 'WhatsApp',
      href: 'https://wa.me/2265407667',
      color: 'hover:text-[#25D366]'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/july_mendiola/#',
      color: 'hover:text-[#E4405F]'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
        >
          {/* Contenedor del círculo (aumentado) */}
          <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-8 border-secondary">
            <img
                src={JulietaImage}  // Asegúrate de importarla correctamente
                alt="Julieta Mendiola"
                className="w-full h-full object-cover"
            />
          </div>
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
            animate={inView ? 'visible' : 'hidden'}
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
            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-lg border border-accent/20 hover:border-accent transition-colors ${link.color}`}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-accent/10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Julieta Mendiola. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/julieta-mendiola-47705126a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/july_mendiola/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

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
  interactive = false,
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