import React from 'react';
import { Info, HelpCircle } from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  return (
    <section id="opportunity" className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-[#581C87]">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            What&apos;s the Opportunity?
          </h2>
        </div>

        {/* Core Opportunity Copy */}
        <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed">
          <p>
            This opportunity features a potential $100 Jersey Mike&apos;s gift card and is presented through Consumer Test Connect. If you&apos;re an eligible U.S. Android user, you can review the opportunity and determine whether you meet the requirements.
          </p>
          <p>
            Promotional research campaigns like this allow everyday consumers to share feedback on products, test qualifying services, or explore sponsored partner programs. In return for completing specified requirements, qualifying participants may receive rewards such as gift cards.
          </p>
        </div>

        {/* Informational Callout Box */}
        <div className="mt-6 p-5 sm:p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] text-sm text-[#475569] leading-relaxed flex items-start gap-3.5 shadow-xs">
          <Info className="w-5 h-5 text-[#581C87] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-1">
              Independent Presentation Notice
            </h4>
            <p className="text-xs sm:text-sm text-[#475569]">
              This promotion is presented independently through Consumer Test Connect. Jersey Mike&apos;s Subs does not operate, sponsor, or administer Consumer Test Connect. Mention of the brand refers strictly to the subject of the promotional gift card opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
