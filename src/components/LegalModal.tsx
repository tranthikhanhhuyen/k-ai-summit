import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LegalModal() {
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
      <h2 className="text-2xl font-bold text-deep-navy mb-4">Privacy Framework</h2>
      <p><strong>1. Data Collection:</strong> We collect professional contact information necessary for facilitating business matching and event registration (e.g., name, company, job title, email address).</p>
      <p><strong>2. Use of Information:</strong> The information is exclusively used to organize 1:1 business consultations, provide event updates, and coordinate logistics prior to and during the BILATERAL SUMMIT 2026.</p>
      <p><strong>3. Data Sharing:</strong> Your professional details may be shared with matching counterparties (Korean or Vietnamese companies) specifically for the purpose of scheduling consultations. Data will not be sold to third-party marketers.</p>
      <p><strong>4. Security:</strong> We implement industry-standard security measures to ensure your data is protected against unauthorized access or disclosure.</p>
      <p><strong>5. Your Rights:</strong> You have the right to request access to, modification, or deletion of your personal data at any time by contacting our support team.</p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <h2 className="text-2xl font-bold text-deep-navy mb-4">Terms of Service</h2>
      <p><strong>1. Event Participation:</strong> Registration for the BILATERAL SUMMIT 2026 does not guarantee confirmation. The organizers (KOSME & Tech Valley) reserve the right to select participants based on business relevance and matching capacity.</p>
      <p><strong>2. Code of Conduct:</strong> All delegates are expected to conduct themselves professionally. The organizers reserve the right to revoke access for any inappropriate behavior.</p>
      <p><strong>3. Media Release:</strong> By attending the event, you consent to being photographed or recorded. These materials may be used for promotional and archival purposes.</p>
      <p><strong>4. Intellectual Property:</strong> Any materials, presentations, or data shared during the keynote sessions or 1:1 consultations remain the intellectual property of their respective owners.</p>
      <p><strong>5. Liability:</strong> The organizers are not liable for any direct or indirect business outcomes, partnerships, or agreements that arise from consultations held during the summit.</p>
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
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
