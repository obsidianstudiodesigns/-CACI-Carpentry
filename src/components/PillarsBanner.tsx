import React from 'react';
import { Sparkles, Shield, Wrench, Clock, CheckCircle } from 'lucide-react';

export const PillarsBanner: React.FC = () => {
  const pillars = [
    { title: 'CUSTOM DESIGNS', subtitle: 'Tailored to your space & style', icon: Sparkles },
    { title: 'PERFECT FIT', subtitle: 'Exact laser measurements', icon: Wrench },
    { title: 'PREMIUM FINISHES', subtitle: 'High-gloss, fluted oak & stone', icon: Shield },
    { title: 'BUILT TO LAST', subtitle: 'Engineered for decades', icon: CheckCircle },
  ];

  return (
    <div className="relative z-20 bg-neutral-900 border-y border-amber-500/30 overflow-hidden">
      {/* Subtle gold accent light */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-amber-400/10 to-amber-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3.5 ${index > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black tracking-wider text-neutral-100 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline Marquee */}
        <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap justify-between items-center text-xs text-amber-200/80 gap-3 font-medium tracking-wide">
          <span className="font-editorial italic text-amber-300 text-sm">
            Quality Workmanship.
          </span>
          <span className="text-neutral-500">•</span>
          <span className="uppercase tracking-widest text-neutral-300">
            Modern Designs.
          </span>
          <span className="text-neutral-500">•</span>
          <span className="uppercase tracking-widest text-amber-400 font-bold">
            Lasting Impressions.
          </span>
          <span className="text-neutral-500 hidden sm:inline">•</span>
          <span className="text-neutral-400 hidden sm:inline">
            YOUR VISION. OUR PASSION. PERFECTLY CRAFTED.
          </span>
        </div>
      </div>
    </div>
  );
};
