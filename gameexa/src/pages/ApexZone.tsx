// src/pages/ApexZone.tsx
import './ApexZone.css';
import { useEffect } from 'react';

export default function ApexZone() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="apexzone-root">
      {/* Hero Section */}
      <section className="apex-hero">
        <div className="apex-hero-bg" />
        <div className="apex-hero-content">
          <img src="/assets/apex.jpg" alt="Apex Legends Logo" className="apex-logo" />
          <h1>Apex Legends</h1>
          <p className="apex-hero-desc">
            Королевская битва нового поколения: герои, командная игра, динамичный геймплей и уникальные способности. Присоединяйся к легендам!
          </p>
          <a href="https://www.ea.com/games/apex-legends" target="_blank" rel="noopener noreferrer" className="apex-cta-btn">
            Официальный сайт
          </a>
        </div>
      </section>

      {/* Guides Section */}
      <section className="apex-section">
        <h2>Гайды и советы</h2>
        <ul className="apex-guides-list">
          <li><a href="https://apexlegends.fandom.com/wiki/Beginner%27s_Guide" target="_blank" rel="noopener noreferrer">Гайд для новичков</a></li>
          <li><a href="https://apexlegends.fandom.com/wiki/Legends" target="_blank" rel="noopener noreferrer">Обзор всех героев</a></li>
          <li><a href="https://apexlegends.fandom.com/wiki/Weapons" target="_blank" rel="noopener noreferrer">Оружие и снаряжение</a></li>
          <li><a href="https://www.youtube.com/watch?v=innmNewjkuk" target="_blank" rel="noopener noreferrer">Видео: Советы для победы</a></li>
        </ul>
      </section>

      {/* Trailer Section */}
      <section className="apex-section">
        <h2>Трейлер Apex Legends</h2>
        <div className="apex-trailer-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/innmNewjkuk"
            title="Apex Legends Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Community Section */}
      <section className="apex-section apex-community">
        <h2>Сообщество</h2>
        <p>Общайся с другими игроками, делись опытом и находи команду в нашем Discord!</p>
        <a href="https://discord.gg/apexlegends" target="_blank" rel="noopener noreferrer" className="apex-discord-btn">
          Присоединиться к Discord
        </a>
      </section>
    </div>
  );
}