import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, Heart, ArrowUp } from 'lucide-react';
import { CaciLogo } from './CaciLogo';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/carpentryData';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-100 border-t border-amber-500/30 relative overflow-hidden">
      {/* Subtle top gold glow line */}
      <div className="h-1 w-full bg-gold-gradient opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <CaciLogo size="lg" />
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              At CACI Carpentry, we believe every home deserves quality craftsmanship and timeless design. From custom-built cupboards and modern kitchens to statement TV units and vanity cabinets, we craft signature pieces made to fit your space perfectly.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="text-[11px] font-bold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                ★ 100% Quality Guaranteed
              </span>
              <span className="text-[11px] font-bold text-neutral-300 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                Built to Last
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  About Our Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Carpentry Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('portfolio')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Recent Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('calculator')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Quote Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Our Signature Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenQuoteModal(s.title)}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Workshop & Showroom:</strong><br />
                  {COMPANY_DETAILS.location}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={COMPANY_DETAILS.phoneHref} className="hover:text-amber-300">
                  Call: <strong className="text-neutral-100">{COMPANY_DETAILS.phone}</strong>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={COMPANY_DETAILS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: {COMPANY_DETAILS.whatsapp}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full py-2.5 px-3 rounded-lg bg-gold-gradient text-neutral-950 font-bold text-xs shadow-md hover:brightness-110 transition-all"
              >
                Request Free Measurement Visit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Slogans */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} CACI Carpentry. All rights reserved. Custom Carpentry. Built for Life.
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span className="font-editorial italic text-amber-300/90 text-sm">
              Quality Workmanship. Modern Designs. Lasting Impressions.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-800 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
