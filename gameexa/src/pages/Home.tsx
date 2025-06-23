import './Home.css';
import GameCard from '../components/GameCard';
import { gameZones } from '../data/gameZones';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import AOS from 'aos';
import DiscordBanner from '../components/DiscordBanner';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="home">
      {/* 🎬 Hero Section */}
      <section className="hero">
        <video
          className="hero-bg-video"
          src="/assets/planet.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-content" data-aos="fade-up">
          <h1>Gameexa</h1>
          <p>{t('hero.description')}</p>
          <a href="#zones" className="scroll-button">
            {t('hero.explore')}
          </a>
        </div>
      </section>

      {/* 🎮 Game Cards */}
      <section className="zones" id="zones">
        {gameZones.map((zone, index) => (
          <div key={index} data-aos="zoom-in-up" data-aos-delay={index * 100}>
            <GameCard {...zone} />
          </div>
        ))}
      </section>

      {/* 🚀 Discord Banner */}
      <DiscordBanner />
    </div>
  );
}