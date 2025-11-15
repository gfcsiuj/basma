
import React, { useState, useMemo } from 'react';
import { UI_TEXT, SERVICES, SERVICE_CATEGORIES } from '../constants';
import type { Language } from '../types';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesPageProps {
  language: Language;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ language }) => {
  const text = UI_TEXT[language];
  const [activeCategory, setActiveCategory] = useState('all');

  const displayedServices = useMemo(() => {
    if (activeCategory === 'all') {
      return SERVICES;
    }
    const categoryEnName = SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.name.en;
    return SERVICES.filter(p => p.category.en === categoryEnName);
  }, [activeCategory]);

  const categoryFilters = [{ id: 'all', name: { ar: text.allCategories, en: text.allCategories }}, ...SERVICE_CATEGORIES];

  return (
    <div className="animate-fade animate-fade-in-up">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-10">
            {text.servicesPageTitle}
          </h1>
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              {categoryFilters.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${activeCategory === cat.id ? 'bg-[var(--c-accent)] text-white shadow-md' : 'bg-[var(--c-bg-alt)] hover:bg-[var(--c-content)]/10'}`}
                >
                  {cat.name[language]}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {displayedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
