
import React from 'react';
import { UI_TEXT } from '../constants';
import type { Language } from '../types';
import { WhatsAppIcon, TelegramIcon, MapPinIcon } from '../components/icons/Icons';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const text = UI_TEXT[language];
  const contactMethods = [
    { 
      label: text.whatsapp, 
      value: "07846699222",
      icon: <WhatsAppIcon className="w-8 h-8 text-[var(--c-accent)]" />, 
      href: 'https://wa.me/9647846699222' 
    },
    { 
      label: text.telegram,
      value: "تواصل معنا",
      icon: <TelegramIcon className="w-8 h-8 text-[var(--c-accent)]" />, 
      href: 'https://t.me/+9647846699222' 
    },
  ];

  return (
    <div className="animate-fade animate-fade-in-up">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[var(--c-content)] mb-4">
            {text.contactPageTitle}
          </h1>
          <p className="text-center text-[var(--c-content)]/70 -mt-2 mb-10 max-w-md mx-auto">{text.contactPageSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {contactMethods.map(method => (
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                key={method.label}
                className="block p-6 bg-[var(--c-bg-alt)] rounded-xl shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  {method.icon}
                </div>
                <h3 className="font-bold text-xl mb-1">{method.label}</h3>
                <p className="text-[var(--c-content)]/80" dir="ltr">{method.value}</p>
              </a>
            ))}
          </div>
          <div className="p-6 bg-[var(--c-bg-alt)] rounded-xl shadow-sm text-center">
             <div className="flex justify-center mb-3">
                <MapPinIcon className="w-8 h-8 text-[var(--c-accent)]" />
            </div>
            <h3 className="font-bold text-xl mb-2">{text.address}</h3>
            <p className="text-[var(--c-content)]/80 max-w-sm mx-auto">{text.addressLocation}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
