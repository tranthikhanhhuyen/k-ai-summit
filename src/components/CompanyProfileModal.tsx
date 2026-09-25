import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { companies } from '../data/companies';

interface Props {
  company: typeof companies[0] | null;
  onClose: () => void;
  onBook: () => void;
}

export default function CompanyProfileModal({ company, onClose, onBook }: Props) {
  const { t } = useTranslation();

  if (!company) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex justify-end bg-deep-navy/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col overflow-y-auto"
        >
          <div className="p-8 md:p-12 border-b border-gray-100 flex justify-between items-center bg-soft-gray/50 sticky top-0 z-10 backdrop-blur-md">
            <div className="flex items-center space-x-4">
               <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-100 shadow-sm p-2">
                  <img src={`/assets/logos/${company.id}.png`} alt={`${company.name} logo`} className="w-full h-full object-contain" />
               </div>
               <div>
                  <h2 className="text-2xl font-bold text-deep-navy">{company.name}</h2>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="px-2 py-0.5 bg-very-light-blue text-corporate-blue text-[10px] font-bold tracking-wider rounded">BOOTH {company.booth}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{company.industry}</span>
                  </div>
               </div>
            </div>
            <button onClick={onClose} className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 text-gray-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-8 md:p-12 flex-grow">
            <h3 className="text-xl font-bold text-deep-navy mb-6">{t('companies.title')}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{company.details}</p>
            
            <div className="bg-soft-gray p-8 rounded-xl border border-gray-100 mb-12">
              <h4 className="font-bold text-deep-navy mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-corporate-blue" />
                {t('matching.flow.consult')}
              </h4>
              <p className="text-sm text-gray-500 mb-6">{t('matching.supportText')}</p>
              
              <button 
                onClick={onBook}
                className="w-full bg-deep-navy hover:bg-corporate-blue text-white py-4 rounded font-bold tracking-wide transition-colors"
              >
                {t('companies.bookMeeting')}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
