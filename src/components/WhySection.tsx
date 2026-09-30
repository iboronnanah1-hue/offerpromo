import React from 'react';
import { Utensils, Award, Store, DollarSign } from 'lucide-react';

export const WhySection: React.FC = () => {
  return (
    <section id="why-jersey-mikes" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#C2410C]">
            <Utensils className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Why a Jersey Mike&apos;s Gift Card?
          </h2>
        </div>

        {/* Narrative Copy */}
        <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed mb-8">
          <p>
            Jersey Mike&apos;s Subs is a popular American sandwich restaurant recognized for its freshly sliced and grilled submarine sandwiches. From their signature cold subs served &quot;Mike&apos;s Way&quot; with onions, lettuce, tomatoes, and red wine vinegar, to hot cheesesteaks prepared fresh to order, they have become a lunchtime staple across the United States.
          </p>
          <p>
            A $100 gift card can be practical and convenient for purchasing meals at participating restaurant locations. Whether you frequently stop by for lunch during the workweek or plan to pick up dinner for the family, a dining gift card helps offset everyday meal costs.
          </p>
        </div>

        {/* Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center mb-3">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-base mb-1.5">
              Nationwide Locations
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Jersey Mike&apos;s operates thousands of restaurant locations across the United States for convenient in-store pickup and dining.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#C2410C] flex items-center justify-center mb-3">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-base mb-1.5">
              Fresh Sandwiches &amp; Sides
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Gift cards apply directly toward their full menu, including cold deli subs, hot grilled cheesesteaks, drinks, and chips.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#581C87] flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F172A] text-base mb-1.5">
              Flexible Balance
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Standard restaurant gift card balances do not need to be used all at once, allowing cardholders to spread purchases across multiple visits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
