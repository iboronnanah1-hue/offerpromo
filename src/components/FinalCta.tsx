import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PROMOTIONAL_URL } from '../constants';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-linear-to-b from-[#F8FAFC] to-[#F1F5F9] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm max-w-2xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Interested in Checking It Out?
          </h2>

          {/* Specified Text */}
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-8">
            If you&apos;re an eligible Android user in the United States and the opportunity interests you, you can review the details and see whether you qualify.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center">
            <a
              href={PROMOTIONAL_URL}
              target="_self"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] active:bg-[#3B0764] text-white font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Check the Opportunity</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            <p className="mt-3.5 text-xs sm:text-sm text-[#64748B] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#581C87]" />
              <span>Eligibility and offer requirements may apply.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
