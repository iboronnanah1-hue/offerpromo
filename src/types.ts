export interface Offer {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  deviceRequirementNotice: string;
  requirementDisclaimer: string;
  imageAlt: string;
  imageSources: string[];
}

export type ModalType = 'privacy' | 'terms' | 'disclosure' | 'contact' | null;
