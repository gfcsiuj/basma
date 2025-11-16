import React, { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoadingScreen } from './components/LoadingScreen';
import type { Language, Theme, Page } from './types';

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('ar');
    const [theme, setTheme] = useState<Theme>('light');
    const [activePage, setActivePage] = useState<Page>('home');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulate asset loading to show the loader
        const timer = setTimeout(() => setIsLoading(false), 6500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
    };
    
    const handlePageChange = (page: Page) => {
        setActivePage(page);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch(activePage) {
            case 'home':
                return <HomePage language={language} setActivePage={handlePageChange} />;
            case 'services':
                return <ServicesPage language={language} />;
            case 'about':
                return <AboutPage language={language} />;
            case 'contact':
                return <ContactPage language={language} />;
            default:
                return <HomePage language={language} setActivePage={handlePageChange} />;
        }
    }

    return (
        <AppProvider>
            <div className="bg-[var(--c-bg)] text-[var(--c-content)] min-h-screen">
                <LoadingScreen isLoading={isLoading} />
                <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <Header 
                        language={language} 
                        toggleLanguage={toggleLanguage} 
                        theme={theme}
                        onThemeChange={setTheme}
                        setActivePage={handlePageChange}
                        activePage={activePage}
                    />
                    <main className="overflow-x-hidden" key={activePage}>
                        {renderPage()}
                    </main>
                    <Footer language={language} setActivePage={handlePageChange} />
                    <BottomNav language={language} activePage={activePage} setActivePage={handlePageChange} />
                </div>
            </div>
        </AppProvider>
    );
};

export default App;