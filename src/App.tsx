import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsBanner } from './components/PillarsBanner';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState<string>('Built-in Cupboards & Wardrobes');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuoteDefaultService(serviceTitle);
    }
    setIsQuoteModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Fixed Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <main>
        {/* 1. Hero Section with 3D photorealistic wallpaper background */}
        <HeroSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Core Value Pillars Banner from Flyers */}
        <PillarsBanner />

        {/* 3. About & Master Crafting Journey */}
        <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 4. Full Carpentry Catalog & Service Highlights */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceDetail(service)}
          onOpenQuoteModal={(title) => handleOpenQuoteModal(title)}
        />

        {/* 5. Recent Signature Projects & Installations */}
        <PortfolioGallery
          onOpenQuoteModal={(title) => handleOpenQuoteModal(title)}
        />

        {/* 6. Interactive 3D Quote & Material Estimator */}
        <InteractiveQuoteCalculator
          initialService={quoteDefaultService}
        />

        {/* 7. Why Choose Bespoke Carpentry vs Store Flat-Packs */}
        <WhyChooseUs />

        {/* 8. Verified Homeowner Testimonials */}
        <TestimonialsSection />

        {/* 9. Direct Contact, Location Map Info & Booking */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenQuoteModal={(title) => handleOpenQuoteModal(title)}
      />

      {/* Floating Instant WhatsApp Button with Callout */}
      <WhatsAppFloatingButton />

      {/* Detailed Service Inspection Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onOpenQuote={(title) => handleOpenQuoteModal(title)}
      />

      {/* Quick Booking & Free Measurement Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={quoteDefaultService}
      />
    </div>
  );
}
