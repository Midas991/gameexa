import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';
// import logo from '../public/assets/logo.svg';

export default function Header() {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!isMobileOpen);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <div className="logo-circle"></div>
          <span className="logo-text">Gameexa</span>
          <span className="beta-badge">beta</span>
        </Link>

        <nav className="nav desktop-only">
          <NavLinks />
        </nav>

        <div className="desktop-only">
          <LanguageSwitcher />
        </div>

        <button
          className={`burger mobile-only ${isMobileOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileMenu isOpen={isMobileOpen} onClose={closeMenu} />
    </header>
  );
}