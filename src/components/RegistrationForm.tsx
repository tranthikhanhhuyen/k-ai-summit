import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function RegistrationForm() {
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
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      industry: formData.get('industry'),
      preferredPartner: formData.get('preferredPartner'),
      needsInterpreter: formData.get('needsInterpreter') === 'on',
      needsTransportation: formData.get('needsTransportation') === 'on'
    };

    try {
      const res = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!res.ok) throw new Error('Failed to submit');
      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-32 bg-soft-gray border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy tracking-tight mb-4">{t('registration.headline')}</h2>
            <p className="text-gray-500 font-medium">{t('registration.subtitle')}</p>
          </div>

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2">{t('registration.form.name')}</label>
                    <input type="text" name="name" required className="w-full bg-soft-gray border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2">{t('registration.form.email')}</label>
                    <input type="email" name="email" required className="w-full bg-soft-gray border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2">{t('registration.form.company')}</label>
                    <input type="text" name="company" required className="w-full bg-soft-gray border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2">{t('registration.form.phone')}</label>
                    <input type="tel" name="phone" required className="w-full bg-soft-gray border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2">{t('registration.form.industry')}</label>
                  <select name="industry" required className="w-full bg-soft-gray border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-colors text-deep-navy appearance-none">
                    <option value="">-- Select Industry --</option>
                    <option value="manufacturing">Manufacturing & Industrial</option>
                    <option value="robotics">Robotics & Logistics</option>
                    <option value="agritech">Agriculture & AgriTech</option>
                    <option value="transit">Airport & Public Transit</option>
                    <option value="retail">Marketing, Retail & E-Commerce</option>
                    <option value="cybersecurity">Maritime Cybersecurity</option>
                    <option value="fintech">Finance & FinTech</option>
                    <option value="energy">Energy & Renewable Energy</option>
                    <option value="smartbuilding">Smart Infrastructure & Smart Building</option>
                    <option value="ai">AI & Computer Vision</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2">{t('registration.form.preferredPartner')}</label>
                  <select name="preferredPartner" className="w-full bg-soft-gray border border-gray-200 px-4 py-3 rounded focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-colors text-deep-navy appearance-none">
                    <option value="">-- Optional --</option>
                    <option value="ids">IDS</option>
                    <option value="deep-visions">deep visions</option>
                    <option value="hyperstar">hyperstar</option>
                    <option value="quantit">Quantit</option>
                    <option value="fieldro">FieldRo</option>
                    <option value="avalve">AVALVE</option>
                    <option value="cytur">CYTUR</option>
                    <option value="addd">addd</option>
                    <option value="gauss-lab">GAUSS LAB</option>
                    <option value="nextlab">nextlab</option>
                  </select>
                </div>
                
                <div className="pt-4 space-y-4">
                  <label className="flex items-start cursor-pointer group">
                    <div className="flex-shrink-0 mt-0.5">
                      <input type="checkbox" name="needsInterpreter" className="w-4 h-4 rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue" />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-deep-navy transition-colors">{t('registration.form.interpreter')}</span>
                  </label>
                  <label className="flex items-start cursor-pointer group">
                    <div className="flex-shrink-0 mt-0.5">
                      <input type="checkbox" name="needsTransportation" className="w-4 h-4 rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue" />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-deep-navy transition-colors">{t('registration.form.transportation')}</span>
                  </label>
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <div className="pt-8">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-deep-navy hover:bg-corporate-blue text-white py-4 rounded font-bold tracking-wide transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'SUBMITTING...' : t('registration.cta')}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-deep-navy mb-4">Registration Received!</h3>
                <p className="text-gray-500 mb-8 max-w-md">
                  Thank you for registering for the BILATERAL SUMMIT 2026. Our team will review your application and send a confirmation to your email shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-corporate-blue font-bold tracking-widest text-sm hover:text-blue-700 transition-colors"
                >
                  SUBMIT ANOTHER
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-12 flex flex-col items-center justify-center border-t border-gray-100 pt-8">
             <div className="w-32 h-32 bg-white border border-gray-200 p-2 rounded shadow-sm mb-4">
               <img src="/assets/qr-code.jpg" alt="Event QR Code" className="w-full h-full object-contain" />
             </div>
             <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">{t('registration.calendar')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
