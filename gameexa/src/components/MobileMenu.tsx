import NavLinks from './NavLinks';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <div className={`mobile-menu mobile-only ${isOpen ? 'open' : ''}`}>
      <nav className="mobile-links" onClick={onClose}>
        <NavLinks onClick={onClose} />
      </nav>
      <div style={{ marginTop: '1rem' }}>
        <LanguageSwitcher />
      </div>
    </div>
  );
}