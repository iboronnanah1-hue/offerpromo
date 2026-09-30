import React from 'react';
import { Smartphone, FileSearch, CheckCircle2 } from 'lucide-react';

export const HowToCheck: React.FC = () => {
  const steps = [
    {
      stepNumber: '1',
      title: 'Use an Android device',
      description:
        'This opportunity is intended for eligible Android users located in the United States. Ensure you are accessing the page from a compatible Android phone or tablet.',
      icon: Smartphone,
    },
    {
      stepNumber: '2',
      title: 'Review the offer',
      description:
        'Click the "Check the Opportunity" button and carefully review the specific eligibility rules, terms, and requirements presented on the offer destination page.',
      icon: FileSearch,
    },
    {
      stepNumber: '3',
      title: 'Complete the required steps',
      description:
        'If you decide to participate and meet the eligibility requirements, follow the official instructions provided on the offer page to complete all qualifying steps.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-to-check" className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            How to Check the Opportunity
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Follow these straightforward steps to explore the promotional details and check whether you qualify.
          </p>
        </div>

        {/* 3-Step Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs flex flex-col items-center text-center transition-all hover:shadow-sm hover:border-slate-300"
              >
                {/* Step Number Badge */}
                <div className="w-10 h-10 rounded-full bg-[#581C87] text-white font-extrabold text-sm flex items-center justify-center mb-4 shadow-xs">
                  {step.stepNumber}
                </div>

                {/* Step Icon */}
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#581C87] mb-4 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Realistic Expectations Notice */}
        <p className="mt-6 text-center text-xs text-[#64748B]">
          Note: Entering an email or visiting an offer page does not automatically guarantee a gift card. Each promotional campaign requires completing specified qualifying activities according to its stated terms.
        </p>
      </div>
    </section>
  );
};
