import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, Linkedin, Twitter, Globe, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    try {
      const res = await fetch('http://localhost:3001/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (!res.ok) throw new Error('Failed to subscribe');
      setStatus('success');
      setEmail('');
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <footer className="bg-deep-navy text-white relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-corporate-blue to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pb-16 mb-16 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Shape the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-corporate-blue">Tech Collaboration</span>
            </h2>
            <p className="text-gray-400 font-medium">Join the exclusive network of Korean and Vietnamese tech innovators.</p>
          </div>
          <div className="w-full lg:w-auto relative min-h-[56px] min-w-[300px]">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center text-green-400 font-bold px-6 py-4 rounded border border-green-400/30 bg-green-400/10 absolute inset-0 w-full h-full"
                >
                  <CheckCircle2 className="w-5 h-5 mr-3" />
                  Successfully subscribed!
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onSubmit={handleSubscribe} 
                  className="flex flex-col sm:flex-row gap-4 absolute inset-0 w-full"
                >
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your corporate email" 
                    className="bg-white/5 border border-white/10 text-white px-6 py-4 rounded focus:outline-none focus:border-corporate-blue transition-colors w-full sm:min-w-[300px]"
                  />
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="px-8 py-4 bg-corporate-blue text-white font-bold rounded hover:bg-blue-600 transition-colors flex items-center justify-center whitespace-nowrap disabled:opacity-70"
                  >
                    {status === 'submitting' ? '...' : 'Subscribe'} 
                    {status !== 'submitting' && <ArrowRight className="w-4 h-4 ml-2" />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            {status === 'error' && (
              <p className="text-red-400 text-xs font-bold mt-2 absolute -bottom-6">Failed to subscribe. Please try again.</p>
            )}
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              K-AI
            </h3>
            <span className="text-corporate-blue block text-xs font-bold tracking-widest uppercase mb-6">GLOBAL VALUE CHAIN</span>
            <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8">
              Connecting Korea's leading AI, Robotics, and Automation innovators with Vietnam's rapidly growing digital economy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-corporate-blue transition-colors text-gray-400 hover:text-white"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-corporate-blue transition-colors text-gray-400 hover:text-white"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-corporate-blue transition-colors text-gray-400 hover:text-white"><Globe className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div className="lg:ml-auto">
            <h4 className="text-xs font-bold tracking-widest text-white mb-6 uppercase">{t('footer.event')}</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#overview" className="hover:text-corporate-blue transition-colors">{t('header.nav.overview')}</a></li>
              <li><a href="#agenda" className="hover:text-corporate-blue transition-colors">{t('header.nav.agenda')}</a></li>
              <li><a href="#focus" className="hover:text-corporate-blue transition-colors">{t('header.nav.focusAreas')}</a></li>
              <li><a href="#companies" className="hover:text-corporate-blue transition-colors">{t('header.nav.aiCompanies')}</a></li>
              <li><a href="#venue" className="hover:text-corporate-blue transition-colors">{t('header.nav.venue')}</a></li>
            </ul>
          </div>
          
          <div className="lg:ml-auto">
            <h4 className="text-xs font-bold tracking-widest text-white mb-6 uppercase">{t('footer.business')}</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#companies" className="hover:text-corporate-blue transition-colors">1:1 Consultation</a></li>
              <li><a href="#register" className="hover:text-corporate-blue transition-colors">Registration Hub</a></li>
              <li><a href="#contact" className="hover:text-corporate-blue transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-corporate-blue transition-colors">Sponsorships</a></li>
            </ul>
          </div>
          
          <div className="lg:ml-auto">
            <h4 className="text-xs font-bold tracking-widest text-white mb-6 uppercase">Organized By</h4>
            <div className="flex flex-col space-y-4">
              <div className="bg-white p-2 rounded w-32 flex items-center justify-center">
                <img src="/assets/kosme.png" alt="KOSME" className="w-full h-auto object-contain" />
              </div>
              <div className="bg-white p-2 rounded w-32 flex items-center justify-center">
                <img src="/assets/techvalley.png" alt="Tech Valley" className="w-full h-auto object-contain" />
              </div>
            </div>
            
            <h4 className="text-xs font-bold tracking-widest text-white mb-6 uppercase mt-8">{t('footer.legal')}</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', {detail: 'privacy'}))} className="hover:text-corporate-blue transition-colors">Privacy Framework</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', {detail: 'terms'}))} className="hover:text-corporate-blue transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-500 tracking-wider">
          <p>© 2026 K-AI GLOBAL VALUE CHAIN. All rights reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
             <button onClick={() => i18n.changeLanguage('en')} className={`transition-colors ${i18n.language === 'en' ? 'text-white' : 'hover:text-white'}`}>EN</button>
             <button onClick={() => i18n.changeLanguage('vi')} className={`transition-colors ${i18n.language === 'vi' ? 'text-white' : 'hover:text-white'}`}>VI</button>
             <button onClick={() => i18n.changeLanguage('kr')} className={`transition-colors ${i18n.language === 'kr' ? 'text-white' : 'hover:text-white'}`}>KR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
