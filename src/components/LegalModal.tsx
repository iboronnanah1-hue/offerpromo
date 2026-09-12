import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Info, Mail, Check } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-blue-600" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-indigo-600" />}
            {type === 'disclosure' && <Info className="w-5 h-5 text-amber-600" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-emerald-600" />}
            <h3 className="text-lg font-bold text-slate-900">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms of Use'}
              {type === 'disclosure' && 'Offer & Affiliate Disclosure'}
              {type === 'contact' && 'Contact Us'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p className="font-semibold text-slate-800">
                Effective Date: January 1, 2026
              </p>
              <p>
                This Privacy Policy describes how Consumer Offers (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles information in connection with your visit to this landing page.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Information We Do Not Collect</h4>
              <p>
                We do not require you to create an account or provide sensitive personal information (such as your Social Security Number or banking credentials) on this landing page.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Technical &amp; Usage Data</h4>
              <p>
                Like most websites, our web hosting servers may automatically record standard technical data, such as your IP address, browser type, device operating system, referring URL, and timestamps, to ensure stability, prevent abuse, and optimize page performance.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Third-Party Links &amp; Offers</h4>
              <p>
                When you click on an external link to view a promotional offer, you are directed to an independent third-party website with its own privacy practices and terms. We encourage you to review the privacy policy and terms of any third-party destination before providing personal details.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Contact Inquiries</h4>
              <p>
                If you contact us regarding any questions about our promotional listings, we use the information you provide solely to reply to your inquiry.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p className="font-semibold text-slate-800">
                Last Updated: January 1, 2026
              </p>
              <p>
                By accessing or using Consumer Offers, you agree to comply with and be bound by these Terms of Use.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Independent Promotional Directory</h4>
              <p>
                Consumer Offers is an informational promotional directory. We provide links to third-party offers and campaigns. We do not manufacture, sell, distribute, or directly fulfill gift cards or promotional rewards.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Offer Terms &amp; Eligibility</h4>
              <p>
                All promotions presented on this site are subject to the terms, conditions, and eligibility guidelines established solely by their respective third-party sponsors. Participation requirements, geographic eligibility, and availability vary. We make no representations or guarantees regarding your qualification for any offer.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Non-Affiliation Disclaimer</h4>
              <p>
                All trademarks, logos, and brand names displayed belong to their respective owners. Their mention does not imply endorsement, affiliation, or sponsorship.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Limitation of Liability</h4>
              <p>
                In no event shall Consumer Offers or its operators be liable for any direct, indirect, incidental, or consequential damages resulting from your participation in third-party promotional programs.
              </p>
            </>
          )}

          {type === 'disclosure' && (
            <>
              <p className="font-semibold text-slate-800">
                Compliance &amp; Advertising Disclosure
              </p>
              <p>
                In accordance with Federal Trade Commission (FTC) guidelines for digital advertising and commercial disclosures:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900 font-medium my-3">
                &quot;Some links on this page may be affiliate links. We may receive compensation when a visitor completes a qualifying action through an offer.&quot;
              </div>
              <p>
                This compensation helps cover the operational costs associated with maintaining this promotional landing page and reviewing available consumer offers.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">How Compensation Works</h4>
              <p>
                When you click a link and complete a qualifying requirement (such as submitting an email, registering, or fulfilling the promotional terms defined on the sponsor&apos;s site), the advertiser or affiliate network may provide compensation to our platform.
              </p>
              <p>
                You are never charged a fee to view, browse, or click on the promotional offers featured on Consumer Offers.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              {contactSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-2">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    Message Received
                  </h4>
                  <p className="text-sm text-slate-600">
                    Thank you for reaching out. We have received your inquiry and will review it promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <p className="text-sm text-slate-600">
                    Have a question or feedback regarding one of the promotional listings on our site? Please send us a message below.
                  </p>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Inquiry
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Please enter your inquiry regarding the promotional offers..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
