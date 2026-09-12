import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Logo & Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Consumer Offers
            </span>
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
            <button
              onClick={() => onOpenModal('privacy')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenModal('terms')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenModal('disclosure')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Offer Disclosure
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenModal('contact')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Affiliate Disclosure & Legal Notice */}
        <div className="pt-8 space-y-4 text-xs text-slate-400 text-center sm:text-left leading-relaxed">
          <p className="bg-slate-800/60 rounded-xl p-4 text-slate-300 border border-slate-800">
            <strong className="text-white font-semibold">Affiliate Disclosure: </strong>
            Some links on this page may be affiliate links. We may receive compensation when a visitor completes a qualifying action through an offer.
          </p>

          <p className="text-slate-400 text-[11px]">
            Trademarks, service marks, logos, and trade names referenced on this site belong to their respective owners. Their presence on this site does not constitute an endorsement, sponsorship, or affiliation with this independent promotional directory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-800 text-[11px] text-slate-400">
            <span>
              &copy; {new Date().getFullYear()} Consumer Offers. All rights reserved.
            </span>
            <span className="mt-2 sm:mt-0">
              Designed for U.S. consumer promotional research.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
