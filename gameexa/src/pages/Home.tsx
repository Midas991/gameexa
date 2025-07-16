import './Home.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import AOS from 'aos';
import DiscordBanner from '../components/DiscordBanner';
import GameCarousel from '../components/GameCarousel';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.refresh();
    
    // Настройка скорости видео
    const video = document.querySelector('.hero-bg-video') as HTMLVideoElement;
    if (video) {
      video.playbackRate = 1;
    }
  }, []);

  return (
    <div className="home">
      {/* Видео-фон */}
      <video
        className="hero-bg-video"
        src="/assets/planet.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Gameexa</h1>
          <p>{t('hero.description')}</p>
          <a href="#games" className="scroll-button" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#games')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            {t('hero.explore')}
          </a>
        </div>
      </section>

      {/* Game Carousel */}
      <GameCarousel />
      
      {/* Discord Banner */}
      <DiscordBanner />
    </div>
  );
}