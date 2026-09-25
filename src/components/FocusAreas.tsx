import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FocusAreas() {
  const { t } = useTranslation();
  const areas = t('focusAreas.areas', { returnObjects: true }) as Array<{id: number, title: string, description: string}>;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="focus" className="py-32 bg-soft-gray">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-deep-navy tracking-tight mb-20"
        >
          {t('focusAreas.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, idx) => (
            <div 
              key={area.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(11,92,255,0.12)] hover:-translate-y-1 hover:border-corporate-blue/30 transition-all duration-300 group flex items-start"
            >
              <div className="mr-6">
                <span className="text-corporate-blue font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  {area.id < 10 ? `0${area.id}` : area.id}
                </span>
              </div>
              <div>
                <h3 className="text-deep-navy font-bold text-lg md:text-xl mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
