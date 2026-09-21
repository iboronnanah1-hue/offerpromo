import React from 'react';
import { MousePointerClick, FileText, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Choose an Offer',
      description: 'Review the available promotional offers and select the one you are interested in.',
      icon: MousePointerClick,
    },
    {
      number: '2',
      title: 'Review the Requirements',
      description: 'Read the offer details, eligibility requirements, and participation instructions.',
      icon: FileText,
    },
    {
      number: '3',
      title: 'Follow the Instructions',
      description: 'If you meet the requirements, follow the instructions provided on the offer page.',
      icon: CheckCircle,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-18 bg-[#F8FAFC] border-y border-[#E2E8F0] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-[#475569]">
            Review promotional opportunities through three straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs flex flex-col items-center text-center transition-all hover:shadow-sm"
              >
                {/* Step Number Circle */}
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white font-bold text-sm flex items-center justify-center mb-4">
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
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
      </div>
    </section>
  );
};
