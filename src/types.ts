export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'kitchen' | 'cupboards' | 'tv-units' | 'vanities' | 'closets' | 'furniture' | 'tiling';
  image: string;
  features: string[];
  popularChoices: string[];
  finishes: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'kitchen' | 'cupboards' | 'tv-units' | 'vanities' | 'closets' | 'furniture';
  image: string;
  location: string;
  description: string;
  specs: string[];
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  rating: number;
  comment: string;
  date: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email?: string;
  location: string;
  serviceType: string;
  roomDimensions: string;
  finishPreference: string;
  budgetRange: string;
  details: string;
  preferredContact: 'whatsapp' | 'call';
}
