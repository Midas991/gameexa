import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import './DevelopmentPlans.css';

export default function DevelopmentPlans() {
  const { t } = useTranslation();
  const [isTableOfContentsVisible, setIsTableOfContentsVisible] = useState(true);

  useEffect(() => {
    // Плавная прокрутка к якорям
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="development-plans-page">
      <Header />
      
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
      
      {/* Кнопка "Наверх" */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
      </button>

      <div className="content-wrapper">
        {/* Заголовок страницы */}
        <header className="page-header">
          <h1 className="page-title">{t('development.page.title')}</h1>
          <p className="page-subtitle">{t('development.page.subtitle')}</p>
        </header>

        {/* Содержание */}
        <nav className="table-of-contents">
          <div className="toc-header">
            <h2>{t('development.page.toc.title')}</h2>
            <button 
              className="toc-toggle"
              onClick={() => setIsTableOfContentsVisible(!isTableOfContentsVisible)}
            >
              {isTableOfContentsVisible ? t('development.page.toc.hide') : t('development.page.toc.show')}
            </button>
          </div>
          
          {isTableOfContentsVisible && (
            <ul className="toc-list">
              <li><a href="#introduction">{t('development.page.sections.introduction')}</a></li>
              <li><a href="#completed">{t('development.page.sections.completed')}</a></li>
              <li><a href="#in-progress">{t('development.page.sections.inProgress')}</a></li>
              <li><a href="#future">{t('development.page.sections.future')}</a></li>
              <li><a href="#contribute">{t('development.page.sections.contribute')}</a></li>
              <li><a href="#faq">{t('development.page.sections.faq')}</a></li>
            </ul>
          )}
        </nav>

        {/* Основной контент */}
        <main className="main-content">
          {/* Вступление */}
          <section id="introduction" className="content-section">
            <h2>{t('development.page.sections.introduction')}</h2>
            <div className="section-content">
              <p>{t('development.page.introduction.text1')}</p>
              <p>{t('development.page.introduction.text2')}</p>
              <div className="highlight-box">
                <p>{t('development.page.introduction.highlight')}</p>
              </div>
            </div>
          </section>

          {/* Что уже сделано */}
          <section id="completed" className="content-section">
            <h2>{t('development.page.sections.completed')}</h2>
            
            <div className="section-content">
              <h3>{t('development.page.completed.features')}</h3>
              <ul className="feature-list">
                <li>
                  <span className="date">[15.12.2024]</span>
                  <span className="feature">{t('development.page.completed.feature1')}</span>
                </li>
                <li>
                  <span className="date">[10.12.2024]</span>
                  <span className="feature">{t('development.page.completed.feature2')}</span>
                </li>
                <li>
                  <span className="date">[05.12.2024]</span>
                  <span className="feature">{t('development.page.completed.feature3')}</span>
                </li>
              </ul>

              <h3>{t('development.page.completed.fixes')}</h3>
              <ul className="fix-list">
                <li>{t('development.page.completed.fix1')}</li>
                <li>{t('development.page.completed.fix2')}</li>
                <li>{t('development.page.completed.fix3')}</li>
              </ul>

              <h3>{t('development.page.completed.projects')}</h3>
              <div className="project-grid">
                <div className="project-card">
                  <h4>{t('development.page.completed.project1.title')}</h4>
                  <p>{t('development.page.completed.project1.desc')}</p>
                </div>
                <div className="project-card">
                  <h4>{t('development.page.completed.project2.title')}</h4>
                  <p>{t('development.page.completed.project2.desc')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Что в работе */}
          <section id="in-progress" className="content-section">
            <h2>{t('development.page.sections.inProgress')}</h2>
            
            <div className="section-content">
              <h3>{t('development.page.inProgress.tasks')}</h3>
              <div className="task-grid">
                <div className="task-card in-development">
                  <h4>{t('development.page.inProgress.task1.title')}</h4>
                  <p>{t('development.page.inProgress.task1.desc')}</p>
                  <span className="status">{t('development.page.inProgress.status.inDevelopment')}</span>
                </div>
                <div className="task-card testing">
                  <h4>{t('development.page.inProgress.task2.title')}</h4>
                  <p>{t('development.page.inProgress.task2.desc')}</p>
                  <span className="status">{t('development.page.inProgress.status.testing')}</span>
                </div>
                <div className="task-card started">
                  <h4>{t('development.page.inProgress.task3.title')}</h4>
                  <p>{t('development.page.inProgress.task3.desc')}</p>
                  <span className="status">{t('development.page.inProgress.status.started')}</span>
                </div>
              </div>

              <h3>{t('development.page.inProgress.priorities')}</h3>
              <p>{t('development.page.inProgress.prioritiesText')}</p>
            </div>
          </section>

          {/* Планы на будущее */}
          <section id="future" className="content-section">
            <h2>{t('development.page.sections.future')}</h2>
            
            <div className="section-content">
              <h3>{t('development.page.future.newFeatures')}</h3>
              <ul className="future-list">
                <li>{t('development.page.future.feature1')}</li>
                <li>{t('development.page.future.feature2')}</li>
                <li>{t('development.page.future.feature3')}</li>
              </ul>

              <h3>{t('development.page.future.improvements')}</h3>
              <ul className="future-list">
                <li>{t('development.page.future.improvement1')}</li>
                <li>{t('development.page.future.improvement2')}</li>
                <li>{t('development.page.future.improvement3')}</li>
              </ul>

              <h3>{t('development.page.future.newGames')}</h3>
              <ul className="future-list">
                <li>{t('development.page.future.game1')}</li>
                <li>{t('development.page.future.game2')}</li>
                <li>{t('development.page.future.game3')}</li>
              </ul>

              <h3>{t('development.page.future.optimization')}</h3>
              <ul className="future-list">
                <li>{t('development.page.future.optimization1')}</li>
                <li>{t('development.page.future.optimization2')}</li>
              </ul>
            </div>
          </section>

          {/* Как повлиять */}
          <section id="contribute" className="content-section">
            <h2>{t('development.page.sections.contribute')}</h2>
            
            <div className="section-content">
              <h3>{t('development.page.contribute.feedback')}</h3>
              <p>{t('development.page.contribute.feedbackText')}</p>
              <div className="action-buttons">
                <button className="action-btn primary">{t('development.page.contribute.feedbackBtn')}</button>
                <button className="action-btn secondary">{t('development.page.contribute.discordBtn')}</button>
              </div>

              <h3>{t('development.page.contribute.bugReport')}</h3>
              <p>{t('development.page.contribute.bugReportText')}</p>
              <button className="action-btn warning">{t('development.page.contribute.bugReportBtn')}</button>

              <h3>{t('development.page.contribute.support')}</h3>
              <p>{t('development.page.contribute.supportText')}</p>
              <button className="action-btn success">{t('development.page.contribute.supportBtn')}</button>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="content-section">
            <h2>{t('development.page.sections.faq')}</h2>
            
            <div className="section-content">
              <div className="faq-item">
                <h3>{t('development.page.faq.q1')}</h3>
                <p>{t('development.page.faq.a1')}</p>
              </div>
              
              <div className="faq-item">
                <h3>{t('development.page.faq.q2')}</h3>
                <p>{t('development.page.faq.a2')}</p>
              </div>
              
              <div className="faq-item">
                <h3>{t('development.page.faq.q3')}</h3>
                <p>{t('development.page.faq.a3')}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 