import React, { useState } from 'react';
import { ArrowRight, Check, Info, Smartphone, Tablet } from 'lucide-react';
import { DeviceType, Offer } from '../types';

interface OfferCardProps {
  offer: Offer;
  selectedDevice: DeviceType;
}

export const OfferCard: React.FC<OfferCardProps> = ({
  offer,
  selectedDevice,
}) => {
  const [sourceIndex, setSourceIndex] = useState(0);

  // Check highlighting based on device selection
  const isMatch =
    selectedDevice !== 'all' && offer.deviceTarget === selectedDevice;
  const isMismatch =
    selectedDevice !== 'all' && offer.deviceTarget !== selectedDevice;

  const currentSrc = offer.imageSources[sourceIndex] || offer.imageSources[offer.imageSources.length - 1];

  const handleImageError = () => {
    if (sourceIndex < offer.imageSources.length - 1) {
      setSourceIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      className={`relative flex flex-col bg-white rounded-2xl transition-all duration-200 border ${
        isMatch
          ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-xl shadow-blue-900/5 -translate-y-1'
          : isMismatch
          ? 'border-slate-200 shadow-sm opacity-90'
          : 'border-slate-200 shadow-md hover:shadow-lg'
      }`}
    >
      {/* Device Match Highlight Banner */}
      {isMatch && (
        <div className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-t-2xl flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" />
            Recommended for Your Device ({selectedDevice === 'android' ? 'Android' : 'iPhone / iPad'})
          </span>
          <span className="text-[11px] bg-blue-700/60 px-2 py-0.5 rounded text-blue-100">
            Compatible
          </span>
        </div>
      )}

      {/* Different Device Notice Banner */}
      {isMismatch && (
        <div className="bg-slate-100 text-slate-600 text-xs font-medium px-4 py-1.5 rounded-t-2xl flex items-center gap-1.5 border-b border-slate-200">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>{offer.deviceTargetLabel}</span>
        </div>
      )}

      {/* Promotional Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100 overflow-hidden rounded-t-2xl p-3 flex items-center justify-center">
        <img
          src={currentSrc}
          alt={offer.imageAlt}
          onError={handleImageError}
          loading="lazy"
          className="w-full h-full object-contain rounded-xl drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
        />
        
        {/* Device pill badge on image */}
        <div className="absolute top-5 right-5">
          <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-xs backdrop-blur-md ${offer.badgeBg}`}>
            {offer.deviceTarget === 'android' ? (
              <Smartphone className="w-3 h-3" />
            ) : (
              <Tablet className="w-3 h-3" />
            )}
            {offer.badgeText}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
          {offer.title}
        </h3>

        {/* Short neutral description */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal flex-1">
          {offer.description}
        </p>

        {/* Device compatibility reassurance tag */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
          {offer.deviceTarget === 'android' ? (
            <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <Tablet className="w-4 h-4 text-blue-600 shrink-0" />
          )}
          <span>{offer.deviceMatchNotice}</span>
        </div>

        {/* CTA Button */}
        <div className="mt-5">
          <a
            href={offer.ctaUrl}
            target="_self"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-base tracking-wide shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 text-center ${offer.buttonClass}`}
          >
            <span>{offer.ctaText}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* Small honest note under button */}
        <p className="mt-2.5 text-[11px] text-center text-slate-400">
          Takes you to the official offer details page.
        </p>
      </div>
    </div>
  );
};
