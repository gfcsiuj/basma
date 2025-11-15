
import React, { useState } from 'react';
import type { HighlightService, Language } from '../types';

interface HighlightServiceCardProps {
  service: HighlightService;
  language: Language;
}

export const HighlightServiceCard: React.FC<HighlightServiceCardProps> = ({ service, language }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl animate-fade-in-up">
        <img
            src={service.imageUrl}
            alt={service.name[language]}
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {!isImageLoaded && <div className="absolute inset-0 skeleton"></div>}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <h3 className="text-base font-bold text-white leading-tight">
                {service.name[language]}
            </h3>
        </div>
    </div>
  );
};
