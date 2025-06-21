import './Home.css';
import GameCard from '../components/GameCard';
import { gameZones } from '../data/gameZones';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.refresh(); // 🔄 Обновляет анимации при повторных монтированиях
  }, []);

  return (
    <div className="home">

      {/* 🎬 Hero Section */}
      <section className="hero">
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

      {/* 📣 Discord Invite */}
      <section className="discord-section" data-aos="fade-up">
        <h2>{t('discord.title')}</h2>
        <p>{t('discord.description')}</p>
        <a
          href="https://discord.com/invite/your-placeholder"
          target="_blank"
          rel="noreferrer"
          className="discord-button"
        >
          {t('discord.button')}
        </a>
      </section>
    </div>
  );
}