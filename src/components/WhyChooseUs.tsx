import React from 'react';
import { ShieldCheck, Check, X, Sparkles, Ruler, Award, Wrench, Clock, Zap } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/carpentryData';

export const WhyChooseUs: React.FC = () => {
  const comparison = [
    {
      feature: 'Fit & Measurements',
      caci: '100% Custom to the millimeter (floor-to-ceiling, wall-to-wall with zero gap scribing)',
      others: 'Fixed dimensions leaving awkward gaps, dust traps, and wasted overhead space',
    },
    {
      feature: 'Core Board Quality',
      caci: 'High-density moisture-resistant (HMR) boards engineered for South African climate',
      others: 'Standard lightweight particle boards that swell when exposed to moisture',
    },
    {
      feature: 'Hardware & Hinges',
      caci: 'Heavy-duty soft-close hinges, full-extension ball-bearing drawer runners',
      others: 'Cheap loose hinges that sag or squeak after few months of use',
    },
    {
      feature: 'Design & Finishes',
      caci: 'Luxury vertical fluted wood slats, calacatta stone, ambient LED channels, high-gloss',
      others: 'Generic foil-wrap melamine paper with peeling edges',
    },
    {
      feature: 'Installation Service',
      caci: 'Professional master carpenters on-site for clean, seamless fit and final polish',
      others: 'Self-assembly flat packs or third-party handyman without guarantee',
    },
  ];

  return (
    <section className="py-24 bg-neutral-900/40 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>The CACI Difference</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-50 tracking-tight">
            Why Custom Built Is <br />
            <span className="text-gold-gradient font-editorial italic font-normal">
              Worth Every Cent.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Compare our bespoke master carpentry approach against mass-produced store flat-packs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-amber-500/30 bg-neutral-950/90 shadow-2xl mb-16">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/80">
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-neutral-400 w-1/4">
                  Feature
                </th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 w-2/5 border-x border-amber-500/20">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>CACI Carpentry (Bespoke)</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-neutral-500 w-1/3">
                  Standard Flat-Pack / Store Bought
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-xs sm:text-sm">
              {comparison.map((item, idx) => (
                <tr key={idx} className="hover:bg-neutral-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-neutral-200">
                    {item.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-amber-100 bg-amber-500/5 font-medium border-x border-amber-500/20">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{item.caci}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-neutral-400">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
                      <span>{item.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3 Pillars cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Ruler className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-lg font-bold text-neutral-100">
              Perfect Space Maximization
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every inch of vertical and horizontal space is utilized for smart storage, including difficult corners, sloped ceilings, and irregular alcoves.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-lg font-bold text-neutral-100">
              Adds Real Property Value
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              High-end bespoke kitchens, fluted TV media walls, and custom wardrobes substantially increase the appraisal value and desirability of your house.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-lg font-bold text-neutral-100">
              Locally Handcrafted in Klipgat
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Direct accountability from master craftsmen located right next to Mngomezulu Hardware. No middleman markup or distant overseas support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
