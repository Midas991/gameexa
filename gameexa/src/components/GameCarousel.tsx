import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gameZones } from '../data/gameZones';
import './GameCarousel.css';

export default function GameCarousel() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const moveNext = () => {
      const cards = carousel.children;
      if (!cards || cards.length === 0) return;
      const cardWidth = cards[0].clientWidth + 32; // 32px gap
      carousel.style.transition = 'transform 0.6s cubic-bezier(.4,.2,.6,1)';
      carousel.style.transform = `translateX(-${cardWidth}px)`;

      setTimeout(() => {
        carousel.appendChild(carousel.firstElementChild!);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
      }, 600);
    };

    const startCarousel = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(moveNext, 3500);
    };

    const stopCarousel = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startCarousel();

    return () => {
      stopCarousel();
    };
  }, []);

  return (
    <div className="games-section" id="games">
      <div className="carousel-viewport">
        <div className="games-carousel" ref={carouselRef}>
          {gameZones.map((game, idx) => (
            <div className="game-card" key={game.title + '-' + idx}>
              {game.path ? (
                <Link to={game.path || '#'} className="card-link">
                  <img src={game.image} alt={t(`games.${game.title}.title`)} />
                  <div className="game-info">
                    <h3>{t(`games.${game.title}.title`)}</h3>
                    <p>{t(`games.${game.title}.desc`)}</p>
                  </div>
                </Link>
              ) : (
                <>
                  <img src={game.image} alt={t(`games.${game.title}.title`)} />
                  <div className="game-info">
                    <h3>{t(`games.${game.title}.title`)}</h3>
                    <div className="coming-soon-badge">Coming Soon</div>
                  </div>
                  <div className="shimmer-effect" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
