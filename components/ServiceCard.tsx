
import React, { useState } from 'react';
import type { Service, Language } from '../types';

interface ServiceCardProps {
  service: Service;
  language: Language;
  onProductClick?: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, language, onProductClick }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div 
      className="bg-[var(--c-bg)] rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col relative animate-fade-in-up cursor-pointer" 
      onClick={() => onProductClick?.(service)}>
      <div className="relative overflow-hidden h-44 sm:h-56">
        <img 
          src={service.imageUrl} 
          alt={service.name[language]} 
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} 
        />
        {!isImageLoaded && <div className="absolute inset-0 skeleton"></div>}
        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${isImageLoaded ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}></div>
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <p className="text-xs sm:text-sm text-[var(--c-content)]/70 mb-1">{service.category[language]}</p>
        <h3 className="text-sm sm:text-base font-bold leading-tight text-[var(--c-content)] mb-2 flex-grow">
          {service.name[language]}
        </h3>
      </div>
    </div>
  );
};