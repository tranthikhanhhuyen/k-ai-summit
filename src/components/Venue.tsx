import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function Venue() {
  const { t } = useTranslation();

  return (
    <section id="venue" className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left: Info */}
        <div className="w-full lg:w-1/2 py-24 px-6 md:px-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy tracking-tight mb-8">
              {t('venue.title').split('\n').map((part, i) => (
                <React.Fragment key={i}>
                  {i === 0 ? <span className="block text-corporate-blue mb-2 text-2xl tracking-widest">{part}</span> : part}
                </React.Fragment>
              ))}
            </h2>
            
            <div className="flex items-start mt-12 mb-12">
              <MapPin className="w-6 h-6 text-corporate-blue mr-4 flex-shrink-0 mt-1" />
              <p className="text-xl text-gray-600 font-medium leading-loose whitespace-pre-line">
                {t('venue.address')}
              </p>
            </div>
            
            <a href="#" className="inline-flex items-center text-deep-navy font-bold tracking-widest text-sm hover:text-corporate-blue transition-colors group">
              <Navigation className="w-4 h-4 mr-2" />
              {t('venue.getDirections')}
              <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-blue transition-all group-hover:w-full"></span>
            </a>
          </motion.div>
        </div>
        
        {/* Right: Map Visualization */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.278361026048!2d106.68748301138243!3d10.790013058866734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cd61d76b1f%3A0xc3c544faeebf7514!2sSaigon%20Innovation%20Hub!5e0!3m2!1sen!2svn!4v1700000000000!5m2!1sen!2svn" 
            className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SIHUB Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
