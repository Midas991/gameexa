import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n'; // 🔥 Подключение конфигурации i18next
import 'aos/dist/aos.css'; // ✅ Подключаем стили AOS

import App from './App.tsx';

// Проверяем, что i18n загрузился
console.log('Main.tsx: i18n loaded');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);