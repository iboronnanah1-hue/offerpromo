import React from 'react';

export const Transparency: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Transparency Section */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
            Before You Continue
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            <p>
              Each promotion has its own eligibility requirements, participation terms, and availability. Requirements may vary based on factors such as location, device, age, and other qualifying conditions. Please review the details provided on the offer page carefully before participating.
            </p>
            <p className="pt-3 text-xs sm:text-sm text-[#64748B] border-t border-[#E2E8F0]">
              This website is an independent promotional landing page and is not affiliated with or endorsed by Walmart, Ulta Beauty, or any other third-party brand displayed in promotional materials unless expressly stated in the applicable offer terms.
            </p>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-5 shadow-xs text-xs sm:text-sm text-[#475569] leading-relaxed">
          <p>
            <span className="font-semibold text-[#0F172A]">Affiliate Disclosure:</span> Some links on this website may be affiliate links. We may receive compensation when a visitor completes a qualifying action through an offer.
          </p>
        </div>
      </div>
    </section>
  );
};
