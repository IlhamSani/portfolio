export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    certifications: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    summary: string;
    cta: string;
    downloadCV: string;
  };
  about: {
    sectionTitle: string;
    paragraphs: string[];
    photoAlt: string;
  };
  experience: {
    sectionTitle: string;
    jobs: Job[];
  };
  projects: {
    sectionTitle: string;
    items: Project[];
  };
  skills: {
    sectionTitle: string;
    categories: SkillCategory[];
  };
  education: {
    sectionTitle: string;
    degrees: Degree[];
  };
  certifications: {
    sectionTitle: string;
    filters?: {
      all: string;
      it: string;
      training: string;
      language: string;
    };
    items: Certification[];
  };
  languages: {
    sectionTitle: string;
    items: LanguageItem[];
  };
  contact: {
    sectionTitle: string;
    description: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinLabel: string;
    github: string;
    githubLabel: string;
  };
  footer: {
    copyright: string;
  };
}

export interface Job {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Degree {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  category?: 'it' | 'training' | 'language';
  file?: string;
  thumbnail?: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}
