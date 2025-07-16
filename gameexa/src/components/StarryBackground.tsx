import { useEffect } from 'react';
import './StarryBackground.css';

export default function StarryBackground() {
  useEffect(() => {
    // Создаем звезды
    const createStars = () => {
      const starsContainer = document.querySelector('.starry-background');
      if (!starsContainer) return;
      
      // Очистим контейнер
      starsContainer.innerHTML = '';
      
      // Создаем звезды
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const starCount = Math.floor((screenWidth * screenHeight) / 10000); // Адаптивное количество звезд
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Случайное положение
        const x = Math.random() * screenWidth;
        const y = Math.random() * screenHeight;
        
        // Случайный размер
        const size = 0.5 + Math.random() * 2;
        
        // Случайная задержка анимации
        const delay = Math.random() * 5;
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
      }
    };
    
    // Создаем звезды при загрузке
    createStars();
    
    // Пересоздаем при изменении размера окна
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);
  
  return <div className="starry-background" style={{ zIndex: -3 }}></div>;
}
