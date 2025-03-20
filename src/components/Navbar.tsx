import React from 'react';
import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed w-full top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#home" className="text-xl font-bold">JM</a>
          <div className="hidden md:flex items-center gap-4">
            <a href="#home" className="nav-link">{t.nav.home}</a>
            <a href="#about" className="nav-link">{t.nav.about}</a>
            <a href="#skills" className="nav-link">{t.nav.skills}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
          </div>
        </div>
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
        </div>
      </div>
    </nav>
  );
}