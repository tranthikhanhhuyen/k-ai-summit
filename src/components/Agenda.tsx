import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function Agenda() {
  const { t } = useTranslation();
  const timeline = t('agenda.timeline', { returnObjects: true }) as Array<{time: string, title: string, description: string}>;

  return (
    <section id="agenda" className="py-32 bg-soft-gray relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-deep-navy tracking-tight mb-4"
          >
            {t('agenda.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-corporate-blue font-semibold tracking-widest uppercase"
          >
            23 OCTOBER 2026
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node */}
                <div className="absolute left-[-4px] md:left-1/2 w-2.5 h-2.5 bg-corporate-blue rounded-full transform md:-translate-x-1/2 mt-2 md:mt-0 z-10 ring-4 ring-soft-gray"></div>
                
                <div className={`pl-8 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
                    <div className={`flex items-center text-corporate-blue font-bold mb-3 ${idx % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      <Clock className="w-4 h-4 mr-2" />
                      {item.time}
                    </div>
                    <h3 className="text-xl font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm font-semibold text-gray-500 bg-white inline-block mx-auto px-6 py-3 rounded-full border border-gray-100 shadow-sm relative left-1/2 -translate-x-1/2"
        >
          {t('agenda.interpreter')}
        </motion.div>
      </div>
    </section>
  );
}
