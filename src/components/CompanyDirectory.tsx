import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { companies } from '../data/companies';
import CompanyProfileModal from './CompanyProfileModal';

function CompanyCard({ company, idx, onClick }: { company: any, idx: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 2) * 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      onClick={onClick}
      className={`group cursor-pointer relative bg-white rounded-2xl border border-gray-100 p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(11,92,255,0.15)] hover:border-corporate-blue/20 overflow-hidden flex flex-col justify-between`}
    >
      {/* Subtle hover background shift */}
      <div className="absolute inset-0 bg-gradient-to-br from-very-light-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-16">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm p-3 group-hover:scale-105 group-hover:shadow-md transition-all duration-500">
             <img src={`/assets/logos/${company.id}.png`} alt={`${company.name} logo`} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className="px-3 py-1 bg-soft-gray border border-gray-200 text-gray-500 text-[10px] font-bold tracking-widest uppercase rounded-full">
              BOOTH {company.booth}
            </span>
          </div>
        </div>
        
        <div>
          <p className="text-[10px] font-bold tracking-widest text-corporate-blue mb-3 uppercase">{company.industry}</p>
          <h3 className="text-2xl md:text-3xl font-bold text-deep-navy tracking-tight group-hover:text-corporate-blue transition-colors duration-300">{company.name}</h3>
          
          {company.website && (
            <a 
              href={company.website} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-block mt-4 text-sm font-bold text-corporate-blue hover:text-blue-700 hover:underline transition-all"
            >
              {company.website.replace('https://', '')}
            </a>
          )}
        </div>
      </div>

      <div className="relative z-10 mt-8 flex justify-end">
         {company.website ? (
           <a 
             href={company.website} 
             target="_blank" 
             rel="noopener noreferrer"
             onClick={(e) => e.stopPropagation()}
             className="w-10 h-10 rounded-full bg-soft-gray flex items-center justify-center text-gray-400 group-hover:bg-corporate-blue group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1"
           >
              <ArrowRight className="w-5 h-5" />
           </a>
         ) : (
           <div className="w-10 h-10 rounded-full bg-soft-gray flex items-center justify-center text-gray-400 group-hover:bg-corporate-blue group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5" />
           </div>
         )}
      </div>
    </motion.div>
  );
}

export default function CompanyDirectory({ onBook }: { onBook: (companyId: string) => void }) {
  const { t } = useTranslation();
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);

  return (
    <section id="companies" className="py-32 relative bg-soft-gray overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-80"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-deep-navy tracking-tight mb-20 text-center"
        >
          {t('companies.title')}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {companies.map((company, idx) => (
            <CompanyCard key={company.id} company={company} idx={idx} onClick={() => setSelectedCompany(company)} />
          ))}
        </div>
      </div>
      
      <CompanyProfileModal 
        company={selectedCompany} 
        onClose={() => setSelectedCompany(null)} 
        onBook={() => {
          setSelectedCompany(null);
          if(selectedCompany) onBook(selectedCompany.id);
        }}
      />
    </section>
  );
}
