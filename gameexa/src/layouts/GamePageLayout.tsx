import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './GamePageLayout.css';

type Props = {
  title: string;
};

export default function GamePageLayout({ title }: Props) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <p>{t('tabs.overviewText')}</p>;
      case 'guides':
        return <p>{t('tabs.guidesText')}</p>;
      case 'custom':
        return <p>{t('tabs.customText')}</p>;
      case 'community':
        return <p>{t('tabs.communityText')}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="game-layout">
      <h1>{title}</h1>

      <nav className="tabs">
        <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
          {t('tabs.overview')}
        </button>
        <button className={activeTab === 'guides' ? 'active' : ''} onClick={() => setActiveTab('guides')}>
          {t('tabs.guides')}
        </button>
        <button className={activeTab === 'custom' ? 'active' : ''} onClick={() => setActiveTab('custom')}>
          {t('tabs.custom')}
        </button>
        <button className={activeTab === 'community' ? 'active' : ''} onClick={() => setActiveTab('community')}>
          {t('tabs.community')}
        </button>
      </nav>

      <div key={activeTab} className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
}