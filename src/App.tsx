/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { ArticleHero } from './components/ArticleHero';
import { OpportunitySection } from './components/OpportunitySection';
import { WhySection } from './components/WhySection';
import { HowToCheck } from './components/HowToCheck';
import { EligibilityBox } from './components/EligibilityBox';
import { FinalCta } from './components/FinalCta';
import { Transparency } from './components/Transparency';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] antialiased selection:bg-purple-100 selection:text-purple-900">
      {/* Top Header */}
      <Header onOpenModal={(type) => setActiveModal(type)} />

      <main className="flex-1">
        {/* Article Headline, Intro, Image & Primary CTA */}
        <ArticleHero />

        {/* What's the Opportunity Section */}
        <OpportunitySection />

        {/* Why a Jersey Mike's Gift Card Section */}
        <WhySection />

        {/* 3-Step Guide: How to Check the Opportunity */}
        <HowToCheck />

        {/* Highlighted Eligibility Checklist Box: Before You Continue */}
        <EligibilityBox />

        {/* Final CTA Section: Interested in Checking It Out? */}
        <FinalCta />

        {/* Transparency, Brand Disclaimers & Affiliate Disclosures */}
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
