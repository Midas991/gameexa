import { useEffect, useRef, useState } from 'react';
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
  const threshold = 60; // было 20, теперь в 3 раза больше
  return (
    (document.body && document.body.scrollTop > threshold) ||
    (window.scrollY && window.scrollY > threshold) ||
    (document.documentElement && document.documentElement.scrollTop > threshold) ||
    (main && main.scrollTop > threshold)
  );
}

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const justClickedRef = useRef(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    onResize();
    window.addEventListener('resize', onResize);
    const interval = setInterval(() => {
      if (justClickedRef.current) return;
      setVisible(!!isScrolledDown());
    }, 100);
    return () => {
      window.removeEventListener('resize', onResize);
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    setVisible(false); // скрыть сразу
    justClickedRef.current = true;
    setTimeout(() => {
      justClickedRef.current = false;
    }, 800); // блокируем появление на 800мс
    setTimeout(() => {
      scrollToTopUniversal();
    }, 10); // чуть позже, чтобы скрытие сработало мгновенно
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