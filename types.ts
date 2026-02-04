export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: 'sports' | 'events' | 'exhibitions' | 'influencer';
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}
