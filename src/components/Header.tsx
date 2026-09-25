import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('header.nav.overview'), href: '#overview' },
    { name: t('header.nav.agenda'), href: '#agenda' },
    { name: t('header.nav.focusAreas'), href: '#focus' },
    { name: t('header.nav.aiCompanies'), href: '#companies' },
    { name: t('header.nav.venue'), href: '#venue' }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 grid grid-cols-3 items-center">
        {/* Brand Logo - Left */}
        <div className="flex justify-start">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-lg shadow-black/5 overflow-hidden border border-gray-100/50 group-hover:shadow-corporate-blue/20 transition-all duration-500 p-0.5">
               <img src="/assets/kai.jpeg" alt="K-AI Logo" className="w-full h-full object-contain rounded-lg" />
               {/* Shimmer effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out -translate-x-full transform skew-x-12"></div>
            </div>
          </a>
        </div>
        
        {/* Nav Links - Center */}
        <nav className="hidden lg:flex items-center justify-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-semibold transition-colors relative group ${
                scrolled ? 'text-gray-600 hover:text-corporate-blue' : 'text-gray-700 hover:text-corporate-blue'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corporate-blue transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        
        {/* Right Side - Actions & Mobile Toggle */}
        <div className="flex justify-end items-center">
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center space-x-3 text-xs font-bold tracking-wider ${scrolled ? 'text-gray-400' : 'text-gray-500'}`}>
              {['en', 'vi', 'kr'].map((lang) => (
                <React.Fragment key={lang}>
                  <button 
                    onClick={() => i18n.changeLanguage(lang)} 
                    className={`hover:text-deep-navy transition-colors ${i18n.language === lang ? 'text-deep-navy' : ''}`}
                  >
                    {lang.toUpperCase()}
                  </button>
                  {lang !== 'kr' && <span>|</span>}
                </React.Fragment>
              ))}
            </div>
            
            <a href="#register" className="bg-deep-navy hover:bg-corporate-blue text-white px-7 py-3 rounded text-sm font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(7,26,53,0.2)] hover:shadow-[0_6px_20px_rgba(11,92,255,0.23)] hover:-translate-y-0.5 whitespace-nowrap">
              {t('header.register')}
            </a>
          </div>
          
          <button className="lg:hidden text-deep-navy ml-auto" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center space-x-3">
                <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 p-0.5 overflow-hidden">
                   <img src="/assets/kai.jpeg" alt="K-AI Logo" className="w-full h-full object-contain rounded-lg" />
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 text-lg font-semibold text-deep-navy">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mt-auto pb-8">
              <div className="flex space-x-6 mb-8 text-sm font-bold text-gray-400 tracking-wider">
                {['en', 'vi', 'kr'].map((lang) => (
                  <button 
                    key={lang}
                    onClick={() => { i18n.changeLanguage(lang); setMobileMenuOpen(false); }} 
                    className={`${i18n.language === lang ? 'text-corporate-blue' : ''}`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <a href="#register" onClick={() => setMobileMenuOpen(false)} className="block text-center w-full bg-deep-navy text-white py-4 rounded font-bold tracking-wide">
                {t('header.register')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
