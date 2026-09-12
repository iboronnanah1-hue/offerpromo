import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const Transparency: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Before You Continue
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Each promotion has its own eligibility requirements and participation terms. Availability may depend on location, device, age, and other qualifying conditions. Please review the offer details carefully before participating.
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p>
                This page is an independent promotional landing page and is not affiliated with or endorsed by Walmart, Ulta Beauty, ExxonMobil, Shell, or any other brand displayed in promotional materials unless expressly stated in the offer terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
