import { useEffect, useState } from 'react';
import '../pages/ApexZone.css';

function scrollToTopUniversal() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const main = document.querySelector('main');
  if (main) main.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function isScrolledDown() {
  if (typeof window === 'undefined') return false;
  const main = document.querySelector('main');
  return (
    (document.body && document.body.scrollTop > 20) ||
    (window.scrollY && window.scrollY > 20) ||
    (document.documentElement && document.documentElement.scrollTop > 20) ||
    (main && main.scrollTop > 20)
  );
}

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    onResize();
    window.addEventListener('resize', onResize);
    const interval = setInterval(() => {
      setVisible(!!isScrolledDown());
    }, 100);
    return () => {
      window.removeEventListener('resize', onResize);
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    setVisible(false);
    scrollToTopUniversal();
  };

  return (
    <button
      className={`apex-back-to-top${visible ? ' show' : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      ↑{!isMobile && ' Back to Top'}
    </button>
  );
} 