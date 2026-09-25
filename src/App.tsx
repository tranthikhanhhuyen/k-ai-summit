import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventSnapshot from './components/EventSnapshot';
import AboutSection from './components/AboutSection';
import FocusAreas from './components/FocusAreas';
import CompanyDirectory from './components/CompanyDirectory';
import Logistics from './components/Logistics';
import Agenda from './components/Agenda';
import MatchingSection from './components/MatchingSection';
import VIPPerks from './components/VIPPerks';
import Venue from './components/Venue';
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LegalModal from './components/LegalModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero onBook={() => setIsBookingOpen(true)} />
        <EventSnapshot />
        <AboutSection />
        <FocusAreas />
        <CompanyDirectory onBook={() => setIsBookingOpen(true)} />
        <Logistics />
        <Agenda />
        <MatchingSection onBook={() => setIsBookingOpen(true)} />
        <VIPPerks />
        <Venue />
        <RegistrationForm />
        <Contact />
      </main>
      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      <LegalModal />
    </div>
  );
}

export default App;
