import React from 'react';
import { Smartphone } from 'lucide-react';

export const AndroidNotice: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 sm:p-4.5 max-w-2xl mx-auto mb-10 text-center">
      <div className="inline-flex items-center justify-center gap-2 mb-1.5 text-[#0F172A]">
        <Smartphone className="w-4 h-4 text-[#2563EB]" />
        <span className="text-sm font-semibold text-[#0F172A]">
          Device Notice
        </span>
      </div>
      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl mx-auto">
        These promotional opportunities are intended for Android users. Please review the requirements on the offer page before participating.
      </p>
    </div>
  );
};
