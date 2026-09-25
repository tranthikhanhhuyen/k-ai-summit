import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="overview" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy leading-[1.1] tracking-tight mb-8"
          >
            {t('about.headline')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed text-balance"
          >
            {t('about.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
          {['discover', 'connect', 'expand'].map((key, idx) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="group"
            >
              <div className="text-4xl font-light text-gray-200 mb-4 group-hover:text-corporate-blue transition-colors duration-300">0{idx + 1}</div>
              <div>
                <h3 className="text-xl font-bold text-deep-navy mb-4 tracking-wide">{t(`about.${key}.title`)}</h3>
                <div className="w-12 h-0.5 bg-corporate-blue mb-6"></div>
                <p className="text-gray-600 leading-relaxed font-medium">{t(`about.${key}.text`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
