import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ChatWidget from './components/ChatWidget';
import { RESUME, SECTION_ICONS } from './constants';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Calendar,
  CheckCircle2,
  Trophy,
  Globe,
  Music,
  Plane,
  Gamepad2
} from 'lucide-react';

const AboutSection: React.FC = () => (
  <Section id="about" title="About Me" subtitle="A snapshot of who I am and what I do.">
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
      <div class="prose prose-lg text-slate-600 max-w-none mb-10">
        <p class="leading-relaxed">{RESUME.about}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Globe class="w-5 h-5 text-blue-500" /> Languages
          </h3>
          <div class="flex flex-wrap gap-2">
            {RESUME.languages.map((lang, idx) => (
              <span key={idx} class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                {lang}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Gamepad2 class="w-5 h-5 text-indigo-500" /> Hobbies & Interests
          </h3>
          <div class="flex flex-wrap gap-4">
            {RESUME.hobbies.map((hobby, idx) => (
              <div key={idx} class="flex items-center text-slate-600 text-sm">
                <CheckCircle2 class="w-4 h-4 text-green-500 mr-2" />
                {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const EducationSection: React.FC = () => (
  <Section id="education" title="Education" icon={SECTION_ICONS.Education} className="bg-slate-50">
    <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {RESUME.education.map((edu, index) => (
        <div key={index} class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* Icon Marker */}
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
             <GraduationCap class="w-5 h-5 text-blue-600" />
          </div>
          
          {/* Card */}
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <span class="font-bold text-slate-800 text-lg">{edu.degree}</span>
              <time class="font-mono text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded mt-2 sm:mt-0 w-fit">
                {edu.year}
              </time>
            </div>
            <div class="text-slate-600 font-medium mb-2">{edu.institution}</div>
            {edu.score && (
              <div class="inline-flex items-center text-sm text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded">
                Score: {edu.score}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const SkillsSection: React.FC = () => (
  <Section id="skills" title="Skills" icon={SECTION_ICONS.Skills}>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {RESUME.skills.map((skillGroup, index) => (
        <div key={index} class="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
          <h3 class="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            {skillGroup.category}
          </h3>
          <ul class="space-y-3">
            {skillGroup.items.map((item, idx) => (
              <li key={idx} class="flex items-start">
                <div class="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                <span class="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const ActivitiesSection: React.FC = () => (
  <Section id="activities" title="Extracurriculars" icon={SECTION_ICONS.Activities} className="bg-slate-50">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {RESUME.activities.map((activity, index) => (
        <div key={index} class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100">
          <div class="h-2 bg-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
               <div class="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                 <Trophy size={20} />
               </div>
               {activity.role && (
                 <span class="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                   {activity.role}
                 </span>
               )}
            </div>
            <h3 class="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {activity.title}
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              {activity.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const ContactSection: React.FC = () => (
  <Section id="contact" title="Get In Touch" icon={SECTION_ICONS.Contact}>
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Info */}
        <div class="bg-slate-900 p-10 text-white flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
            <p class="text-slate-300 mb-8">
              I am currently open to internships and entry-level opportunities. Feel free to reach out!
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <Phone class="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <div class="font-medium text-slate-200">Phone</div>
                  <a href={`tel:${RESUME.phone}`} class="text-slate-400 hover:text-white transition-colors">{RESUME.phone}</a>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <Mail class="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <div class="font-medium text-slate-200">Email</div>
                  <a href={`mailto:${RESUME.email}`} class="text-slate-400 hover:text-white transition-colors">{RESUME.email}</a>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <MapPin class="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <div class="font-medium text-slate-200">Location</div>
                  <p class="text-slate-400">{RESUME.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              {/* Add more social icons if needed */}
            </div>
          </div>
        </div>

        {/* Contact Form (Visual Only) */}
        <div class="p-10 bg-white">
          <form onSubmit={(e) => e.preventDefault()} class="space-y-6">
            <div>
              <label htmlFor="name" class="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" id="name" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" class="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" id="email" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" class="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea id="message" rows={4} class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </Section>
);

const Footer: React.FC = () => (
  <footer class="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="text-sm">
        &copy; {new Date().getFullYear()} {RESUME.name}. All rights reserved.
      </div>
      <div class="flex gap-6 text-sm">
        <a href="#home" class="hover:text-white transition-colors">Home</a>
        <a href="#about" class="hover:text-white transition-colors">About</a>
        <a href="#contact" class="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <Hero />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ActivitiesSection />
        <ContactSection />
      </main>
      <ChatWidget />
      <Footer />
    </div>
  );
}
