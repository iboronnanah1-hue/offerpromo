import React from 'react';
import { MousePointerClick, FileText, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Choose an Offer',
      description: 'Select the promotion that interests you.',
      icon: MousePointerClick,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      number: '2',
      title: 'Review the Requirements',
      description:
        'Follow the instructions on the offer page and check the eligibility requirements.',
      icon: FileText,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      number: '3',
      title: 'Complete the Required Steps',
      description: 'Complete only the steps requested by the promotion.',
      icon: CheckCircle,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-14 sm:py-20 bg-white border-y border-slate-200 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A simple, transparent process for exploring consumer gift card promotions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col items-center text-center transition-all hover:bg-slate-50/80"
              >
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-5">
                  <span className="font-extrabold text-lg text-slate-800">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${step.bgColor} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${step.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
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
