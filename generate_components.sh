#!/bin/bash
mkdir -p src/components
mkdir -p src/data
mkdir -p public/assets/logos

cat << 'EOF' > src/data/companies.ts
export const companies = [
  { id: 'ids', name: 'IDS', booth: 'A-01', industry: 'MANUFACTURING', description: 'Smart industrial edge data and operational data solutions.', details: 'Intelligent data solutions providing automated industrial edge sensors and operational data transmission solutions for large-capacity production lines.' },
  { id: 'deep-visions', name: 'deep visions', booth: 'A-02', industry: 'COMPUTER VISION', description: 'AI-powered visual intelligence for transportation and retail environments.', details: 'Next-generation visual AI algorithms specialized in crowd density analysis in public transit and retail spatial intelligence.' },
  { id: 'hyperstar', name: 'hyperstar', booth: 'A-03', industry: 'MARKETING AI', description: 'AI-powered live-commerce and short-form content automation.', details: 'Comprehensive intelligence for live-commerce and automated short-video toolchains tailored for the Southeast Asian social commerce market.' },
  { id: 'quantit', name: 'Quantit', booth: 'B-01', industry: 'FINTECH', description: 'Quantitative financial analytics and automated institutional risk modeling.', details: 'High-speed quantitative financial engines, institutional-grade automated risk analysis systems, and portfolio volatility forecasting models.' },
  { id: 'fieldro', name: 'FieldRo', booth: 'B-02', industry: 'ROBOTICS', description: 'Autonomous mobile robotics for complex industrial environments.', details: 'Outdoor autonomous mobile robots designed for complex industrial terrains, smart construction sites, and container yards.' },
  { id: 'avalve', name: 'AVALVE', booth: 'B-03', industry: 'AGRITECH', description: 'AI-powered smart agriculture and real-time crop diagnostics.', details: 'Automated smart agriculture platform with real-time crop disease diagnostics, automated nutrient supply, and climate condition optimization.' },
  { id: 'cytur', name: 'CYTUR', booth: 'C-01', industry: 'CYBERSECURITY', description: 'Maritime cybersecurity for vessels, ports and OT environments.', details: 'Maritime cybersecurity solution suite protecting offshore energy vessels, seaport telemetry, and operational technology (OT) networks.' },
  { id: 'addd', name: 'addd', booth: 'C-02', industry: 'SMART BUILDING', description: 'Edge-based anonymous spatial and traffic analytics.', details: 'Programmatic outdoor traffic sensors and digital billboard spatial interaction analysis via anonymous edge computing.' },
  { id: 'gauss-lab', name: 'GAUSS LAB', booth: 'C-03', industry: 'ENERGY', description: 'Clean-grid balancing, battery optimization and solar generation forecasting.', details: 'Clean grid balancing models, battery energy storage system lifecycle optimization, and solar power generation forecasting data.' },
  { id: 'nextlab', name: 'nextlab', booth: 'D-01', industry: 'TEST AUTOMATION & DX', description: 'AI-powered automated testing and digital transformation.', details: 'Comprehensive AI automated testing framework for telecommunications, multimedia hardware stream testing, and enterprise digital service compliance.' }
];
EOF

cat << 'EOF' > src/components/EventSnapshot.tsx
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
EOF

cat << 'EOF' > src/components/AboutSection.tsx
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
              className="relative group"
            >
              <div className="text-6xl font-extralight text-gray-100 absolute -top-8 -left-4 z-0 group-hover:text-very-light-blue transition-colors">0{idx + 1}</div>
              <div className="relative z-10">
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
EOF

cat << 'EOF' > src/components/FocusAreas.tsx
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

        <div className="flex flex-col border-t border-gray-200">
          {areas.map((area, idx) => (
            <div 
              key={area.id}
              className="group relative border-b border-gray-200 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-very-light-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              
              <div className="relative z-10 py-8 md:py-10 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-start md:items-center w-full md:w-1/3 mb-4 md:mb-0">
                  <span className={`text-xl font-bold transition-colors duration-300 w-12 ${hoveredIndex === idx ? 'text-corporate-blue' : 'text-gray-400'}`}>
                    {area.id < 10 ? `0${area.id}` : area.id}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${hoveredIndex === idx ? 'text-deep-navy' : 'text-gray-800'}`}>
                    {area.title}
                  </h3>
                </div>
                
                <div className="w-full md:w-1/2 flex justify-between items-center pl-12 md:pl-0">
                  <p className="text-gray-500 font-medium leading-relaxed pr-8 line-clamp-2 md:line-clamp-none">
                    {area.description}
                  </p>
                  <div className={`transform transition-all duration-300 rounded-full p-3 ${hoveredIndex === idx ? 'bg-corporate-blue text-white rotate-45 md:rotate-0' : 'bg-transparent text-gray-300'}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

cat << 'EOF' > src/components/CompanyDirectory.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { companies } from '../data/companies';
import CompanyProfileModal from './CompanyProfileModal';

export default function CompanyDirectory() {
  const { t } = useTranslation();
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);

  return (
    <section id="companies" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-deep-navy tracking-tight mb-20"
        >
          {t('companies.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, idx) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              onClick={() => setSelectedCompany(company)}
              className={`group cursor-pointer border border-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white ${
                idx === 0 || idx === 3 || idx === 6 || idx === 9 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-soft-gray rounded-lg flex items-center justify-center border border-gray-100 group-hover:border-corporate-blue/30 transition-colors">
                   {/* Logo Placeholder */}
                   <span className="font-bold text-gray-400 text-xs">{company.name.slice(0,3).toUpperCase()}</span>
                </div>
                <span className="px-3 py-1 bg-very-light-blue text-corporate-blue text-xs font-bold tracking-wider rounded">
                  BOOTH {company.booth}
                </span>
              </div>
              
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">{company.industry}</p>
                <h3 className="text-2xl font-bold text-deep-navy mb-4 group-hover:text-corporate-blue transition-colors">{company.name}</h3>
                <p className="text-gray-600 font-medium line-clamp-2">{company.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <CompanyProfileModal 
        company={selectedCompany} 
        onClose={() => setSelectedCompany(null)} 
      />
    </section>
  );
}
EOF

chmod +x generate_components.sh
./generate_components.sh
