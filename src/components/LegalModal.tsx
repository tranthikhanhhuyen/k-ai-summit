import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function LegalModal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<'privacy' | 'terms'>('privacy');

  useEffect(() => {
    const handleOpen = (e: any) => {
      setType(e.detail);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openLegalModal', handleOpen);
    return () => {
      window.removeEventListener('openLegalModal', handleOpen);
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const privacyContent = (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <h2 className="text-2xl font-bold text-deep-navy mb-4">{t('legalModal.privacyTitle')}</h2>
      <p>{t('legalModal.p1')}</p>
      <p>{t('legalModal.p2')}</p>
      <p>{t('legalModal.p3')}</p>
      <p>{t('legalModal.p4')}</p>
      <p>{t('legalModal.p5')}</p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <h2 className="text-2xl font-bold text-deep-navy mb-4">{t('legalModal.termsTitle')}</h2>
      <p>{t('legalModal.t1')}</p>
      <p>{t('legalModal.t2')}</p>
      <p>{t('legalModal.t3')}</p>
      <p>{t('legalModal.t4')}</p>
      <p>{t('legalModal.t5')}</p>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-deep-navy/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={close}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {type === 'privacy' ? privacyContent : termsContent}
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <button onClick={close} className="px-6 py-3 bg-corporate-blue text-white rounded font-bold hover:bg-blue-600 transition-colors">
                {t('legalModal.understand')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
