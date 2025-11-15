
import React, { useMemo } from 'react';
import { UI_TEXT } from '../constants';
import type { Language, Page } from '../types';
import { HomeIcon, GridIcon, InfoIcon, PhoneIcon } from './icons/Icons';

interface BottomNavProps {
    language: Language;
    activePage: Page;
    setActivePage: (page: Page) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ language, activePage, setActivePage }) => {
    const text = UI_TEXT[language];
    const navItems = useMemo(() => [
        { id: 'home' as Page, label: text.bottomNavHome, icon: <HomeIcon /> },
        { id: 'services' as Page, label: text.bottomNavServices, icon: <GridIcon /> },
        { id: 'about' as Page, label: text.bottomNavAbout, icon: <InfoIcon /> },
        { id: 'contact' as Page, label: text.bottomNavContact, icon: <PhoneIcon /> },
    ], [text]);
    
    const activeTabIndex = navItems.findIndex(item => item.id === activePage);
    const sliderWidth = 100 / navItems.length;
    const isRtl = language === 'ar';
    const sliderPosition = isRtl
      ? (navItems.length - 1 - activeTabIndex) * 100
      : activeTabIndex * 100;

    return (
      <nav className="md:hidden fixed bottom-4 inset-x-4 h-16 z-50 glass-bar rounded-full p-1">
        <div
          className="glass-bar-slider"
          style={{
            width: `${sliderWidth}%`,
            transform: `translateX(${sliderPosition}%)`,
          }}
        />
        <div className="flex justify-around items-center h-full w-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActivePage(item.id);
              }}
              className={`relative z-10 flex flex-col items-center justify-center space-y-1 w-full h-full text-center transition-colors duration-300 ${
                activePage === item.id ? 'text-[var(--c-action)]' : 'text-[var(--c-content)]/70'
              } hover:text-[var(--c-action)]`}
              aria-current={activePage === item.id ? 'page' : undefined}
            >
              {React.cloneElement(item.icon, { 'aria-hidden': true, className: `h-6 w-6 ${activePage === item.id ? 'text-[var(--c-action)]' : ''}` })}
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    );
};