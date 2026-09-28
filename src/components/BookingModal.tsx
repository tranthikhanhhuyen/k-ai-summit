import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { companies } from '../data/companies';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preselectedCompany?: string | null;
}

export default function BookingModal({ isOpen, onClose, preselectedCompany }: Props) {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      companyId: formData.get('companyId'),
      timeSlot: formData.get('timeSlot'),
      needsInterpreter: formData.get('needsInterpreter') === 'on',
      needsPilot: formData.get('needsPilot') === 'on',
      needsRD: formData.get('needsRD') === 'on'
    };

    try {
      await addDoc(collection(db, 'bookings'), {
        ...data,
        createdAt: new Date().toISOString()
      });
      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-deep-navy/60 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-soft-gray/50 sticky top-0 z-10">
            <h2 className="text-xl md:text-2xl font-bold text-deep-navy">
              {!isSubmitted ? t('bookingModal.title') : 'Request Sent'}
            </h2>
            <button onClick={handleClose} className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 md:p-8 overflow-y-auto relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2">{t('bookingModal.selectCompany')}</label>
                    <select 
                      name="companyId"
                      defaultValue={preselectedCompany || ''}
                      required
                      className="w-full bg-soft-gray border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-colors text-deep-navy appearance-none"
                    >
                      <option value="" disabled>-- Select --</option>
                      {companies.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2">{t('bookingModal.selectTime')}</label>
                    <select name="timeSlot" required className="w-full bg-soft-gray border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-colors text-deep-navy appearance-none">
                      <option value="" disabled>-- Select --</option>
                      <optgroup label={t('bookingModal.morning')}>
                        <option value="10:00">10:00 – 10:25</option>
                        <option value="10:30">10:30 – 10:55</option>
                        <option value="11:00">11:00 – 11:25</option>
                      </optgroup>
                      <optgroup label={t('bookingModal.afternoon')}>
                        <option value="14:00">14:00 – 14:25</option>
                        <option value="14:30">14:30 – 14:55</option>
                        <option value="15:00">15:00 – 15:25</option>
                        <option value="15:30">15:30 – 15:55</option>
                        <option value="16:00">16:00 – 16:25</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <label className="block text-xs font-bold text-gray-500 tracking-wider mb-4 uppercase">Additional Options</label>
                    <div className="space-y-4">
                      <label className="flex items-start cursor-pointer group">
                        <div className="flex-shrink-0 mt-0.5">
                          <input type="checkbox" name="needsInterpreter" className="w-4 h-4 rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue" />
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-deep-navy transition-colors">{t('bookingModal.options.interpreter')}</span>
                      </label>
                      <label className="flex items-start cursor-pointer group">
                        <div className="flex-shrink-0 mt-0.5">
                          <input type="checkbox" name="needsPilot" className="w-4 h-4 rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue" />
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-deep-navy transition-colors">{t('bookingModal.options.pilot')}</span>
                      </label>
                      <label className="flex items-start cursor-pointer group">
                        <div className="flex-shrink-0 mt-0.5">
                          <input type="checkbox" name="needsRD" className="w-4 h-4 rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue" />
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-deep-navy transition-colors">{t('bookingModal.options.rd')}</span>
                      </label>
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                  <div className="pt-8">
                    <button type="submit" disabled={isSubmitting} className="w-full bg-deep-navy hover:bg-corporate-blue text-white py-4 rounded font-bold tracking-wide transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? 'SUBMITTING...' : t('bookingModal.cta')}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-navy mb-4">Meeting Requested!</h3>
                  <p className="text-gray-500 mb-8 max-w-sm">
                    Your 1:1 meeting request has been recorded. Our team will verify the schedule and send a confirmation shortly.
                  </p>
                  <button 
                    onClick={handleClose}
                    className="w-full bg-soft-gray hover:bg-gray-200 text-deep-navy py-4 rounded font-bold tracking-wide transition-colors"
                  >
                    CLOSE
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
