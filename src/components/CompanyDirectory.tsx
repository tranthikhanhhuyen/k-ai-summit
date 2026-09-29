import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { companies } from '../data/companies';

function CompanyCard({ company, idx }: { company: any, idx: number }) {
  const industryText = company.industry.trim().toUpperCase().endsWith('AI') ? company.industry.trim() : `${company.industry.trim()} AI`;

  return (
    <motion.a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 5) * 0.1, duration: 0.5 }}
      className="group flex flex-col items-center justify-center gap-3 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-xl hover:border-corporate-blue/30 transition-all duration-300 relative"
    >
      {/* Industry Text */}
      <div className="w-full text-center">
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-corporate-blue uppercase">
          {industryText}
        </span>
      </div>

      {/* Logo */}
      <div className="w-full h-16 md:h-20 flex items-center justify-center">
        <img 
          src={`/assets/logos/${company.id}.png`} 
          alt={`${company.name} logo`} 
          className="max-w-[85%] max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Website Link */}
      <div className="w-full text-center">
        <span className="text-gray-400 group-hover:text-corporate-blue text-xs md:text-sm font-medium transition-colors duration-300">
          {company.website.replace('https://', '').replace('http://', '').replace(/\/$/, '')}
        </span>
      </div>
    </motion.a>
  );
}

export default function CompanyDirectory() {
  const { t } = useTranslation();

  return (
    <section id="companies" className="py-24 md:py-32 relative bg-soft-gray overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-deep-navy tracking-tight mb-16 text-center uppercase"
        >
          {t('companies.title')}
        </motion.h2>

        {/* Grid Layout: 2 cols on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {companies.map((company, idx) => (
            <CompanyCard key={company.id} company={company} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
