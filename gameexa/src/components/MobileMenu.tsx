import './Header.css';
import NavLinks from './NavLinks';

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <div className="mobile-links">
        <NavLinks onClick={onClose} />
      </div>
    </div>
  );
}