import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ModalType } from '../types';

interface HeaderProps {
  onOpenModal: (type: ModalType) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId?: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (!targetId || targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'top')}
              className="flex items-center gap-2.5 text-[#0F172A] group transition-colors"
              aria-label="OfferPromo Home"
            >
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-[#581C87] to-[#3B0764] flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-xs">
                OP
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A] leading-tight">
                  Offer<span className="text-[#6B21A8]">Promo</span>
                </span>
                <span className="text-[11px] font-medium text-[#64748B] hidden sm:block tracking-normal">
                  Discover simple promotional opportunities.
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a
              href="#opportunity"
              onClick={(e) => handleNavClick(e, 'opportunity')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            >
              The Opportunity
            </a>
            <a
              href="#why-jersey-mikes"
              onClick={(e) => handleNavClick(e, 'why-jersey-mikes')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            >
              Why Jersey Mike&apos;s
            </a>
            <a
              href="#how-to-check"
              onClick={(e) => handleNavClick(e, 'how-to-check')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            >
              How to Check
            </a>
            <a
              href="#eligibility"
              onClick={(e) => handleNavClick(e, 'eligibility')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            >
              Eligibility
            </a>
            <button
              type="button"
              onClick={() => onOpenModal('terms')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              type="button"
              onClick={() => onOpenModal('privacy')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              Privacy
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] focus:outline-hidden focus:ring-2 focus:ring-[#581C87]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 pt-2.5 pb-4 space-y-1 shadow-lg">
          <div className="px-3 py-1.5 mb-1 text-xs text-[#64748B] border-b border-slate-100 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#6B21A8]" />
            <span>Discover simple promotional opportunities.</span>
          </div>
          <a
            href="#opportunity"
            onClick={(e) => handleNavClick(e, 'opportunity')}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            The Opportunity
          </a>
          <a
            href="#why-jersey-mikes"
            onClick={(e) => handleNavClick(e, 'why-jersey-mikes')}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            Why Jersey Mike&apos;s
          </a>
          <a
            href="#how-to-check"
            onClick={(e) => handleNavClick(e, 'how-to-check')}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            How to Check
          </a>
          <a
            href="#eligibility"
            onClick={(e) => handleNavClick(e, 'eligibility')}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            Eligibility
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal('terms');
            }}
            className="w-full text-left block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] cursor-pointer"
          >
            Terms of Use
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal('privacy');
            }}
            className="w-full text-left block px-3 py-2 rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] cursor-pointer"
          >
            Privacy Policy
          </button>
        </div>
      )}
    </header>
  );
};
