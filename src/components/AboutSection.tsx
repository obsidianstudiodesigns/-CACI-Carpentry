import React from 'react';
import { Ruler, ShieldCheck, Sparkles, Hammer, CheckCircle2, ArrowRight, HeartHandshake, Eye, Award } from 'lucide-react';
import { COMPANY_DETAILS, WORKFLOW_STEPS, IMAGES } from '../data/carpentryData';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-24 bg-neutral-950 text-neutral-100 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The CACI Carpentry Story</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-50 tracking-tight">
            NOT BOUGHT. <br />
            <span className="text-gold-gradient font-editorial italic font-normal">
              Built for your home.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            At CACI Carpentry, we believe every home deserves quality craftsmanship and timeless design. We do not mass-produce generic boxes — we craft signature architectural cabinetry tailored to your lifestyle.
          </p>
        </div>

        {/* 2-Column Story & Visual Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Workshop Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
                <img
                  src={IMAGES.wardrobe}
                  alt="Master Bedroom Built-in Cupboards Craftsmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Inset Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-neutral-900/95 border border-amber-500/40 backdrop-blur-md rounded-xl p-4 shadow-2xl max-w-xs space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <Award className="w-4 h-4" />
                  <span>Klipgat Showroom & Workshop</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Directly next to Mngomezulu Hardware. Visit us to feel material finishes & samples.
                </p>
              </div>

              {/* Inset Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:left-6 bg-neutral-950/95 border border-amber-500/40 rounded-xl p-3.5 shadow-2xl">
                <div className="text-2xl font-black text-gold-gradient font-serif-heading">100%</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-300">Custom Built</div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Craft Promise */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-neutral-100">
                Precision Joinery, Zero Shortcuts.
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Standard store-bought furniture forces you to compromise on dimensions, leaving empty dust-collecting gaps and flimsy particle boards. At CACI Carpentry, every cupboard is measured down to the millimeter, built from premium grade boards, and installed with expert edge-banding and heavy-duty soft-close mechanisms.
              </p>
            </div>

            {/* 4 Core Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Ruler className="w-4 h-4" />
                  <span>Precision Laser Fit</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Floor-to-ceiling customization with exact scribing around baseboards and cornices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Premium Grade Boards</span>
                </div>
                <p className="text-xs text-neutral-400">
                  High-density moisture-resistant cores engineered to prevent sagging and swelling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Eye className="w-4 h-4" />
                  <span>3D Visual Planning</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Preview realistic 3D designs of your kitchen or wardrobe before workshop cutting begins.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Hammer className="w-4 h-4" />
                  <span>Master Finishers</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Fluted vertical timber, high-gloss polyurethane, and seamless stone integration.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-neutral-950 font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Schedule a Free Measurement Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="mt-20 pt-16 border-t border-neutral-800">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-black text-neutral-100">
              Our 4-Step Crafting Journey
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              From first concept to the final polished handle, here is how we bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 transition-all group hover:-translate-y-1"
              >
                {/* Step Number */}
                <div className="text-4xl font-black font-serif-heading text-neutral-700 group-hover:text-gold-gradient transition-colors mb-3">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-neutral-100 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>

                {/* Connecting arrow for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center text-amber-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
