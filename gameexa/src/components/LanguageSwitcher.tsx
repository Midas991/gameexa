import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nLang', lng);
  };

  return (
    <div className="lang-switcher">
      {['en', 'ua', 'de'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLang(lng)}
          className={i18n.language === lng ? 'active' : ''}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}