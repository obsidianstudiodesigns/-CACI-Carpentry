import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/carpentryData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Pop-up bubble */}
      {showTooltip && (
        <div className="relative bg-neutral-900 border border-emerald-500/40 rounded-2xl p-3.5 shadow-2xl max-w-xs text-left text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chat with Master Carpenter</span>
          </div>
          <p className="text-neutral-300 text-[11px] leading-relaxed">
            Need a quick estimate or want to send us a room photo? Click here to chat on WhatsApp!
          </p>
        </div>
      )}

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
