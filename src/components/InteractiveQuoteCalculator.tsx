import React, { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, Phone, CheckCircle, ArrowRight, Info } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/carpentryData';

interface InteractiveQuoteCalculatorProps {
  initialService?: string;
  onOpenConsultationModal?: () => void;
}

export const InteractiveQuoteCalculator: React.FC<InteractiveQuoteCalculatorProps> = ({
  initialService = 'Built-in Cupboards & Wardrobes',
}) => {
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [sizeTier, setSizeTier] = useState<'compact' | 'medium' | 'large' | 'estate'>('medium');
  const [finishGrade, setFinishGrade] = useState<'standard' | 'high-gloss' | 'fluted-luxury' | 'ultra-bespoke'>('fluted-luxury');
  const [includeLighting, setIncludeLighting] = useState<boolean>(true);
  const [includeMirrorsOrStone, setIncludeMirrorsOrStone] = useState<boolean>(true);
  const [clientLocation, setClientLocation] = useState<string>('Klipgat / Mabopane');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');

  const services = [
    { id: 'Built-in Cupboards & Wardrobes', label: 'Built-in Cupboards' },
    { id: 'Statement TV Units & Media Walls', label: 'TV Media Walls' },
    { id: 'Modern Fitted Kitchens', label: 'Modern Kitchens' },
    { id: 'Luxury Bathroom Vanities', label: 'Bathroom Vanities' },
    { id: 'Luxury Walk-in Closets', label: 'Walk-in Closets' },
    { id: 'Tables, Chairs & Furniture', label: 'Custom Furniture' },
  ];

  // Base price calculation approximations in ZAR for realistic South African custom carpentry
  const basePrices: Record<string, { compact: number; medium: number; large: number; estate: number }> = {
    'Built-in Cupboards & Wardrobes': { compact: 7500, medium: 14500, large: 23500, estate: 38000 },
    'Statement TV Units & Media Walls': { compact: 6000, medium: 12000, large: 19500, estate: 29000 },
    'Modern Fitted Kitchens': { compact: 18000, medium: 35000, large: 58000, estate: 89000 },
    'Luxury Bathroom Vanities': { compact: 3800, medium: 7200, large: 11500, estate: 16500 },
    'Luxury Walk-in Closets': { compact: 14000, medium: 26000, large: 44000, estate: 72000 },
    'Tables, Chairs & Furniture': { compact: 4500, medium: 8500, large: 14000, estate: 22000 },
  };

  const finishMultipliers = {
    'standard': 1.0,
    'high-gloss': 1.25,
    'fluted-luxury': 1.4,
    'ultra-bespoke': 1.6,
  };

  const currentBase = basePrices[selectedService] || basePrices['Built-in Cupboards & Wardrobes'];
  let calculatedCost = currentBase[sizeTier] * finishMultipliers[finishGrade];
  if (includeLighting) calculatedCost += 1200;
  if (includeMirrorsOrStone) calculatedCost += 2400;

  const minRange = Math.round(calculatedCost * 0.95);
  const maxRange = Math.round(calculatedCost * 1.15);

  const generateWhatsAppMessage = () => {
    const text = `Hi CACI Carpentry! I used your website Quote Estimator:
- *Name:* ${clientName || 'Homeowner'}
- *Phone:* ${clientPhone || 'Not provided'}
- *Area / Location:* ${clientLocation}
- *Service:* ${selectedService}
- *Scale/Size:* ${sizeTier.toUpperCase()}
- *Finish Grade:* ${finishGrade.replace('-', ' ').toUpperCase()}
- *Integrated LED Lighting:* ${includeLighting ? 'Yes' : 'No'}
- *Mirrors / Stone Accents:* ${includeMirrorsOrStone ? 'Yes' : 'No'}
- *Estimated Guide Range:* R${minRange.toLocaleString()} - R${maxRange.toLocaleString()}

Please contact me to confirm exact measurements and provide a formal quote!`;
    return encodeURIComponent(text);
  };

  return (
    <section id="calculator" className="py-24 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-50 tracking-tight">
            Estimate Your Custom <br />
            <span className="text-gold-gradient font-editorial italic font-normal">
              Carpentry Investment.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Select your preferences below to get a transparent price range and generate an instant WhatsApp inquiry directly to our master craftsmen.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl text-left">
            {/* Step 1: Service Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300">
                1. Select Custom Carpentry Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {services.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedService(svc.id)}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all border ${
                      selectedService === svc.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-md'
                        : 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                    }`}
                  >
                    {svc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size & Room Scale */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300">
                2. Approximate Size & Space Scale
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'compact', label: 'Compact', detail: 'Single Room / ~2m' },
                  { id: 'medium', label: 'Standard', detail: 'Medium Wall / ~3.5m' },
                  { id: 'large', label: 'Master Suite', detail: 'Full Wall / ~5m' },
                  { id: 'estate', label: 'Full Room', detail: 'Multi-wall / Complete' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSizeTier(s.id as any)}
                    className={`p-3 rounded-xl text-left transition-all border ${
                      sizeTier === s.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-md'
                        : 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    <div className="text-xs font-bold">{s.label}</div>
                    <div className="text-[10px] text-neutral-400">{s.detail}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material & Finish Grade */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300">
                3. Material & Aesthetic Finish
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'standard', title: 'Classic Clean Matte', desc: 'Durable scratch-resistant modern matte' },
                  { id: 'high-gloss', title: 'High-Gloss Alabaster', desc: 'Ultra-reflective luxury gloss finish' },
                  { id: 'fluted-luxury', title: 'Fluted Oak & Stone Accents', desc: 'Vertical acoustic wood slats & stone slab' },
                  { id: 'ultra-bespoke', title: 'Full Architectural Suite', desc: 'Gold trims, smoked glass & velvet drawers' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFinishGrade(f.id as any)}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      finishGrade === f.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-md'
                        : 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    <div className="text-xs font-bold text-neutral-200">{f.title}</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">{f.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Enhancements */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300">
                4. Premium Custom Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 cursor-pointer hover:border-neutral-700">
                  <input
                    type="checkbox"
                    checked={includeLighting}
                    onChange={(e) => setIncludeLighting(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 bg-neutral-900 border-neutral-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-neutral-200 block">Integrated LED Channels</span>
                    <span className="text-[11px] text-neutral-400">Warm ambient backlighting</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 cursor-pointer hover:border-neutral-700">
                  <input
                    type="checkbox"
                    checked={includeMirrorsOrStone}
                    onChange={(e) => setIncludeMirrorsOrStone(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 bg-neutral-900 border-neutral-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-neutral-200 block">Mirror / Stone Slabs</span>
                    <span className="text-[11px] text-neutral-400">Smoked mirror or quartz top</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 5: Contact Inputs */}
            <div className="space-y-3 pt-2 border-t border-neutral-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300">
                5. Your Contact & Location Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="Area (e.g. Klipgat, Mabopane)"
                  value={clientLocation}
                  onChange={(e) => setClientLocation(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Estimate Display & Actions Column */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border-2 border-amber-500/40 shadow-2xl space-y-6 text-left relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  Estimated Investment Guide
                </span>
                <div className="text-3xl sm:text-4xl font-black text-gold-gradient font-serif-heading">
                  R{minRange.toLocaleString()} – R{maxRange.toLocaleString()}
                </div>
                <p className="text-xs text-neutral-400 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>Includes custom fabrication, edge-banding & hardware</span>
                </p>
              </div>

              {/* Summary Breakdown List */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Selected Item:</span>
                  <span className="font-bold text-neutral-200 text-right">{selectedService}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Scale Tier:</span>
                  <span className="font-bold text-neutral-200 capitalize">{sizeTier}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Finish Profile:</span>
                  <span className="font-bold text-neutral-200 capitalize">{finishGrade.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Installation & Fitting:</span>
                  <span className="font-bold text-amber-300">0mm Gap Guarantee</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/27695413313?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Estimate to WhatsApp (069 541 3313)</span>
                </a>

                <a
                  href={COMPANY_DETAILS.phoneHref}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-amber-500/40 text-amber-200 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Master Craftsman: {COMPANY_DETAILS.phone}</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-2 border-t border-neutral-800 space-y-1 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Free On-Site Laser Measurement in Klipgat & Surrounds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>No obligation, transparent quotation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
