import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Offer } from '../types';

interface OfferCardProps {
  offer: Offer;
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const [sourceIndex, setSourceIndex] = useState(0);

  const currentSrc =
    offer.imageSources[sourceIndex] ||
    offer.imageSources[offer.imageSources.length - 1];

  const handleImageError = () => {
    if (sourceIndex < offer.imageSources.length - 1) {
      setSourceIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-hidden transition-all duration-150 hover:shadow-sm hover:border-slate-300">
      {/* Promotional Image Container at Top */}
      <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-[#F8FAFC] p-3.5 sm:p-4 flex items-center justify-center border-b border-[#E2E8F0]">
        <img
          src={currentSrc}
          alt={offer.imageAlt}
          onError={handleImageError}
          loading="lazy"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Card Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Offer Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          {offer.title}
        </h3>

        {/* Short Factual Description */}
        <p className="mt-3 text-sm sm:text-base text-[#334155] leading-relaxed flex-1">
          {offer.description}
        </p>

        {/* CTA Button */}
        <div className="mt-6 pt-2">
          <a
            href={offer.ctaUrl}
            target="_self"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base transition-colors shadow-xs text-center cursor-pointer"
          >
            <span>{offer.ctaText}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* Small Supporting Text */}
        <p className="mt-3 text-center text-xs text-[#64748B]">
          {offer.requirementDisclaimer}
        </p>
      </div>
    </div>
  );
};
