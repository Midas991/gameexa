import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import './Header.css';

export default function Header() {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!isMobileOpen);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="header">
      <Link to="/" className="logo">Gameexa</Link>

      <nav className="nav desktop-only">
        <NavLinks />
      </nav>

      <div className="lang-switcher desktop-only">
        <button>EN</button>
        <button>UA</button>
        <button>DE</button>
      </div>

      <button className="burger mobile-only" onClick={toggleMobileMenu}>
        ☰
      </button>

      <MobileMenu isOpen={isMobileOpen} onClose={closeMenu} />
    </header>
  );
}
