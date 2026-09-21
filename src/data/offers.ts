import { Offer } from '../types';

export const OFFERS: Offer[] = [
  {
    id: 'walmart',
    title: 'Walmart Gift Card Promotion',
    description:
      'Explore the current Walmart promotional offer and review the participation requirements and eligibility details before continuing.',
    ctaText: 'View Walmart Offer',
    ctaUrl: 'https://tundrafile.com/show.php?l=0&u=744889&id=74437',
    deviceRequirementNotice: 'Intended for Android users',
    requirementDisclaimer: 'Review eligibility and participation requirements',
    imageAlt: 'Walmart Gift Card promotional offer artwork',
    imageSources: [
      '/assets/walmart-promo.png',
      '/assets/walmart.png',
      '/assets/walmart-promo.jpg',
      '/assets/walmart.jpg',
      '/assets/walmart-promo.svg',
      '/walmart-promo.png',
      '/walmart.png',
    ],
  },
  {
    id: 'ulta',
    title: 'Ulta Beauty Gift Card Promotion',
    description:
      'Explore the current Ulta Beauty promotional offer and review the participation requirements and eligibility details before continuing.',
    ctaText: 'View Ulta Offer',
    ctaUrl: 'https://doctoredits.com/show.php?l=0&u=744889&id=75105',
    deviceRequirementNotice: 'Intended for Android users',
    requirementDisclaimer: 'Review eligibility and participation requirements',
    imageAlt: 'Ulta Beauty Gift Card promotional offer artwork',
    imageSources: [
      '/assets/ulta-promo.png',
      '/assets/ulta.png',
      '/assets/ulta-promo.jpg',
      '/assets/ulta.jpg',
      '/assets/ulta-promo.svg',
      '/ulta-promo.png',
      '/ulta.png',
    ],
  },
];
