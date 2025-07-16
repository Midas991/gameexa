import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './DevelopmentPlansBanner.css';

export default function DevelopmentPlansBanner() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/development');
  };

  return (
    <div className="development-plans-banner">
      <div className="banner-content">
        <div className="banner-icon">
          <div className="icon-glow"></div>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        
        <div className="banner-text">
          <h2 className="banner-title">{t('developmentBanner.title')}</h2>
          <p className="banner-description">{t('developmentBanner.desc')}</p>
        </div>
        
        <button className="banner-button" onClick={handleLearnMore}>
          <span className="button-text">{t('developmentBanner.button')}</span>
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