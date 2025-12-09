import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  icon?: React.ElementType;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, className = "", children, icon: Icon }) => {
  return (
    <section id={id} class={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div class="max-w-5xl mx-auto">
        {(title || subtitle) && (
          <div class="mb-12 text-center">
            {title && (
              <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4 inline-flex items-center justify-center gap-3">
                {Icon && <Icon className="w-8 h-8 text-blue-600" />}
                {title}
              </h2>
            )}
            {subtitle && (
              <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div class="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full opacity-80"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
