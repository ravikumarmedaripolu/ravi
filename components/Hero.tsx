import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { RESUME } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute top-0 left-0 -ml-20 -mt-20 w-[600px] h-[600px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="flex-1 text-center lg:text-left">
            <div class="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              Portfolio & Resume
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{RESUME.name.split(" ")[0]}</span>
            </h1>
            <p class="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              {RESUME.title} based in <span class="font-medium text-slate-800">Hyderabad</span>.
            </p>
            <p class="text-base text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0">
              Focused on Finance, Computer Applications, and Business Operations. Ready to bring analytical skills and teamwork to your organization.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Contact Me
                <ArrowRight class="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#education"
                class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              >
                View Education
              </a>
            </div>
          </div>
          
          <div class="flex-1 w-full max-w-lg lg:max-w-none">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 transform rotate-6 rounded-2xl opacity-10 blur-lg"></div>
              <div class="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {RESUME.name.charAt(0)}
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900">{RESUME.name}</h3>
                    <p class="text-sm text-slate-500">{RESUME.email}</p>
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="h-2 bg-slate-100 rounded w-3/4"></div>
                  <div class="h-2 bg-slate-100 rounded w-full"></div>
                  <div class="h-2 bg-slate-100 rounded w-5/6"></div>
                  <div class="h-2 bg-slate-100 rounded w-4/5"></div>
                </div>
                <div class="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                   <div class="text-sm font-medium text-slate-500">Resume Preview</div>
                   <button class="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                     <Download class="w-4 h-4 mr-1" /> Download CV
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
