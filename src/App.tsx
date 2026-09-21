/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AndroidNotice } from './components/AndroidNotice';
import { OfferCard } from './components/OfferCard';
import { HowItWorks } from './components/HowItWorks';
import { Transparency } from './components/Transparency';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { OFFERS } from './data/offers';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleScrollToOffers = () => {
    const offersElement = document.getElementById('offers');
    if (offersElement) {
      offersElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header */}
      <Header onOpenModal={(type) => setActiveModal(type)} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToOffers={handleScrollToOffers}
          onScrollToHowItWorks={handleScrollToHowItWorks}
        />

        {/* Offers Section */}
        <section id="offers" className="py-12 sm:py-18 lg:py-20 scroll-mt-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading & Subtitle */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Available Offers
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#334155] leading-relaxed">
                Explore the promotional opportunities below and select an offer to review its details and participation requirements.
              </p>
            </div>

            {/* Android-Only Information Notice */}
            <AndroidNotice />

            {/* Exactly Two Android Offer Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
              {OFFERS.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Transparency & Offer Disclosure Section */}
        <Transparency />
      </main>

      {/* Footer */}
      <Footer onOpenModal={(type) => setActiveModal(type)} />

      {/* Legal & Contact Modal Dialog */}
      <LegalModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
