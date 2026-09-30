import React, { useState } from 'react';
import { ArrowRight, Smartphone, ShieldCheck, MapPin } from 'lucide-react';
import { PROMOTIONAL_URL, IMAGE_SOURCES } from '../constants';

export const ArticleHero: React.FC = () => {
  const [sourceIndex, setSourceIndex] = useState(0);

  const currentImgSrc =
    IMAGE_SOURCES[sourceIndex] || IMAGE_SOURCES[IMAGE_SOURCES.length - 1];

  const handleImageError = () => {
    if (sourceIndex < IMAGE_SOURCES.length - 1) {
      setSourceIndex((prev) => prev + 1);
    }
  };

  return (
    <article className="pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Meta Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-[#64748B] mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-[#581C87] border border-purple-100 font-medium">
            <Smartphone className="w-3.5 h-3.5 text-[#6B21A8]" />
            Android Users
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 text-[#334155] border border-[#E2E8F0] font-medium">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            United States (18+)
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-[#64748B]">Consumer Informational Guide</span>
        </div>

        {/* Article Title / Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight sm:leading-tight mb-5">
          Could You Use a $100 Jersey Mike&apos;s Gift Card?
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#334155] font-normal leading-relaxed mb-6">
          There&apos;s a gift-card opportunity available for eligible U.S. Android users. Take a look at the details and see if you qualify.
        </p>

        {/* Author / Editorial Trust Stamp */}
        <div className="flex items-center gap-3 py-3 border-y border-[#E2E8F0] mb-8 text-xs text-[#64748B]">
          <div className="w-8 h-8 rounded-full bg-[#581C87] text-white font-bold flex items-center justify-center text-xs">
            OP
          </div>
          <div>
            <p className="font-semibold text-[#0F172A]">OfferPromo Editorial Staff</p>
            <p className="text-[#64748B]">Independent Promotional Opportunity Review</p>
          </div>
        </div>

        {/* Introduction Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed mb-8">
          <p>
            Who doesn&apos;t like the idea of getting a little extra value from a favorite restaurant?
          </p>
          <p>
            If you&apos;re an eligible Android user in the United States, you may want to take a look at this Jersey Mike&apos;s gift-card opportunity.
          </p>
          <p>
            It only takes a few moments to check the available details and see whether you qualify.
          </p>
        </div>

        {/* Primary CTA Button & Sub-Notice */}
        <div className="my-8 p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs text-center flex flex-col items-center">
          <a
            href={PROMOTIONAL_URL}
            target="_self"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] active:bg-[#3B0764] text-white font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Check the Opportunity</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#581C87]" />
            <span>Eligibility and offer requirements may apply.</span>
          </p>
        </div>

        {/* Prominently Placed Promotional Image */}
        <figure className="my-8 sm:my-10">
          <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-3 sm:p-5 shadow-sm overflow-hidden flex items-center justify-center">
            <img
              src={currentImgSrc}
              alt="Promotional opportunity preview featuring a potential $100 Jersey Mike's gift card presented through Consumer Test Connect"
              onError={handleImageError}
              loading="eager"
              className="w-full max-h-[460px] object-contain rounded-xl"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs sm:text-sm text-[#64748B] italic">
            Example of the promotional opportunity shown to eligible participants.
          </figcaption>
        </figure>
      </div>
    </article>
  );
};
