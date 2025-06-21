import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      <button className="lang-button" onClick={() => setOpen(!open)}>
        {i18n.language.toUpperCase()}
      </button>
      <ul className={`lang-list ${open ? 'open' : ''}`}>
        {['en', 'ua', 'de'].map((lng) =>
          lng !== i18n.language ? (
            <li key={lng} onClick={() => changeLang(lng)}>
              {lng.toUpperCase()}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}