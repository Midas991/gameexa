
import { useTranslation } from 'react-i18next';
import './SupportBanner.css';

export default function SupportBanner() {
  const { t } = useTranslation();

  const handleSupport = () => {
    window.open('https://buymeacoffee.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="support-banner">
      <div className="banner-content">
        <div className="banner-icon">
          <div className="icon-glow"></div>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        
        <div className="banner-text">
          <h2 className="banner-title">{t('support.title')}</h2>
          <p className="banner-description">{t('support.desc')}</p>
        </div>
        
        <button className="banner-button" onClick={handleSupport}>
          <span className="button-text">{t('support.button')}</span>
          <div className="button-glow"></div>
        </button>
      </div>
      
      <div className="banner-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
} 