import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
      <nav className="fixed w-full top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
              href="#home"
              className="relative w-12 h-12 flex items-center justify-center bg-secondary rounded-full text-background font-bold text-xl transition-transform hover:scale-105"
          >
            JM
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className="nav-link"
                >
                  {item.label}
                </a>
            ))}
          </div>

          {/* Theme and Language Toggles */}
          <div className="flex items-center gap-4">
            <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-accent/20 transition-colors"
                aria-label="Toggle language"
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-accent/20 transition-colors"
                aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
              ) : (
                  <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-accent/20 transition-colors"
                aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                  <X className="w-6 h-6" />
              ) : (
                  <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-background/95 border-t border-accent/20"
              >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                  {menuItems.map((item) => (
                      <a
                          key={item.href}
                          href={item.href}
                          className="nav-link block py-3"
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}