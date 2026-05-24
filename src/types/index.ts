// Type definitions for the application

export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  services: string[];
  message: string;
}

export interface UserPreferences {
  theme?: 'dark' | 'light';
  region?: string;
  language?: string;
  services?: string[];
}
