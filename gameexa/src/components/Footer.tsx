import './Footer.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Footer() {
  const { t, i18n } = useTranslation();

  // Загружаем сохраненный язык при инициализации
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nLang');
    console.log('Saved language:', savedLang);
    console.log('Current i18n language:', i18n.language);
    
    if (savedLang && i18n.language !== savedLang) {
      console.log('Changing language to:', savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const changeLang = (lng: string) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nLang', lng);
    console.log('Language changed, new language:', i18n.language);
  };

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ua', name: 'UA' },
    { code: 'de', name: 'DE' },
  ];

  console.log('Current language:', i18n.language);
  console.log('Available languages:', i18n.languages);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Gameexa</p>
          <p>{t('footer.rights')}</p>
          <p className="secondary-text">Game content and trademarks are property of their respective owners.</p>
        </div>
        <div className="footer-center">
          <p className="secondary-text">{t('footer.made')}</p>
          <p className="secondary-text">
            Created by gamers <span className="heart-glow">❤️</span> for gamers
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-lang-switcher">
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`footer-lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                onClick={() => changeLang(lang.code)}
                style={{ 
                  backgroundColor: i18n.language === lang.code ? '#3a8dde' : 'transparent',
                  color: i18n.language === lang.code ? 'white' : 'inherit'
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>
          <a href="mailto:contact.gameexa@gmail.com" className="contact-email">
            contact.gameexa@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}