import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/carpentryData';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Floating Action Button */}
      <a
        href={COMPANY_DETAILS.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-neutral-950 animate-pulse" />
        <MessageCircle className="w-7 h-7 text-neutral-950 fill-neutral-950/20" />
      </a>
    </div>
  );
};
