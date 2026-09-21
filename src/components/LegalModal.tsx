import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { ModalType } from '../types';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  if (!type) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs">
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <h3 className="text-lg font-bold text-[#0F172A]">
            {type === 'privacy' && 'Privacy Policy'}
            {type === 'terms' && 'Terms of Use'}
            {type === 'disclosure' && 'Offer Disclosure'}
            {type === 'contact' && 'Contact'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#334155] leading-relaxed">
          {type === 'privacy' && (
            <div id="privacy" className="space-y-3">
              <p className="font-semibold text-[#0F172A]">
                Last Updated: 2026
              </p>
              <p>
                Consumer Offers values the privacy of its visitors. This Privacy Policy outlines our data handling practices for this landing page.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Information Handling</h4>
              <p>
                We do not collect sensitive personal data such as financial account numbers or government identification on this website. Like standard web servers, technical logs (including IP addresses, device user agents, and referring URLs) may be recorded for performance and security maintenance.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Third-Party Destinations</h4>
              <p>
                When you click an external link to explore a promotional offer, you navigate to an independent third-party website. We encourage visitors to review the privacy policy and terms of participation published on each destination page.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-3">
              <p className="font-semibold text-[#0F172A]">
                Last Updated: 2026
              </p>
              <p>
                By using Consumer Offers, you agree to these Terms of Use.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Informational Purpose</h4>
              <p>
                This website is an independent promotional directory intended solely to provide information regarding third-party promotional opportunities. We do not issue, supply, or directly fulfill gift cards.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Eligibility &amp; Requirements</h4>
              <p>
                All offers displayed on this website have their own specific eligibility rules, terms, and verification procedures set by their respective promoters. Review each offer&apos;s details thoroughly before participating.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Non-Affiliation</h4>
              <p>
                All trademarks, brand names, and logos belong to their respective owners. Mention of any third-party brand does not constitute or imply sponsorship, affiliation, or endorsement.
              </p>
            </div>
          )}

          {type === 'disclosure' && (
            <div className="space-y-3">
              <h4 className="font-bold text-[#0F172A]">Affiliate Disclosure</h4>
              <p>
                Affiliate Disclosure: Some links on this website may be affiliate links. We may receive compensation when a visitor completes a qualifying action through an offer.
              </p>
              <p className="text-xs text-[#64748B]">
                Visitors are never charged any fee to view, browse, or review the promotional listings on Consumer Offers.
              </p>
            </div>
          )}

          {type === 'contact' && (
            <div className="space-y-3">
              {contactSubmitted ? (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 text-center space-y-2">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-base">
                    Message Sent
                  </h4>
                  <p className="text-sm text-[#475569]">
                    Thank you for your message. We have received your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <p className="text-sm text-[#475569]">
                    If you have questions regarding the promotional offers displayed on this page, please leave a message below.
                  </p>
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Your inquiry or feedback..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#E2E8F0] bg-[#F8FAFC] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#E2E8F0] hover:bg-slate-300 text-[#0F172A] text-sm font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
