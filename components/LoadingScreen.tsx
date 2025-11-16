import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const loadingMessages = [
  'جار التحميل...',
];

const FINGERPRINT_IMAGE_URL = 'https://www.raed.net/img?id=1467308';
const LOGO_IMAGE_URL = 'https://www.raed.net/img?id=1466527';

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [isHiding, setIsHiding] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsHiding(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // Must match animation duration
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--c-bg)] transition-opacity duration-500 ${isHiding ? 'opacity-0' : 'opacity-100'}`}
      aria-live="polite"
      aria-busy={!isHiding}
    >
      <div className="loading-container">
        <div className="fingerprint-container">
            <div className="logo-reveal-wrapper">
                <img src={LOGO_IMAGE_URL} alt="شعار بصمة" className="logo-reveal" />
            </div>
            <div className="fingerprint-reveal-wrapper">
                <img src={FINGERPRINT_IMAGE_URL} alt="تحميل البصمة" className="fingerprint-reveal" />
            </div>
        </div>
        <div className="loading-text-container flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[var(--c-content)]">بصمة</h2>
          <p className="text-md text-[var(--c-content)]/70 mt-1 max-w-xs">للألمنيوم والمطابخ الحديثة</p>
        </div>
      </div>
      <div className="loading-messages">
        {loadingMessages.map((msg, index) => (
            <span key={index} style={{ animationDelay: `${index * 4}s` }}>
                {msg}
            </span>
        ))}
      </div>
    </div>
  );
};