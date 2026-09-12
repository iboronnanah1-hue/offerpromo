import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { ModalType } from '../types';

interface HeaderProps {
  onOpenModal: (type: ModalType) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Site Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 text-slate-900 hover:text-slate-700 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900">
                  Consumer Offers
                </span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider hidden sm:inline-block">
                  Independent Promotional Portal
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#offers"
              onClick={(e) => handleNavClick(e, 'offers')}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Offers
            </a>
            <button
              onClick={() => onOpenModal('terms')}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => onOpenModal('privacy')}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Privacy
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-slate-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <a
            href="#how-it-works"
            onClick={(e) => handleNavClick(e, 'how-it-works')}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            How It Works
          </a>
          <a
            href="#offers"
            onClick={(e) => handleNavClick(e, 'offers')}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            Offers
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal('terms');
            }}
            className="w-full text-left block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            Terms of Service
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal('privacy');
            }}
            className="w-full text-left block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            Privacy Policy
          </button>
        </div>
      )}
    </header>
  );
};
