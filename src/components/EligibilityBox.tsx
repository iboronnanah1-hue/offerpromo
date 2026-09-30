import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

export const EligibilityBox: React.FC = () => {
  const checklist = [
    'Android device required',
    'United States residents only',
    '18+ eligibility requirement may apply',
    'Review the offer terms and requirements',
    'Availability may vary',
  ];

  return (
    <section id="eligibility" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-purple-100 p-6 sm:p-8 md:p-10 shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#581C87] flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                Before You Continue
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Key qualification points to review prior to participating
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6">
            To ensure a smooth experience and avoid disappointment, please confirm that you meet the general guidelines for this promotional review:
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {checklist.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <div className="w-6 h-6 rounded-full bg-[#581C87] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#0F172A]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E2E8F0] text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Participation is voluntary. If you do not meet the stated requirements (e.g. accessing from an unsupported platform or outside the United States), the opportunity may not be available.
          </div>
        </div>
      </div>
    </section>
  );
};
