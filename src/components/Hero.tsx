import React from 'react';
import { ArrowDown, CheckCircle2, Shield, Smartphone } from 'lucide-react';

interface HeroProps {
  onScrollToOffers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToOffers }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Subtle background geometry / ambient contrast */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-slate-500 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs sm:text-sm font-medium mb-6 backdrop-blur-xs">
          <Shield className="w-3.5 h-3.5 text-blue-400" />
          <span>Curated Promotional Opportunities for U.S. Residents</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Explore Current Gift Card Offers
        </h1>

        {/* Subheadline */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Take a look at the promotional offers available below and choose the one that best fits your needs.
        </p>

        {/* Honest supporting message */}
        <p className="mt-3 text-xs sm:text-sm text-slate-400 font-medium">
          Offer availability, eligibility requirements and participation steps may vary.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToOffers}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-900/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View Available Offers</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left sm:text-center text-xs sm:text-sm text-slate-400">
          <div className="flex items-center sm:justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Independent Reviews</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Direct Participation Links</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <Smartphone className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Device-Specific Options</span>
          </div>
        </div>
      </div>
    </section>
  );
};
