import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    if (!targetId || targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-2.5 text-[#0F172A] hover:text-[#334155] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-xs">
                CO
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight text-[#0F172A]">
                Consumer Offers
              </span>
            </a>
          </div>

          {/* Desktop Navigation: Home, Offers, How It Works, Terms, Privacy */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'home')}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            >
              Home
            </a>
            <a
              href="#offers"
              onClick={(e) => handleNavClick(e, 'offers')}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            >
              Offers
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            >
              How It Works
            </a>
            <button
              onClick={() => onOpenModal('terms')}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => onOpenModal('privacy')}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              Privacy
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
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
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 pt-2 pb-4 space-y-1 shadow-md">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'home')}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            Home
          </a>
          <a
            href="#offers"
            onClick={(e) => handleNavClick(e, 'offers')}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            Offers
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleNavClick(e, 'how-it-works')}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            How It Works
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal('terms');
            }}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-[#0F172A] hover:bg-[#F8FAFC] cursor-pointer"
          >
            Terms
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal('privacy');
            }}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-[#0F172A] hover:bg-[#F8FAFC] cursor-pointer"
          >
            Privacy
          </button>
        </div>
      )}
    </header>
  );
};
