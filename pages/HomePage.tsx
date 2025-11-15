
import React from 'react';
import type { Language, Page } from '../types';
import { UI_TEXT, SERVICES, SERVICE_CATEGORIES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';

interface PageProps {
    language: Language;
    setActivePage: (page: Page) => void;
}

const Hero: React.FC<PageProps> = ({ language, setActivePage }) => {
  const text = UI_TEXT[language];
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/basma-hero/1920/1080" 
          alt="Modern Kitchen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight" style={{ fontFamily: language === 'ar' ? 'Tajawal' : 'Poppins, sans-serif' }}>
          {text.heroTitle}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          {text.heroSubtitle}
        </p>
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('services');
          }}
          className="glass-btn py-3 px-8 rounded-full text-lg font-semibold text-white shadow-lg"
        >
          {text.heroButton}
        </a>
      </div>
    </section>
  );
};

const ServiceCategories: React.FC<PageProps> = ({ language, setActivePage }) => {
  const text = UI_TEXT[language];
  return (
    <section className="py-16 sm:py-20 bg-[var(--c-bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-12">
          {text.categoriesTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {SERVICE_CATEGORIES.map((category) => (
            <a href="#" key={category.id} className="group text-center" onClick={(e) => {
                e.preventDefault();
                setActivePage('services');
            }}>
              <div className="relative overflow-hidden rounded-full aspect-square shadow-md transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={category.imageUrl} 
                  alt={category.name[language]}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-[var(--c-content)]/20 group-hover:bg-[var(--c-content)]/10 transition-colors duration-300"></div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--c-content)] group-hover:text-opacity-80 transition-colors duration-300">
                {category.name[language]}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedServices: React.FC<{language: Language}> = ({ language }) => {
  const text = UI_TEXT[language];
  return (
    <section className="py-16 sm:py-20 bg-[var(--c-bg-alt)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-12">
          {text.featuredTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.slice(0, 8).map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomePage: React.FC<PageProps> = ({ language, setActivePage }) => {
    return (
        <>
            <div className="animate-fade animate-fade-in-up">
                <Hero language={language} setActivePage={setActivePage} />
            </div>
            <div className="animate-fade animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <ServiceCategories language={language} setActivePage={setActivePage}/>
            </div>
            <div className="animate-fade animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <FeaturedServices language={language} />
            </div>
        </>
    );
};
