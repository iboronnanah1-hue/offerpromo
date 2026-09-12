/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DeviceFilter } from './components/DeviceFilter';
import { OfferCard } from './components/OfferCard';
import { HowItWorks } from './components/HowItWorks';
import { Transparency } from './components/Transparency';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { OFFERS } from './data/offers';
import { DeviceType, ModalType } from './types';

export default function App() {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('all');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // Auto-detect visitor's platform on mount for seamless UX, without auto-redirecting
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.userAgent) {
      const ua = navigator.userAgent.toLowerCase();
      if (/android/.test(ua)) {
        setSelectedDevice('android');
      } else if (/iphone|ipad|ipod/.test(ua)) {
        setSelectedDevice('ios');
      }
    }
  }, []);

  const handleScrollToOffers = () => {
    const offersElement = document.getElementById('offers');
    if (offersElement) {
      offersElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header */}
      <Header onOpenModal={(type) => setActiveModal(type)} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onScrollToOffers={handleScrollToOffers} />

        {/* Offers Section */}
        <section id="offers" className="py-14 sm:py-20 lg:py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Available Gift Card Offers
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600">
                Select an offer below to view its participation requirements.
              </p>
            </div>

            {/* Device Experience Selector */}
            <DeviceFilter
              selectedDevice={selectedDevice}
              onSelectDevice={(device) => setSelectedDevice(device)}
            />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {OFFERS.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  selectedDevice={selectedDevice}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Trust & Transparency Section */}
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
