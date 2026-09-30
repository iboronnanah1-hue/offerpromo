import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const Transparency: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-14 border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Core Independent Transparency Notice */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-[#0F172A]">
            <ShieldAlert className="w-5 h-5 text-[#581C87]" />
            <h3 className="font-bold text-base sm:text-lg">
              Important Offer Notice &amp; Disclaimer
            </h3>
          </div>
          <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-3">
            OfferPromo is an independent promotional website. The promotional opportunity shown on this page may be provided by a third-party service. OfferPromo is not affiliated with or endorsed by Jersey Mike&apos;s Subs. Eligibility, availability and requirements may vary.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-[#0F172A]">
            Please review all terms and requirements presented on the offer page before participating.
          </p>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <p>
            <span className="font-semibold text-[#0F172A]">Affiliate Disclosure:</span> Some links on this website may be affiliate links. We may receive compensation when a visitor completes a qualifying action through an offer.
          </p>
        </div>
      </div>
    </section>
  );
};
