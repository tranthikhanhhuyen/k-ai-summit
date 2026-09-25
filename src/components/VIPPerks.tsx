import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Ticket, Utensils, GlassWater } from 'lucide-react';

export default function VIPPerks() {
  const { t } = useTranslation();

  const perks = [
    { icon: <Ticket className="w-8 h-8 stroke-1" />, key: 'grab' },
    { icon: <Utensils className="w-8 h-8 stroke-1" />, key: 'lunch' },
    { icon: <GlassWater className="w-8 h-8 stroke-1" />, key: 'dinner' },
  ];

  return (
    <section className="py-32 bg-deep-navy text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-20"
        >
          {t('perks.headline')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {perks.map((perk, idx) => (
            <motion.div 
              key={perk.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-8 text-corporate-blue bg-white/5">
                {perk.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide">{t(`perks.${perk.key}.title`)}</h3>
              <p className="text-gray-400 font-medium leading-relaxed max-w-xs">{t(`perks.${perk.key}.text`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
