import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, CheckCircle2, ArrowRight, Award, Compass, Shield } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/carpentryData';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onExploreServices,
}) => {
  const valueBadges = [
    { label: 'Custom Made', desc: 'Made to fit your space' },
    { label: 'Perfect Fit', desc: '0mm gap laser precision' },
    { label: 'Premium Materials', desc: 'Moisture-resistant boards' },
    { label: 'Expert Finishes', desc: 'Luxury fluted & gloss' },
    { label: 'Built to Last', desc: 'Guaranteed durability' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 lg:pt-36 pb-20 flex items-center overflow-hidden">
      {/* 3D Photorealistic Wallpaper Background with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="CACI Carpentry 3D Luxury Modern Interior Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-10000"
        />
        {/* Deep ambient vignette and gold glow overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-neutral-300 uppercase">
                Every Home Deserves A
              </p>
              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-50 leading-[1.08]">
                SIGNATURE <br className="hidden sm:inline" />
                <span className="text-gold-gradient font-editorial italic font-normal">
                  Piece.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-amber-200/90">
                Designed exclusively for your home.
              </p>
            </div>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              From statement TV media walls to dream modern kitchens and floor-to-ceiling built-in cupboards, we craft bespoke interior woodwork that transforms your space and lasts for generations.
            </p>

            {/* 5 Core Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-xl">
              {valueBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/70 border border-neutral-800 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className="text-xs font-bold text-neutral-100 block truncate">{badge.label}</span>
                    <span className="text-[10px] text-neutral-400 block truncate">{badge.desc}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-950/40 border border-amber-500/30 backdrop-blur-sm">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div className="truncate">
                  <span className="text-xs font-bold text-amber-200 block truncate">100% Guaranteed</span>
                  <span className="text-[10px] text-amber-300/70 block truncate">Master Craftsmanship</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onOpenQuoteModal}
                id="hero-request-quote-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-neutral-950 bg-gold-gradient hover:brightness-110 shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free 3D Measurement & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_DETAILS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl text-sm font-bold text-emerald-300 bg-neutral-900/90 hover:bg-neutral-800 border border-emerald-500/40 shadow-lg hover:border-emerald-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {COMPANY_DETAILS.whatsapp}</span>
              </a>
            </div>

            {/* Quick Contact & Showroom Address Row */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 border-t border-neutral-800/80">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_DETAILS.location}</span>
              </div>
              <a
                href={COMPANY_DETAILS.phoneHref}
                className="flex items-center gap-2 hover:text-amber-300 text-neutral-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card / Floating Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 bg-neutral-900/80 backdrop-blur-xl shadow-2xl p-4 sm:p-5 space-y-4">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                    Featured Masterpiece
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700 font-mono">
                  Klipgat Workshop
                </span>
              </div>

              {/* Showcase Image with interactive preview */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-neutral-800">
                <img
                  src={IMAGES.tvUnit}
                  alt="Custom TV unit and media wall with fluted wood and ambient LED"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-amber-500/30">
                      Signature Media Wall
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1">Fluted Oak & Calacatta Stone</h3>
                  </div>
                  <button
                    onClick={onExploreServices}
                    className="text-xs font-semibold text-amber-300 hover:text-amber-100 flex items-center gap-1 bg-neutral-900/80 px-2.5 py-1.5 rounded-lg border border-neutral-700"
                  >
                    <span>View More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Service Highlights Grid */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-1">
                  <div className="text-amber-400 text-xs font-bold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Kitchen Units</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">Custom islands & quartz tops</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-1">
                  <div className="text-amber-400 text-xs font-bold flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Built-In Cupboards</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">Floor-to-ceiling mirrored doors</p>
                </div>
              </div>

              {/* Bottom Quote Prompt */}
              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 hover:from-amber-500/30 hover:to-amber-500/30 border border-amber-500/50 text-amber-200 text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Book a Free Home Measurement Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
