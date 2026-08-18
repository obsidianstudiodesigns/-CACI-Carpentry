import React, { useState } from 'react';
import { X, Sparkles, Send, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/carpentryData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Built-in Cupboards & Wardrobes',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: '',
    serviceType: defaultService,
    preferredContact: 'whatsapp',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi CACI Carpentry! I'm requesting a free measurement & quote from your website:
- *Name:* ${formData.fullName}
- *Phone:* ${formData.phone}
- *Location:* ${formData.location}
- *Service:* ${formData.serviceType}
- *Preferred Contact Method:* ${formData.preferredContact.toUpperCase()}
- *Notes:* ${formData.notes || 'Please contact me to schedule on-site measurement.'}`;

    const waUrl = `https://wa.me/27695413313?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in">
      <div
        className="relative w-full max-w-lg bg-neutral-900 border border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 pr-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Measurement & Quotation</span>
          </div>
          <h3 className="font-serif-heading text-2xl font-black text-neutral-100">
            Request Your Free Quote
          </h3>
          <p className="text-xs text-neutral-400">
            Klipgat, Mabopane, Soshanguve & Pretoria. Our master carpenter will get in touch with you promptly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="font-bold text-neutral-300">Your Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Sipho Sithole"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-bold text-neutral-300">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="069 541 3313"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-neutral-300">Suburb / Area *</label>
              <input
                type="text"
                required
                placeholder="e.g. Klipgat / Mabopane"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-neutral-300">Select Service Required *</label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 focus:outline-none focus:border-amber-500"
            >
              <option value="Modern Fitted Kitchens">Modern Fitted Kitchens</option>
              <option value="Built-in Cupboards & Wardrobes">Built-in Cupboards & Wardrobes</option>
              <option value="Statement TV Units & Media Walls">Statement TV Units & Media Walls</option>
              <option value="Luxury Bathroom Vanities">Luxury Bathroom Vanities</option>
              <option value="Luxury Walk-in Closets">Luxury Walk-in Closets</option>
              <option value="Tables, Chairs & Furniture">Tables, Chairs & Furniture</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-neutral-300">Room Details or Measurements (Optional)</label>
            <textarea
              rows={2}
              placeholder="e.g., 3-door bedroom wardrobe, high ceiling, gloss white finish..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gold-gradient text-neutral-950 font-bold text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp (069 541 3313)</span>
            </button>
          </div>

          <div className="text-center pt-2">
            <a
              href={COMPANY_DETAILS.phoneHref}
              className="text-xs text-neutral-400 hover:text-amber-300 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Or call directly: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
