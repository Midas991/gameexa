// Удаляем неиспользуемый импорт
// import { HashRouter, Routes, Route } from 'react-router-dom';

// Инициализация с проверками
function initCarousel() {
  const carousel = document.getElementById('carousel');
  if (!carousel) {
    console.error('Carousel element not found!');
    return;
  }

  const cards = carousel.children;
  if (!cards || cards.length === 0) {
    console.error('No cards found in carousel!');
    return;
  }

  const cardWidth = cards[0].offsetWidth + 32; // ширина + gap
  let current = 0;
  let intervalId = null;

  function moveNext() {
    if (!carousel || !cards || cards.length === 0) return;
    
    carousel.style.transition = 'transform 0.6s cubic-bezier(.4,.2,.6,1)';
    carousel.style.transform = `translateX(-${cardWidth}px)`;
    
    setTimeout(() => {
      carousel.appendChild(carousel.firstElementChild);
      carousel.style.transition = 'none';
      carousel.style.transform = 'translateX(0)';
      highlightActiveCard();
    }, 600);
  }

  function highlightActiveCard() {
    if (!carousel) return;
    
    const viewport = carousel.parentElement;
    if (!viewport) return;
    
    const viewportRect = viewport.getBoundingClientRect();
    let minDiff = Infinity;
    let activeCard = null;

    Array.from(carousel.children).forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const viewportCenter = viewportRect.left + viewportRect.width / 2;
      const diff = Math.abs(cardCenter - viewportCenter);
      card.classList.remove('active');

      // Эффект исчезновения по краям
      const fadeZone = viewportRect.width * 0.12;
      let opacity = 1;
      
      if (cardCenter < viewportRect.left + fadeZone) {
        opacity = (cardCenter - viewportRect.left) / fadeZone;
      } else if (cardCenter > viewportRect.right - fadeZone) {
        opacity = (viewportRect.right - cardCenter) / fadeZone;
      }
      
      card.style.opacity = Math.max(0, Math.min(1, opacity));
      
      if (diff < minDiff) {
        minDiff = diff;
        activeCard = card;
      }
    });

    if (activeCard) activeCard.classList.add('active');
  }

  // Запуск карусели
  function startCarousel() {
    if (intervalId) return; // Предотвращаем множественные интервалы
    moveNext(); // Сразу запускаем первое движение
    intervalId = setInterval(moveNext, 3500);
  }

  // Остановка карусели
  function stopCarousel() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Обработка видимости страницы
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopCarousel();
    } else {
      startCarousel();
    }
  });

  // Запуск при загрузке
  startCarousel();
  highlightActiveCard();

  // Пауза при наведении мыши
  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);
}

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', initCarousel); 