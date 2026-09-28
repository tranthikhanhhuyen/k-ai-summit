import React from 'react';

export default function Logistics() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-corporate-blue text-xs font-bold tracking-widest uppercase mb-4 block">On-Site Logistics</span>
            <h3 className="text-3xl md:text-5xl font-bold text-deep-navy tracking-tight mb-4">SIHUB Saigon Innovation Hub</h3>
            <p className="text-gray-600 text-lg">Hosted in Ho Chi Minh City's flagship technology innovation hub. High-density meeting booths and full delegate hospitality.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 p-5 rounded-2xl shadow-sm flex items-center max-w-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl opacity-50 -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-blue-50 flex items-center justify-center mr-4 shrink-0 relative z-10">
               <svg className="w-6 h-6 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </div>
            <p className="text-sm font-bold text-deep-navy leading-snug relative z-10">
              Complimentary Grab codes & <span className="text-corporate-blue">dining vouchers</span> for all attendees
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/venue1.jpg" alt="SIHUB Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">SIHUB Facility • 2nd Floor</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">Central Innovation Hub</h4>
              <p className="text-sm text-gray-500 leading-relaxed">273 Dien Bien Phu, Ward 7, District 3, Ho Chi Minh City. Accessible central business corridor with reserved delegate parking.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/venue2.jpg" alt="Keynote Stage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">Keynote & Tech Showcase</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">Keynote Stage & Pitching</h4>
              <p className="text-sm text-gray-500 leading-relaxed">State-of-the-art audiovisual facilities for company demonstrations, bilingual policy remarks, and commercial partnership signings.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/venue3.jpg" alt="1:1 Consultation Booths" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">Private 1-on-1 Booths</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">1:1 Consultation Stations</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Private partitioned consultation booths equipped with dedicated translators, digital presentation monitors, and concierge support.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 4 - View */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/view.jpg" alt="Ho Chi Minh City Tour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">City Exploration</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">Ho Chi Minh City Tour</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Discover Saigon's most iconic landmarks, including Notre-Dame Cathedral, Ben Thanh Market, in this exciting city exploration.</p>
            </div>
          </div>

          {/* Card 5 - Food */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/food.jpg" alt="Vietnamese culinary experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">Local Cuisine</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">Vietnamese Culinary Experience</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Embark on an authentic Vietnamese culinary experience with traditional recipes and extraordinary local flavors.</p>
            </div>
          </div>

          {/* Card 6 - Room */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/room.jpg" alt="Hotel & Transfer Benefits" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest text-deep-navy shadow-sm uppercase">Accommodation</div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-deep-navy mb-3">Hotel & Transfer Benefits</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Enjoy a comfortable stay and seamless transfers that save you time and keep you close to the main event venues.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
