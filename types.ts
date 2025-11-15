
export interface LocalizedString {
  ar: string;
  en: string;
}

export interface Service {
  id: number;
  name: LocalizedString;
  category: LocalizedString;
  imageUrl: string;
  description: LocalizedString;
}

export interface ServiceCategory {
    id: string;
    name: LocalizedString;
    imageUrl: string;
}

export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';
export type Page = 'home' | 'services' | 'about' | 'contact';
