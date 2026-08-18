import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { COMPANY_DETAILS, FAQS } from '../data/carpentryData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    serviceType: 'Built-in Cupboards & Wardrobes',
    message: '',
  });
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopyPhone = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const message = `Hi CACI Carpentry, I'm reaching out through your website contact form:
- *Name:* ${formData.fullName}
- *Phone:* ${formData.phone}
- *Area / Address:* ${formData.location}
- *Service Needed:* ${formData.serviceType}
- *Message / Room Details:* ${formData.message || 'I would like to arrange a site visit and measurement.'}`;

    const waUrl = `https://wa.me/27695413313?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900/60 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Get in Touch with CACI Carpentry</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-50 tracking-tight">
            Let's Build Something <br />
            <span className="text-gold-gradient font-editorial italic font-normal">
              Beautiful Together.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Visit our Klipgat workshop, call our master carpenter directly, or send us a WhatsApp message for instant consultation.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all text-left space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Direct Call Line
              </span>
              <h3 className="text-xl font-bold text-neutral-100 font-mono">
                {COMPANY_DETAILS.phone}
              </h3>
              <p className="text-xs text-neutral-400">
                Speak directly to our master craftsmen for advice & bookings.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={COMPANY_DETAILS.phoneHref}
                className="flex-1 py-2.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-bold text-amber-300 transition-colors"
              >
                Call Now
              </a>
              <button
                onClick={() => handleCopyPhone(COMPANY_DETAILS.phone)}
                className="p-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-neutral-900 border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all text-left space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Instant WhatsApp Chat
              </span>
              <h3 className="text-xl font-bold text-neutral-100 font-mono">
                {COMPANY_DETAILS.whatsapp}
              </h3>
              <p className="text-xs text-neutral-400">
                Send room photos, floorplans, or ask quick pricing questions.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={COMPANY_DETAILS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-center text-xs font-bold text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Location & Showroom Card */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all text-left space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Showroom & Workshop
              </span>
              <h3 className="text-base font-bold text-neutral-100">
                {COMPANY_DETAILS.location}
              </h3>
              <p className="text-xs text-neutral-400">
                Servicing Klipgat, Mabopane, Soshanguve, Pretoria North & Gauteng.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Klipgat+Mngomezulu+Hardware"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xs font-bold text-neutral-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Form & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Form */}
          <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 text-left shadow-2xl">
            <div className="space-y-2">
              <h3 className="font-serif-heading text-2xl font-black text-neutral-100">
                Book a Free Measurement
              </h3>
              <p className="text-xs text-neutral-400">
                Fill out the quick form below and our team will connect with you via WhatsApp or phone to finalize your booking.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Molefe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="069 541 3313"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300">
                    Your Location / Suburb *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Klipgat, Mabopane, Pretoria"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Modern Fitted Kitchens">Modern Fitted Kitchens</option>
                    <option value="Built-in Cupboards & Wardrobes">Built-in Cupboards & Wardrobes</option>
                    <option value="Statement TV Units & Media Walls">Statement TV Units & Media Walls</option>
                    <option value="Luxury Bathroom Vanities">Luxury Bathroom Vanities</option>
                    <option value="Luxury Walk-in Closets">Luxury Walk-in Closets</option>
                    <option value="Tables, Chairs & Furniture">Tables, Chairs & Furniture</option>
                    <option value="Full Home Interior Package">Full Home Interior Package</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">
                  Project Description or Room Dimensions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the space, wall dimensions, preferred colors or finish ideas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-gold-gradient text-neutral-950 font-bold text-xs sm:text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Open WhatsApp Conversation</span>
              </button>

              <p className="text-[11px] text-center text-neutral-400">
                🔒 We respect your privacy. No spam. You will be connected directly with our Klipgat team.
              </p>
            </form>
          </div>

          {/* FAQs Column */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="space-y-2">
              <h3 className="font-serif-heading text-2xl font-black text-neutral-100">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-neutral-400">
                Everything you need to know about our custom carpentry process, timelines, and guarantees.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex justify-between items-center gap-3 text-xs sm:text-sm font-bold text-neutral-200 hover:text-amber-300"
                    >
                      <span>{faq.question}</span>
                      <span className="text-amber-400 font-mono text-base">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Hours Info Box */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Workshop Hours</span>
              </div>
              <p className="text-xs text-neutral-300">
                {COMPANY_DETAILS.businessHours}
              </p>
              <p className="text-[11px] text-neutral-400">
                Site visits and measurements can be scheduled after hours or over weekends for your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
