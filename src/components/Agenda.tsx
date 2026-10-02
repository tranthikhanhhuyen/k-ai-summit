import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Agenda() {
  const { t } = useTranslation();
  const timeline = t('agenda.timeline', { returnObjects: true }) as Array<{time: string, title: string, description: string}>;

  // Colors mapping based on the image provided
  const colors = ['bg-blue-400'];
  
  const textColors = ['text-deep-navy'];

  return (
    <section id="agenda" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 w-full max-w-[90rem]">
        <div className="text-center mb-16 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-deep-navy tracking-tight mb-4 uppercase"
          >
            {t('agenda.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-medium tracking-widest uppercase"
          >
            {t('hero.date')}
          </motion.p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-48 md:mt-56 mb-64">
          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 -translate-y-1/2"></div>
          
          <div className="flex justify-between items-center relative z-10 w-full">
            {timeline.map((item, idx) => {
              const isTop = idx % 2 === 0;
              const colorBg = colors[idx % colors.length];
              const colorText = textColors[idx % textColors.length];

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative flex flex-col items-center w-full px-2"
                >
                  {/* Top Content (Visible if even index) */}
                  <div className={`absolute bottom-full mb-12 text-center w-72 ${isTop ? '' : 'hidden'}`}>
                    <h3 className={`text-lg font-bold mb-2 ${colorText}`}>{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-snug">{item.description}</p>
                    {/* Dotted line connecting text to block */}
                    <div className="absolute -bottom-10 left-1/2 w-px h-10 border-l-2 border-dotted border-gray-300 -translate-x-1/2"></div>
                  </div>

                  {/* The Time Block */}
                  <div className={`relative px-4 py-3 w-40 text-center rounded-lg shadow-sm font-bold text-white ${colorBg}`}>
                    {item.time}
                    
                    {/* The small circle on the block */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white ${colorBg} flex items-center justify-center ${isTop ? '-top-5' : '-bottom-5'}`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Bottom Content (Visible if odd index) */}
                  <div className={`absolute top-full mt-12 text-center w-72 ${!isTop ? '' : 'hidden'}`}>
                    {/* Dotted line connecting block to text */}
                    <div className="absolute -top-10 left-1/2 w-px h-10 border-l-2 border-dotted border-gray-300 -translate-x-1/2"></div>
                    <h3 className={`text-lg font-bold mb-2 ${colorText}`}>{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-snug">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const colorBg = colors[idx % colors.length];
              const colorText = textColors[idx % textColors.length];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-16 pr-4"
                >
                  {/* Circle dot on line */}
                  <div className={`absolute left-[20px] top-4 w-4 h-4 rounded-full border-2 border-white shadow-sm ${colorBg}`}></div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className={`inline-block px-3 py-1 rounded text-xs font-bold text-white mb-3 ${colorBg}`}>
                      {item.time}
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${colorText}`}>{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm font-semibold text-gray-400"
        >
          {t('agenda.interpreter')}
        </motion.div>
      </div>
    </section>
  );
}
