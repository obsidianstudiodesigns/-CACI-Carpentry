import React, { useState } from 'react';
import { Sparkles, MapPin, Eye, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/carpentryData';
import { PortfolioItem } from '../types';

interface PortfolioGalleryProps {
  onOpenQuoteModal: (projectTitle?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'tv-units', label: 'TV Media Walls' },
    { id: 'kitchen', label: 'Modern Kitchens' },
    { id: 'cupboards', label: 'Built-in Cupboards' },
    { id: 'vanities', label: 'Bathroom Vanities' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Handcrafted Portfolio</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-50 tracking-tight">
            Recent Installations & <br />
            <span className="text-gold-gradient font-editorial italic font-normal">
              Signature Work.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Real homes transformed across Klipgat, Mabopane, Soshanguve, Pretoria North, and surrounding areas.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                {/* Highlight Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-neutral-950/90 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                    {project.highlight}
                  </span>
                </div>

                {/* Quick Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-900/80 text-amber-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-neutral-700">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom in-image title */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-300/90 mb-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Specs and details footer */}
              <div className="p-4 space-y-2.5 text-left border-t border-neutral-800">
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.specs.slice(0, 2).map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-neutral-950 text-neutral-300 border border-neutral-800"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-neutral-900 border border-amber-500/30 text-center space-y-4 max-w-2xl mx-auto shadow-2xl">
          <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-neutral-100">
            Have a custom design idea for your room?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            Send us your room dimensions or Pinterest inspiration photo on WhatsApp for a quick price assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 rounded-xl bg-gold-gradient text-neutral-950 text-xs sm:text-sm font-bold shadow-lg hover:brightness-110 transition-all hover:scale-105"
            >
              Request Free Estimate
            </button>
            <a
              href="https://wa.me/27695413313?text=Hi%20CACI%20Carpentry,%20I%20have%20a%20photo%20idea%20for%20my%20house%20that%20I%20would%20like%20a%20quote%20on."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold hover:bg-emerald-900 transition-all"
            >
              Send Photo on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md animate-in fade-in">
          <div
            className="relative w-full max-w-3xl bg-neutral-900 border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl p-6 space-y-5 text-left max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                {activeProject.highlight}
              </span>
              <h3 className="font-serif-heading text-2xl font-black text-neutral-100">
                {activeProject.title}
              </h3>
              <p className="text-xs text-neutral-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeProject.location}</span>
              </p>
            </div>

            <div className="rounded-xl overflow-hidden aspect-video border border-neutral-800">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Project Overview
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Craft Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeProject.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex justify-between items-center gap-3">
              <button
                onClick={() => {
                  const title = activeProject.title;
                  setActiveProject(null);
                  onOpenQuoteModal(title);
                }}
                className="w-full py-3 rounded-xl bg-gold-gradient text-neutral-950 font-bold text-xs sm:text-sm shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Get a Similar Custom Installation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
