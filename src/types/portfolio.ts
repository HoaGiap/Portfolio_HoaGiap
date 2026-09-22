export type ProjectCategory = 'all' | 'ai' | 'web' | 'desktop' | 'opensource';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  };
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  mockupType: 'browser' | 'terminal' | 'mobile' | 'ai';
  architectureHighlights: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  proficiency: string;
  icon: string;
  experienceYears: string;
  isCore?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Remote' | 'Hybrid' | 'Dự án / Học tập';
  achievements: string[];
  technologies: string[];
}

export interface PersonalProfile {
  name: string;
  brandName: string;
  title: string;
  roleSubtitle: string;
  shortBio: string;
  fullBio: string;
  yearsOfExperience: string; // e.g. "Fresher / 1 năm"
  availableForWork: boolean;
  statusBadge: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    twitter?: string;
  };
  cvFiles?: {
    name: string;
    description: string;
    fileName: string;
  }[];
  stats: {
    label: string;
    value: string;
    suffix?: string;
    description: string;
  }[];
  philosophies: {
    title: string;
    description: string;
    icon: string;
  }[];
}
