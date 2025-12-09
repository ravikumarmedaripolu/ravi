export interface Education {
  institution: string;
  degree: string;
  year: string;
  score?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Activity {
  title: string;
  description: string;
  role?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  about: string;
  languages: string[];
  hobbies: string[];
  education: Education[];
  skills: Skill[];
  activities: Activity[];
}
