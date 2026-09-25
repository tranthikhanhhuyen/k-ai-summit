import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto bg-very-light-blue rounded-2xl p-10 md:p-16 border border-corporate-blue/10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-navy tracking-tight mb-4">{t('contact.title')}</h2>
            <div className="text-deep-navy mb-6">
              <p className="font-bold text-lg mb-2">Ms. Do Huong Giang <span className="text-gray-400 font-normal mx-2">•</span> <span className="text-corporate-blue">Tech Valley</span></p>
              <div className="flex flex-col space-y-2 mt-4 text-sm font-medium">
                <a href="mailto:giang@techvalleyvn.net" className="flex items-center hover:text-corporate-blue transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-gray-500 w-16">Email:</span> giang@techvalleyvn.net
                </a>
                <a href="tel:+84982238621" className="flex items-center hover:text-corporate-blue transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-gray-500 w-16">Direct:</span> (+84) 982 238 621
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
               <span>VIETNAMESE</span>
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
               <span>한국어</span>
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
               <span>ENGLISH</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
            <a href={`mailto:giang@techvalleyvn.net`} className="inline-flex items-center justify-center px-8 py-4 bg-deep-navy text-white font-bold rounded hover:bg-corporate-blue transition-colors shadow-lg">
              <Mail className="w-4 h-4 mr-2" />
              {t('contact.emailBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
