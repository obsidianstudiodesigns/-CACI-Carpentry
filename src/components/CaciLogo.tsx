import React from 'react';
import caciLogoImg from '../assets/images/caci_logo_1787062562802.jpg';

interface CaciLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gold' | 'light' | 'dark' | 'monochrome';
  showSubtitle?: boolean;
  onlyImage?: boolean;
}

export const CaciLogo: React.FC<CaciLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
  onlyImage = true,
}) => {
  const sizeMap = {
    sm: { img: 'h-10 w-auto', text: 'text-lg', sub: 'text-[9px]' },
    md: { img: 'h-14 sm:h-16 w-auto', text: 'text-2xl', sub: 'text-[10px]' },
    lg: { img: 'h-20 sm:h-24 w-auto', text: 'text-3xl', sub: 'text-xs' },
    xl: { img: 'h-28 sm:h-32 w-auto', text: 'text-4xl', sub: 'text-sm' },
  };

  const selectedSize = sizeMap[size];

  if (onlyImage) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={caciLogoImg}
          alt="CACI Carpentry"
          className={`${selectedSize.img} object-contain rounded-xl drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)] transition-transform duration-300 hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src={caciLogoImg}
        alt="CACI Carpentry"
        className={`${selectedSize.img} object-contain rounded-xl drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)]`}
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif-heading font-black tracking-widest leading-none ${selectedSize.text} text-gold-gradient`}>
            CACI
          </span>
          <span className="font-medium tracking-widest text-amber-100/90 uppercase text-xs sm:text-sm">
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
