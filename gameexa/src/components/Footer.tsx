import './Footer.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { i18n } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nLang', lng);
  };

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ua', name: 'UA' },
    { code: 'de', name: 'DE' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Gameexa. All rights reserved.</p>
          <p className="secondary-text">Game content and trademarks are property of their respective owners.</p>
        </div>
        <div className="footer-center">
          <p className="secondary-text">Created with <span className="heart">❤️</span> for gamers by gamers</p>
        </div>
        <div className="footer-right">
          <div className="footer-lang-switcher">
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`footer-lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                onClick={() => changeLang(lang.code)}
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