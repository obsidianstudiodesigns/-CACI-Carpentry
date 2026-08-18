import React from 'react';

interface CaciLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gold' | 'light' | 'dark' | 'monochrome';
  showSubtitle?: boolean;
}

export const CaciLogo: React.FC<CaciLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'gold',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: { container: 'h-10', icon: 'w-8 h-8', text: 'text-lg', sub: 'text-[9px]' },
    md: { container: 'h-14', icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-[10px]' },
    lg: { container: 'h-20', icon: 'w-16 h-16', text: 'text-3xl', sub: 'text-xs' },
    xl: { container: 'h-28', icon: 'w-24 h-24', text: 'text-4xl', sub: 'text-sm' },
  };

  const selectedSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Visual Crest Emblem */}
      <div className={`relative flex items-center justify-center ${selectedSize.icon} flex-shrink-0`}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9E88E" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#996515" />
              <stop offset="100%" stopColor="#F3E082" />
            </linearGradient>
            <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A2A2A" />
              <stop offset="50%" stopColor="#141414" />
              <stop offset="100%" stopColor="#0A0A0A" />
            </linearGradient>
            <linearGradient id="goldStroke" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE57F" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8C6514" />
            </linearGradient>
          </defs>

          {/* Outer Shield / Crest Base */}
          <polygon
            points="80,10 148,46 148,115 80,152 12,115 12,46"
            fill="url(#metalDark)"
            stroke="url(#goldStroke)"
            strokeWidth="3.5"
          />
          
          {/* Inner Inset Border */}
          <polygon
            points="80,18 140,50 140,110 80,144 20,110 20,50"
            fill="#121212"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />

          {/* House Roof Gable */}
          <path
            d="M 80 24 L 132 58 L 126 62 L 80 32 L 34 62 L 28 58 Z"
            fill="url(#goldGradient)"
          />
          {/* Chimney silhouette */}
          <rect x="114" y="32" width="10" height="18" fill="url(#goldGradient)" />

          {/* Crossed Carpentry Tools */}
          {/* 1. Carpenter's Hammer (Left to Right Tilt) */}
          <g transform="rotate(-32 80 62)">
            {/* Hammer Handle */}
            <rect x="76" y="38" width="8" height="46" rx="2" fill="url(#goldGradient)" stroke="#222" strokeWidth="0.8" />
            <rect x="74" y="68" width="12" height="16" rx="2" fill="#2A2A2A" stroke="url(#goldGradient)" strokeWidth="0.8" />
            {/* Hammer Head with Claw */}
            <path
              d="M 68 38 C 68 35 74 34 88 34 C 94 34 98 31 100 27 L 102 36 L 94 40 L 68 40 Z"
              fill="url(#goldGradient)"
              stroke="#111"
              strokeWidth="0.8"
            />
          </g>

          {/* 2. Carpenter's Hand-Saw (Right to Left Tilt) */}
          <g transform="rotate(32 80 62)">
            {/* Saw Blade */}
            <polygon
              points="75,32 94,36 86,76 75,76"
              fill="url(#goldGradient)"
              stroke="#222"
              strokeWidth="0.8"
            />
            {/* Saw Teeth simulation */}
            <path
              d="M 75 32 L 73 36 L 75 40 L 73 44 L 75 48 L 73 52 L 75 56 L 73 60 L 75 64 L 73 68 L 75 72 L 73 76"
              stroke="url(#goldGradient)"
              strokeWidth="1.5"
            />
            {/* Saw Wooden D-Handle */}
            <path
              d="M 82 72 C 92 70 98 75 98 84 C 98 90 92 94 82 92 Z"
              fill="#222"
              stroke="url(#goldGradient)"
              strokeWidth="1.8"
            />
            {/* Handle hole */}
            <ellipse cx="88" cy="82" rx="4" ry="5" fill="#121212" />
          </g>

          {/* CACI Central Banner Plaque */}
          <rect
            x="24"
            y="76"
            width="112"
            height="34"
            rx="4"
            fill="url(#metalDark)"
            stroke="url(#goldStroke)"
            strokeWidth="2"
          />

          {/* Text CACI */}
          <text
            x="80"
            y="101"
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', serif"
            fontSize="26"
            fontWeight="900"
            letterSpacing="3.5"
            fill="url(#goldGradient)"
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
          >
            CACI
          </text>

          {/* Lower Carpentry Ribbon */}
          <rect
            x="36"
            y="114"
            width="88"
            height="14"
            rx="2"
            fill="#0F0F0F"
            stroke="url(#goldGradient)"
            strokeWidth="1"
          />
          <text
            x="80"
            y="124.5"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="7.5"
            fontWeight="800"
            letterSpacing="2"
            fill="#EAD57F"
          >
            ★ CARPENTRY ★
          </text>

          {/* Bottom 3 Stars */}
          <g fill="url(#goldGradient)">
            {/* Center Star */}
            <polygon points="80,132 82,137 87,137 83,140 85,145 80,142 75,145 77,140 73,137 78,137" />
            {/* Left Star */}
            <polygon points="66,133 67.5,136.5 71,136.5 68,139 69.5,142.5 66,140.5 62.5,142.5 64,139 61,136.5 64.5,136.5" />
            {/* Right Star */}
            <polygon points="94,133 95.5,136.5 99,136.5 96,139 97.5,142.5 94,140.5 90.5,142.5 92,139 89,136.5 92.5,136.5" />
          </g>
        </svg>
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif-heading font-black tracking-widest leading-none ${selectedSize.text} text-gold-gradient`}>
            CACI
          </span>
          <span className={`font-medium tracking-widest text-amber-100/90 uppercase text-xs sm:text-sm`}>
            CARPENTRY
          </span>
        </div>
        {showSubtitle && (
          <span className={`tracking-wider uppercase font-semibold text-neutral-400 mt-0.5 ${selectedSize.sub}`}>
            Quality Workmanship • Modern Designs
          </span>
        )}
      </div>
    </div>
  );
};
