import React from 'react';
import { UI_TEXT, MAP_URL } from '../constants';
import type { Language, Page } from '../types';
import { WhatsAppIcon, TelegramIcon, InstagramIcon } from './icons/Icons';

interface FooterProps {
    language: Language;
    setActivePage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, setActivePage }) => {
    const text = UI_TEXT[language];
    const navLinks = [
      { page: 'home' as Page, label: text.navHome },
      { page: 'services' as Page, label: text.navServices },
      { page: 'about' as Page, label: text.navAbout },
      { page: 'contact' as Page, label: text.navContact },
    ];
    return (
      <footer className="bg-[var(--c-footer-bg)] text-[var(--c-footer-text)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img className="h-16 w-auto bg-white/20 p-2 rounded-md" src="https://www.raed.net/img?id=1466531" alt="Basma Logo" />
              <p className="text-sm text-[var(--c-footer-text)]/80 leading-relaxed">
                {text.footerDescription}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{text.footerLinks}</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.label}>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      if(link.page) setActivePage(link.page);
                    }} className="text-[var(--c-footer-text)]/80 hover:text-[var(--c-footer-text)] transition-colors duration-200">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{text.footerContact}</h3>
              <ul className="space-y-2 text-[var(--c-footer-text)]/80">
                <li>{text.whatsapp}: 07846699222</li>
                <li>
                  {text.addressLocation}
                  <a 
                    href={MAP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-sm text-[var(--c-footer-text)]/90 hover:text-[var(--c-footer-text)] underline mt-1"
                  >
                    {text.viewOnMap}
                  </a>
                </li>
              </ul>
              <div className="flex space-x-4 rtl:space-x-reverse mt-4">
                <a href="https://wa.me/9647846699222" target="_blank" rel="noopener noreferrer" className="text-[var(--c-footer-text)]/80 hover:text-[var(--c-footer-text)] transition-colors duration-200">
                  <WhatsAppIcon />
                </a>
                <a href="https://t.me/+9647846699222" target="_blank" rel="noopener noreferrer" className="text-[var(--c-footer-text)]/80 hover:text-[var(--c-footer-text)] transition-colors duration-200">
                  <TelegramIcon />
                </a>
                <a href="https://www.instagram.com/basma.counters" target="_blank" rel="noopener noreferrer" className="text-[var(--c-footer-text)]/80 hover:text-[var(--c-footer-text)] transition-colors duration-200">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--c-footer-text)]/20 pt-8 text-center text-sm text-[var(--c-footer-text)]/60">
            <p>&copy; {new Date().getFullYear()} Basma Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};