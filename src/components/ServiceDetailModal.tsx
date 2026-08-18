import React from 'react';
import { X, CheckCircle2, Sparkles, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_DETAILS } from '../data/carpentryData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote,
}) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi CACI Carpentry, I'm interested in getting a custom quote for *${service.title}*. Please let me know the process for consultation and measurements.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="space-y-1 pr-8">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Bespoke Craftsmanship
          </span>
          <h3 className="font-serif-heading text-2xl sm:text-3xl font-black text-neutral-100">
            {service.title}
          </h3>
          <p className="text-sm text-neutral-400">{service.subtitle}</p>
        </div>

        {/* Featured Image Banner */}
        <div className="relative rounded-xl overflow-hidden aspect-video border border-neutral-800">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-amber-200">
            <span className="bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-amber-500/30">
              100% Custom Built to Size
            </span>
            <span className="bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-sm">
              Klipgat Workshop
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            Overview & Specifications
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            Included Craft Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-300"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Configurations & Finishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-2">
            <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wide">
              Popular Layouts
            </h5>
            <ul className="space-y-1 text-xs text-neutral-400">
              {service.popularChoices.map((choice, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{choice}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-2">
            <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wide">
              Available Finishes
            </h5>
            <ul className="space-y-1 text-xs text-neutral-400">
              {service.finishes.map((finish, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{finish}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <a
            href={`https://wa.me/27695413313?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp (069 541 3313)</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-neutral-950 text-xs font-bold hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request Exact Price Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
