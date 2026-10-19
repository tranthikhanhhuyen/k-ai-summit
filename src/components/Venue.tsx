import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const venueMapUrl = 'https://www.google.com/maps?q=123+Tr%C6%B0%C6%A1ng+%C4%90%E1%BB%8Bnh,+Ph%C6%B0%E1%BB%9Dng+Xu%C3%A2n+H%C3%B2a,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh&output=embed';
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=123%20Tr%C6%B0%C6%A1ng%20%C4%90%E1%BB%8Bnh%2C%20Ph%C6%B0%E1%BB%9Dng%20Xu%C3%A2n%20H%C3%B2a%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh';

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
            
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-deep-navy font-bold tracking-widest text-sm hover:text-corporate-blue transition-colors group">
              <Navigation className="w-4 h-4 mr-2" />
              {t('venue.getDirections')}
              <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-blue transition-all group-hover:w-full"></span>
            </a>
          </motion.div>
        </div>
        
        {/* Right: Map Visualization */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
          <iframe 
            src={venueMapUrl}
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
