import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ua', name: 'Українська' },
    { code: 'de', name: 'Deutsch' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nLang', lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button 
        className="lang-button" 
        onClick={() => setOpen(!open)}
        aria-label="Switch language"
      >
        <span className="lang-code">{currentLang.code.toUpperCase()}</span>
        <span className={`lang-arrow ${open ? 'open' : ''}`}>▼</span>
      </button>
      <ul className={`lang-list ${open ? 'open' : ''}`}>
        {languages.map((lang) =>
          lang.code !== i18n.language ? (
            <li key={lang.code} onClick={() => changeLang(lang.code)}>
              <span className="lang-name">{lang.name}</span>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}