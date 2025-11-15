
import React from 'react';
import { UI_TEXT, HIGHLIGHT_SERVICES } from '../constants';
import type { Language } from '../types';
import { HighlightServiceCard } from '../components/HighlightServiceCard';

interface ServicesPageProps {
  language: Language;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ language }) => {
  const text = UI_TEXT[language];

  return (
    <div className="animate-fade animate-fade-in-up pb-28 md:pb-0">
      <section className="py-12 sm:py-16 bg-[var(--c-bg-alt)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-10">
                {text.servicesHighlightTitle}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {HIGHLIGHT_SERVICES.map((service, index) => (
                    <div key={service.id} style={{ animationDelay: `${index * 50}ms` }}>
                        <HighlightServiceCard 
                            service={service}
                            language={language}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
