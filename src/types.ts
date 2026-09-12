export type DeviceType = 'all' | 'android' | 'ios';

export interface Offer {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  deviceTarget: 'android' | 'ios';
  deviceTargetLabel: string;
  deviceMatchNotice: string;
  imageAlt: string;
  imageSources: string[];
  themeColor: string;
  buttonClass: string;
  badgeBg: string;
  badgeText: string;
}

export type ModalType = 'privacy' | 'terms' | 'disclosure' | 'contact' | null;
