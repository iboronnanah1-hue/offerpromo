import React, { useState } from 'react';
import { ArrowDown, HelpCircle } from 'lucide-react';

interface HeroProps {
  onScrollToOffers: () => void;
  onScrollToHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToOffers, onScrollToHowItWorks }) => {
  const [walmartSrcIndex, setWalmartSrcIndex] = useState(0);
  const [ultaSrcIndex, setUltaSrcIndex] = useState(0);

  const walmartCandidates = [
    '/assets/walmart-promo.png',
    '/assets/walmart.png',
    '/assets/walmart-promo.jpg',
    '/assets/walmart.jpg',
    '/assets/walmart-promo.svg',
    '/walmart-promo.png',
    '/walmart.png',
  ];

  const ultaCandidates = [
    '/assets/ulta-promo.png',
    '/assets/ulta.png',
    '/assets/ulta-promo.jpg',
    '/assets/ulta.jpg',
    '/assets/ulta-promo.svg',
    '/ulta-promo.png',
    '/ulta.png',
  ];

  const walmartSrc = walmartCandidates[walmartSrcIndex] || walmartCandidates[walmartCandidates.length - 1];
  const ultaSrc = ultaCandidates[ultaSrcIndex] || ultaCandidates[ultaCandidates.length - 1];

  return (
    <section className="bg-white border-b border-[#E2E8F0] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Description, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Neutral Badge */}
            <span className="inline-block text-xs font-semibold tracking-wider text-[#475569] uppercase bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full mb-3.5">
              Consumer Promotions
            </span>

            {/* Exact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight sm:leading-tight">
              Explore Available Gift Card Offers
            </h1>

            {/* Exact Supporting Headline */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl">
              Discover promotional gift-card opportunities from participating brands and review the requirements for each offer before choosing one.
            </p>

            {/* CTAs: Primary "Explore Offers" + Subtle secondary "How It Works" */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onScrollToOffers}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base transition-colors shadow-xs cursor-pointer"
              >
                <span>Explore Offers</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onScrollToHowItWorks}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-[#64748B]" />
                <span>How It Works</span>
              </button>
            </div>

            {/* Exact Smaller Supporting Message */}
            <p className="mt-4 text-xs sm:text-sm text-[#64748B]">
              Eligibility, availability, and participation requirements vary by offer.
            </p>
          </div>

          {/* Right Column: Professional promotional image/card composition */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between text-xs font-semibold text-[#475569] uppercase tracking-wider mb-3 px-1">
                <span>Featured Promotions</span>
                <span className="text-[11px] font-medium text-[#64748B] normal-case bg-white border border-[#E2E8F0] px-2 py-0.5 rounded-full">
                  Android Intended
                </span>
              </div>
              <div className="space-y-3">
                {/* Walmart Preview Card */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-2.5 shadow-xs overflow-hidden">
                  <div className="aspect-[16/10] w-full bg-[#F8FAFC] rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={walmartSrc}
                      alt="Walmart Gift Card promotional artwork"
                      onError={() => {
                        if (walmartSrcIndex < walmartCandidates.length - 1) {
                          setWalmartSrcIndex((prev) => prev + 1);
                        }
                      }}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  </div>
                  <div className="mt-2.5 px-1 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                      Walmart Gift Card Promotion
                    </span>
                    <span className="text-[11px] font-medium text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Offer Available
                    </span>
                  </div>
                </div>

                {/* Ulta Preview Card */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-2.5 shadow-xs overflow-hidden">
                  <div className="aspect-[16/10] w-full bg-[#F8FAFC] rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={ultaSrc}
                      alt="Ulta Beauty Gift Card promotional artwork"
                      onError={() => {
                        if (ultaSrcIndex < ultaCandidates.length - 1) {
                          setUltaSrcIndex((prev) => prev + 1);
                        }
                      }}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  </div>
                  <div className="mt-2.5 px-1 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                      Ulta Beauty Gift Card Promotion
                    </span>
                    <span className="text-[11px] font-medium text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Offer Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
