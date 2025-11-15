
import React, { useState, useMemo } from 'react';
import { UI_TEXT } from '../constants';
import type { Language, Theme, Page } from '../types';
import { MenuIcon, GlobeIcon, XIcon, HomeIcon, GridIcon, InfoIcon, PhoneIcon } from './icons/Icons';
import { ThemeSwitcher } from './ThemeSwitcher';

interface HeaderProps {
    language: Language;
    toggleLanguage: () => void;
    theme: Theme;
    onThemeChange: (theme: Theme) => void;
    activePage: Page;
    setActivePage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, theme, onThemeChange, setActivePage, activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const text = UI_TEXT[language];
    const isRtl = language === 'ar';

    const navItems = useMemo(() => [
        { id: 'home' as Page, label: text.bottomNavHome, icon: <HomeIcon /> },
        { id: 'services' as Page, label: text.bottomNavServices, icon: <GridIcon /> },
        { id: 'about' as Page, label: text.bottomNavAbout, icon: <InfoIcon /> },
        { id: 'contact' as Page, label: text.bottomNavContact, icon: <PhoneIcon /> },
    ], [text]);

    const activeTabIndex = navItems.findIndex(item => item.id === activePage);
    const sliderWidth = 100 / navItems.length;
    
    const sliderPosition = isRtl
        ? (navItems.length - 1 - activeTabIndex) * 100
        : activeTabIndex * 100;

    const handleMenuClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setIsMenuOpen(false);
        }, 300);
    };
    
    const handleNavLinkClick = (page: Page) => {
        setActivePage(page);
        handleMenuClose();
    };

    const menuAnimationClass = isRtl
        ? (isClosing ? 'cart-exit-rtl' : 'cart-enter-rtl')
        : (isClosing ? 'cart-exit-ltr' : 'cart-enter-ltr');
    const backdropAnimation = isClosing ? 'modal-exit' : 'modal-enter';

    return (
        <>
            <header className="bg-[var(--c-bg)]/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-8 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('home'); }} className="flex items-center">
                                    <img className="h-16 w-auto" src="https://www.raed.net/img?id=1466527" alt="Basma Logo" />
                                </a>
                            </div>
                            <nav className="hidden md:block h-14 w-[450px] relative">
                                <div className="glass-bar rounded-full p-1 h-full">
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
                                                onClick={(e) => { e.preventDefault(); setActivePage(item.id); }}
                                                className={`relative z-10 flex items-center justify-center space-x-2 rtl:space-x-reverse w-full h-full text-center transition-colors duration-300 ${activePage === item.id ? 'text-[var(--c-action)]' : 'text-[var(--c-content)]/70'} hover:text-[var(--c-action)]`}
                                                aria-current={activePage === item.id ? 'page' : undefined}
                                            >
                                                {React.cloneElement(item.icon, { 'aria-hidden': true, className: `h-5 w-5 ${activePage === item.id ? 'text-[var(--c-action)]' : ''}` })}
                                                <span className="text-sm font-medium">{item.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse">
                            <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
                            <button onClick={toggleLanguage} className="hidden md:flex items-center space-x-1 rtl:space-x-reverse p-2 text-[var(--c-content)] hover:text-opacity-75 rounded-full text-sm font-medium">
                                <GlobeIcon />
                                <span>{text.language}</span>
                            </button>
                            <button className="md:hidden flex items-center justify-center h-11 w-11 glass-btn text-[var(--c-content)] rounded-full" onClick={() => setIsMenuOpen(true)}>
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {(isMenuOpen || isClosing) && (
                <div role="dialog" aria-modal="true" className="md:hidden fixed inset-0 z-50 flex" dir={isRtl ? 'rtl' : 'ltr'}>
                    <div className={`fixed inset-0 bg-black/50 ${backdropAnimation}`} onClick={handleMenuClose}></div>
                    <div className={`relative z-10 w-4/5 max-w-sm h-full bg-[var(--c-bg)] shadow-2xl flex flex-col ${menuAnimationClass} ${isRtl ? 'ml-0 mr-auto' : 'mr-0 ml-auto'}`}>
                        <div className="flex items-center justify-between p-4 border-b border-[var(--c-content)]/10">
                            <h2 className="font-bold text-lg">{text.menu}</h2>
                            <button onClick={handleMenuClose} className="p-2 -m-2">
                                <XIcon />
                            </button>
                        </div>
                        <nav className="flex-grow p-4">
                            <ul className="space-y-2">
                                {navItems.map((link) => (
                                    <li key={link.id}>
                                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.id); }} className="block p-3 rounded-md text-lg font-medium text-[var(--c-content)] hover:bg-[var(--c-content)]/10">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="p-4 border-t border-[var(--c-content)]/10">
                            <button onClick={() => { toggleLanguage(); handleMenuClose(); }} className="w-full flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-md text-lg font-medium text-[var(--c-content)] hover:bg-[var(--c-content)]/10">
                                <GlobeIcon />
                                <span>{text.language}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};