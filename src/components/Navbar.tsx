import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CaciLogo } from './CaciLogo';
import { COMPANY_DETAILS } from '../data/carpentryData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Us' },
    { id: 'calculator', label: 'Quote Estimator' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-2.5'
          : 'bg-gradient-to-b from-neutral-950/95 via-neutral-950/70 to-transparent py-4'
      }`}
    >
      {/* Top micro bar with contact info */}
      <div className="hidden lg:block border-b border-neutral-800/60 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-neutral-400">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-amber-300/90">
              <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{COMPANY_DETAILS.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Quality Workmanship • Modern Designs • Lasting Impressions</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={COMPANY_DETAILS.phoneHref}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: <strong className="text-neutral-200 font-semibold">{COMPANY_DETAILS.phone}</strong></span>
            </a>
            <span className="text-neutral-700">|</span>
            <a
              href={COMPANY_DETAILS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20 text-emerald-400" />
              <span>WhatsApp: <strong className="text-emerald-300">{COMPANY_DETAILS.whatsapp}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none group flex items-center"
            id="nav-brand-logo-btn"
          >
            <CaciLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-amber-300 bg-amber-500/10 border border-amber-500/30'
                      : 'text-neutral-300 hover:text-amber-200 hover:bg-neutral-900/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_DETAILS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              id="header-quote-modal-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-neutral-950 bg-gold-gradient hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-neutral-950" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-neutral-950 bg-gold-gradient shadow-md"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg bg-neutral-900 text-neutral-200 hover:text-amber-400 border border-neutral-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-amber-500/30 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeSection === item.id
                    ? 'text-amber-300 bg-amber-500/10 border border-amber-500/30'
                    : 'text-neutral-300 hover:bg-neutral-900'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 space-y-2.5">
            <div className="text-xs text-neutral-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{COMPANY_DETAILS.location}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={COMPANY_DETAILS.phoneHref}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Us</span>
              </a>
              <a
                href={COMPANY_DETAILS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-lg bg-gold-gradient text-neutral-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Free Custom Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
