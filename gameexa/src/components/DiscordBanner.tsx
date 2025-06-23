import React from "react";
import "./DiscordBanner.css";
import { useTranslation } from 'react-i18next';

const DiscordBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="discord-banner">
      <div className="discord-banner__icon">
        {/* SVG Discord Icon */}
        <svg viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#glow)">
            <path d="M60.104 4.552A58.6 58.6 0 0039.45.5a.14.14 0 00-.15.07c-2.1 3.7-4.45 8.55-6.1 12.4-7.2-1.1-14.2-1.1-21.25 0-1.7-3.85-4.05-8.7-6.1-12.4A.14.14 0 005.55.5 58.6 58.6 0 00.896 4.552a.13.13 0 00-.06.05C-3.1 11.1-4.7 17.5-4.3 23.85c0 .05.02.1.05.14C4.1 36.2 13.1 44.1 21.9 48.5c.05.03.11.03.16 0 1.7-1.2 3.3-2.5 4.8-3.9.12-.11.09-.31-.05-.39-1.3-.7-2.5-1.5-3.7-2.3-.1-.07-.1-.22 0-.29.25-.18.5-.36.74-.54.08-.06.19-.06.27 0 7.7 5.6 16.1 5.6 23.8 0 .08-.06.19-.06.27 0 .24.18.49.36.74.54.1.07.1.22 0 .29-1.2.8-2.4 1.6-3.7 2.3-.14.08-.17.28-.05.39 1.5 1.4 3.1 2.7 4.8 3.9.05.03.11.03.16 0 8.8-4.4 17.8-12.3 26.15-24.51.03-.04.05-.09.05-.14.4-6.35-1.2-12.75-5.01-19.25a.13.13 0 00-.06-.05z" fill="#fff"/>
          </g>
          <defs>
            <filter id="glow" x="-10" y="-10" width="91" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="discord-banner__content">
        <h2>{t('discord.title')}</h2>
        <p>{t('discord.description')}</p>
        <a href="https://discord.gg/your-link" target="_blank" rel="noopener noreferrer" className="discord-banner__button">
          {t('discord.button')}
        </a>
      </div>
      <svg className="discord-banner__wave" viewBox="0 0 500 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30 Q125 60 250 30 T500 30 V60 H0 V30 Z" fill="url(#waveGradient)"/>
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="500" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3a8dde"/>
            <stop offset="1" stopColor="#a259e6"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="discord-banner__stars">
        {/* Анимированные звёзды через CSS */}
        {[...Array(20)].map((_, i) => <span key={i} className="star" />)}
      </div>
    </div>
  );
};

export default DiscordBanner; 