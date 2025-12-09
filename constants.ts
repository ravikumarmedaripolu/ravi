import { ResumeData } from './types';
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  FileSpreadsheet, 
  Calculator, 
  Monitor,
  Award,
  Music,
  Map,
  Gamepad2
} from 'lucide-react';

export const RESUME: ResumeData = {
  name: "Ravi Kumar Medaripolu",
  title: "Aspiring Business & Finance Professional",
  location: "Teachers Colony, Trimulgherry, Hyderabad",
  phone: "8639539745",
  email: "ravikumarmedaripolu@gmail.com",
  about: "I am a dedicated Bachelor of Commerce student with a strong foundation in computer applications and finance. Known for effective time management and team collaboration, I am eager to leverage my analytical skills and readiness to learn in a professional business environment. My goal is to contribute effectively to organizational objectives while continuously developing my expertise in financial analysis and business operations.",
  languages: ["Telugu (Native)", "English", "Hindi"],
  hobbies: ["Playing Cricket", "Exploring New Places", "Listening to Music"],
  education: [
    {
      institution: "Sardar Patel Degree College, Hyderabad",
      degree: "Bachelor of Commerce (Computer Applications)",
      year: "2023 – Present",
    },
    {
      institution: "Gowtham Junior College",
      degree: "Intermediate (CEC)",
      year: "2021 – 2023",
      score: "57%"
    },
    {
      institution: "Jawahar Nagar Pinion High School",
      degree: "Secondary School Certificate (SSC)",
      year: "2020 – 2021",
      score: "8.8 CGPA"
    }
  ],
  skills: [
    { category: "Soft Skills", items: ["Time Management", "Team Collaboration", "Communication", "Adaptability"] },
    { category: "Technical & Financial", items: ["Basic Financial Analysis", "Tally", "Accounting Basics"] },
    { category: "Software Tools", items: ["MS Excel (Basics)", "MS Word", "MS PowerPoint"] }
  ],
  activities: [
    {
      title: "Interschool Cricket League (U-16)",
      description: "Represented the school team, demonstrating teamwork, discipline, and competitive spirit.",
      role: "Player"
    },
    {
      title: "College Fest Organizing Committee",
      description: "Volunteered to assist in logistics and crowd management, ensuring smooth event execution.",
      role: "Volunteer"
    },
    {
      title: "Cricket Tournaments at Phoenix",
      description: "Organized local cricket tournaments, managing schedules, teams, and resources effectively.",
      role: "Organizer"
    }
  ]
};

export const SECTION_ICONS = {
  Education: BookOpen,
  Skills: TrendingUp,
  Activities: Users,
  Contact: Monitor
};
