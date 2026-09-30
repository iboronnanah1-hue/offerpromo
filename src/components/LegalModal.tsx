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
            {type === 'disclosure' && 'Offer & Affiliate Disclosure'}
            {type === 'contact' && 'Contact OfferPromo'}
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
                OfferPromo operates this independent informational website. We value the privacy of our visitors and are committed to transparency regarding any data gathered through this landing page.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Information Collection &amp; Use</h4>
              <p>
                We do not collect personal financial data or sensitive identifying details on this landing page. Standard technical web server logs (such as IP addresses, referring URLs, browser user agents, and visit timestamps) may be automatically logged for diagnostic and traffic evaluation purposes.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Third-Party Offer Destinations</h4>
              <p>
                When you click &quot;Check the Opportunity,&quot; you will be directed to an external third-party promotional offer page (such as Consumer Test Connect). OfferPromo does not control and is not responsible for the privacy practices, tracking technologies, or terms of third-party websites. We encourage you to review their specific privacy policies before submitting information.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-3">
              <p className="font-semibold text-[#0F172A]">
                Last Updated: 2026
              </p>
              <p>
                By using OfferPromo, you agree to these Terms of Use.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Informational &amp; Promotional Purpose</h4>
              <p>
                OfferPromo is an independent promotional information website. We do not manufacture, issue, or directly fulfill gift cards. The promotional opportunities featured on our website are provided by third-party promotional networks.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Eligibility &amp; Verification</h4>
              <p>
                All offers, surveys, trials, or research programs featured have their own eligibility criteria (e.g. Android operating system requirement, United States residency, age 18+). Participation in any opportunity is entirely voluntary and subject to verification by the offer provider.
              </p>
              <h4 className="font-bold text-[#0F172A] pt-1">Non-Affiliation Notice</h4>
              <p>
                All trademarks, service marks, trade names, and logos are the property of their respective owners. Mention of Jersey Mike&apos;s Subs does not imply any affiliation, sponsorship, or endorsement of OfferPromo or Consumer Test Connect.
              </p>
            </div>
          )}

          {type === 'disclosure' && (
            <div className="space-y-3">
              <h4 className="font-bold text-[#0F172A]">Affiliate &amp; Compensation Disclosure</h4>
              <p>
                OfferPromo is an independent promotional website. The promotional opportunity shown on this page may be provided by a third-party service. OfferPromo is not affiliated with or endorsed by Jersey Mike&apos;s Subs. Eligibility, availability and requirements may vary.
              </p>
              <p>
                <span className="font-semibold text-[#0F172A]">Affiliate Disclosure:</span> Some links on this website may be affiliate links. We may receive compensation when a visitor completes a qualifying action through an offer.
              </p>
              <p className="text-xs text-[#64748B]">
                Please review all terms and requirements presented on the offer page before participating. Browsing and reviewing opportunities on OfferPromo is always free for consumers.
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
                    Thank you for your message. An OfferPromo team member will review your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <p className="text-sm text-[#475569]">
                    Have a question or comment about this promotional review? Reach out using the form below:
                  </p>
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#581C87]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#581C87]"
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
                      placeholder="Describe your inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#581C87]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-[#581C87] hover:bg-[#4C1D95] text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Send Message
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
