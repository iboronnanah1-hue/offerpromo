import React from 'react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-[#0F172A] text-[#E2E8F0] py-12 sm:py-14 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#581C87] to-[#7E22CE] flex items-center justify-center text-white font-extrabold text-sm tracking-tight">
              OP
            </div>
            <div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Offer<span className="text-purple-400">Promo</span>
              </span>
              <p className="text-xs text-slate-400">
                Discover simple promotional opportunities.
              </p>
            </div>
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
            <button
              type="button"
              onClick={() => onOpenModal('privacy')}
              className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => onOpenModal('terms')}
              className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => onOpenModal('disclosure')}
              className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
            >
              Offer Disclosure
            </button>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => onOpenModal('contact')}
              className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Footer Notes & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 OfferPromo. All rights reserved.</p>
          <p>
            An independent consumer promotional information and review website.
          </p>
        </div>
      </div>
    </footer>
  );
};
