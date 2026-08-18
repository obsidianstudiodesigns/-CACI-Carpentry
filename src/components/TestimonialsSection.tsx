import React from 'react';
import { Star, MessageSquare, Quote, MapPin, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/carpentryData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Experiences</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-50 tracking-tight">
            Trusted by Homeowners <br />
            <span className="text-gold-gradient font-editorial italic font-normal">
              Across Our Community.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Read what satisfied homeowners in Klipgat, Mabopane, Soshanguve, and Pretoria North say about our craft.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/40 transition-all flex flex-col justify-between text-left space-y-4 shadow-xl group hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Rating stars & quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/30 group-hover:text-amber-500/60 transition-colors" />
                </div>

                {/* Project Tag */}
                <div className="text-[11px] font-bold text-amber-300 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800 w-fit">
                  {testimonial.project}
                </div>

                {/* Comment */}
                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-neutral-200">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <span className="text-[10px] text-neutral-500 font-mono">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
