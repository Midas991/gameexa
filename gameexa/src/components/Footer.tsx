import './Footer.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Разделяем текст на части до и после сердечка
  const madeText = t('footer.made');
  const parts = madeText.split('❤️');
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-copyright">
            © {currentYear} Gameexa<br />
            {t('footer.rights')}
          </span>
        </div>
        <div className="footer-center">
          <span className="footer-accent">
            {parts[0]}
            <span className="heart">❤️</span>
            {parts[1]}
          </span>
        </div>
        <div className="footer-right">
          <a href="mailto:contact.gameexa@gmail.com" className="footer-email">
            contact.gameexa@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}