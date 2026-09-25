import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function EventSnapshot() {
  const { t } = useTranslation();
  
  const stats = [
    { num: '01', title: t('snapshot.date'), sub: '' },
    { num: '02', title: t('snapshot.venue'), sub: '' },
    { num: '03', title: '10', sub: t('snapshot.companies') },
    { num: '04', title: '1:1', sub: t('snapshot.matching') }
  ];

  return (
    <section className="bg-deep-navy text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 divide-y md:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`pt-8 md:pt-0 ${idx > 0 ? 'lg:pl-12' : ''}`}
            >
              <span className="text-corporate-blue text-sm font-bold tracking-widest block mb-4">{stat.num}</span>
              <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-2">{stat.title}</h3>
              {stat.sub && <p className="text-gray-400 font-medium tracking-wide text-sm uppercase mt-4">{stat.sub}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
