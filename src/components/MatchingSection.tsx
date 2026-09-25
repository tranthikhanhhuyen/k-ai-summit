import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, MousePointerClick, Calendar, MessageSquare, Handshake } from 'lucide-react';

export default function MatchingSection({ onBook }: { onBook: () => void }) {
  const { t } = useTranslation();

  const steps = [
    { icon: <Search />, key: 'discover' },
    { icon: <MousePointerClick />, key: 'select' },
    { icon: <Calendar />, key: 'choose' },
    { icon: <MessageSquare />, key: 'request' },
    { icon: <Handshake />, key: 'consult' },
  ];

  return (
    <section className="py-32 bg-corporate-blue text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          {t('matching.headline')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto mb-20"
        >
          {t('matching.supportText')}
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto relative mb-20">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-400/30 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={step.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="relative z-10 flex flex-col items-center mb-8 md:mb-0"
            >
              <div className="w-16 h-16 rounded-full bg-white text-corporate-blue flex items-center justify-center shadow-lg mb-4">
                {step.icon}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">{t(`matching.flow.${step.key}`)}</span>
            </motion.div>
          ))}
        </div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          onClick={onBook}
          className="bg-white text-corporate-blue hover:bg-gray-50 px-10 py-5 rounded font-bold tracking-wide transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
        >
          {t('matching.cta')}
        </motion.button>
      </div>
    </section>
  );
}
