import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Sliders, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/carpentryData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'kitchen', label: 'Fitted Kitchens' },
    { id: 'cupboards', label: 'Built-in Cupboards' },
    { id: 'tv-units', label: 'TV Media Walls' },
    { id: 'vanities', label: 'Bathroom Vanities' },
    { id: 'closets', label: 'Walk-in Closets' },
    { id: 'furniture', label: 'Custom Furniture' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-neutral-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>What We Craft</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-50 tracking-tight">
              Bespoke Carpentry <br />
              <span className="text-gold-gradient font-editorial italic font-normal">
                Tailored for every room.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              From statement TV units to dream kitchens, we build custom carpentry solutions that combine style, functionality, and durability.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-gradient text-neutral-950 text-xs sm:text-sm font-bold hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
            >
              {/* Image Container */}
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-neutral-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                      Custom Built
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3.5 text-left">
                  <h3 className="font-serif-heading text-xl font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key feature preview */}
                  <div className="space-y-1.5 pt-2 border-t border-neutral-800/70">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-800/60 mt-4 gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-200 flex items-center gap-1.5 py-2 group/btn"
                >
                  <span>Explore Specs & Finishes</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 border border-neutral-700 transition-colors"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
