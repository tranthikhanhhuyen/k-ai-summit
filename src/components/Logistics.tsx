import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Logistics() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-corporate-blue text-xs font-bold tracking-widest uppercase mb-4 block">{t('logistics.sectionLabel')}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-deep-navy tracking-tight mb-4">{t('logistics.title')}</h3>
            <p className="text-gray-600 text-lg">{t('logistics.subtitle')}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 p-5 rounded-2xl shadow-sm flex items-center max-w-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl opacity-50 -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-blue-50 flex items-center justify-center mr-4 shrink-0 relative z-10">
               <svg className="w-6 h-6 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </div>
            <p className="text-sm font-bold text-deep-navy leading-snug relative z-10">
              {t('logistics.badge.prefix')} <span className="text-corporate-blue">{t('logistics.badge.highlight')}</span>{t('logistics.badge.suffix')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/venue1.jpg" alt={t('logistics.card1.title')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">{t('logistics.card1.badge')}</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">{t('logistics.card1.title')}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t('logistics.card1.desc')}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/venue2.jpg" alt={t('logistics.card2.title')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">{t('logistics.card2.badge')}</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">{t('logistics.card2.title')}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t('logistics.card2.desc')}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/venue3.jpg" alt={t('logistics.card3.title')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">{t('logistics.card3.badge')}</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">{t('logistics.card3.title')}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t('logistics.card3.desc')}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 4 - View */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/view.jpg" alt={t('logistics.card4.title')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">{t('logistics.card4.badge')}</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">{t('logistics.card4.title')}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t('logistics.card4.desc')}</p>
            </div>
          </div>

          {/* Card 5 - Food */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/food.jpg" alt={t('logistics.card5.title')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">{t('logistics.card5.badge')}</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">{t('logistics.card5.title')}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t('logistics.card5.desc')}</p>
            </div>
          </div>

          {/* Card 6 - Room */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/room.jpg" alt={t('logistics.card6.title')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">{t('logistics.card6.badge')}</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">{t('logistics.card6.title')}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t('logistics.card6.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
