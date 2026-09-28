import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar, MapPin } from 'lucide-react';

export default function Hero({ onBook }: { onBook: () => void }) {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-navy">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videoheader.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-deep-navy/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full lg:w-2/3 flex flex-col justify-center text-left">
          


          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 flex flex-col"
          >
            <span className="text-xl md:text-2xl font-bold text-blue-300 tracking-widest uppercase mb-4">{t('hero.title1')}</span>
            <span>
              K-AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">GLOBAL VALUE CHAIN</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 font-medium mb-10 max-w-2xl leading-relaxed"
          >
            Connecting Korea's leading AI & tech innovators with Vietnam's rapidly growing digital ecosystem.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <button onClick={onBook} className="inline-flex items-center justify-center px-8 py-4 bg-corporate-blue text-white font-bold rounded hover:bg-blue-600 transition-colors shadow-xl group">
              {t('hero.registerBtn')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="/assets/K-AI_Summit_Agenda.pdf" 
              download="K-AI_Summit_Agenda.pdf"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/30 font-bold rounded hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Download className="mr-2 w-4 h-4" />
              {t('hero.downloadPdf')}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center space-x-4 text-gray-300 text-sm tracking-widest uppercase font-bold"
          >
            <span>{t('hero.organizedBy')}</span>
          </motion.div>
        </div>
      </div>
      
      {/* Information Strip */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-deep-navy/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm font-medium">
          <div className="flex items-center space-x-8 mb-4 sm:mb-0">
            <div className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-2 text-corporate-blue" />
              {t('hero.date')}
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2 text-corporate-blue" />
              {t('hero.venue')}
            </div>
          </div>
          <div className="text-corporate-blue font-bold tracking-wider">
            {t('hero.duration')}
          </div>
        </div>
      </div>
    </section>
  );
}
