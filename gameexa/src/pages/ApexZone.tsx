import { useState } from 'react';
import './ApexZone.css';
import { useTranslation } from 'react-i18next';
import BackToTopButton from '../components/BackToTopButton';
import { Link } from 'react-router-dom';

const TABS = ['overview', 'guides', 'customization', 'community'];

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function HeroSection() {
  return (
    <section className="apex-hero-new">
      <div className="apex-hero-bg-img" />
      <div className="apex-hero-overlay" />
      <div className="apex-hero-content-new">
        {/* TODO: Add game logo here */}
        <h1 className="apex-hero-title">Apex Legends</h1>
        <p className="apex-hero-slogan">Become a legend. Squad up, fight for survival, and outplay your rivals in the Apex Games.</p>
        <div className="apex-hero-socials">
          {/* TODO: Add social icons/links here */}
        </div>
      </div>
    </section>
  );
}

function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <nav className="apex-tabs-new">
      {TABS.map(tab => (
        <button
          key={tab}
          className={`apex-tab-btn-new${activeTab === tab ? ' active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
}

function OverviewTab() {
  const { t } = useTranslation();

  return (
    <div className="apex-tab-content-new fade-in">
      <section id="overview-intro">
        <h1 className="apex-title">{t('apex.overview.title')}</h1>
        <img src="/assets/apex-legends-old.jpg" alt="Apex Legends Classic Squad" style={{width: '100%', borderRadius: '18px', margin: '24px 0'}} />
        <p>{t('apex.overview.intro')}</p>
      </section>
      {/* Table of Contents */}
      <nav className="apex-toc apex-toc-grid">
        <ul>
          <li><button type="button" onClick={() => document.getElementById('overview-why')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Why Apex is a Free-to-Play</button></li>
          <li><button type="button" onClick={() => document.getElementById('overview-movement')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Mastering the Movement:</button></li>
          <li><button type="button" onClick={() => document.getElementById('overview-legends')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Characters</button></li>
          <li><button type="button" onClick={() => document.getElementById('overview-innovations')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Innovations</button></li>
          <li><button type="button" onClick={() => document.getElementById('overview-arena')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Maps, Modes & Seasons</button></li>
          <li><button type="button" onClick={() => document.getElementById('overview-competitive')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Competitive Play & Esports</button></li>
          <li><button type="button" onClick={() => document.getElementById('overview-why-return')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Why We coming back</button></li>
          <li><button type="button" onClick={() => document.getElementById('overview-headache')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Unbalanced Meta & Cheaters</button></li>
        </ul>
      </nav>
      <section id="overview-why">
        <h2 className="apex-section-title">{t('apex.overview.why_title')}</h2>
        <ul>
          <li>{t('apex.overview.why_free')}</li>
          <li>{t('apex.overview.why_engagement')}</li>
          <li>{t('apex.overview.why_esports')}</li>
        </ul>
      </section>
      <section id="overview-movement">
        <h2 className="apex-section-title">{t('apex.overview.movement_title')}</h2>
        <img src="/assets/octane-apex-legends.jpg" alt="Octane Apex Legends" style={{width: '100%', borderRadius: '18px', margin: '24px 0'}} />
        <p>{t('apex.overview.movement_intro')}</p>
        <ul>
          <li>{t('apex.overview.movement_wallbounce')}</li>
          <li>{t('apex.overview.movement_tapstrafe')}</li>
          <li>{t('apex.overview.movement_superglide')}</li>
        </ul>
        <p>{t('apex.overview.movement_summary')}</p>
      </section>
      <section id="overview-legends">
        <h2 className="apex-section-title">{t('apex.overview.legends_title')}</h2>
        <img src="/assets/apex-legends-characters.jpg" alt="Apex Legends Characters" style={{width: '100%', borderRadius: '18px', margin: '24px 0'}} />
        <p>{t('apex.overview.legends_intro')}</p>
        <ul>
          <li>{t('apex.overview.legends_passive')}</li>
          <li>{t('apex.overview.legends_tactical')}</li>
          <li>{t('apex.overview.legends_ultimate')}</li>
        </ul>
        <p>{t('apex.overview.legends_classes')}</p>
      </section>
      <section id="overview-innovations">
        <h2 className="apex-section-title">{t('apex.overview.innovations_title')}</h2>
        <ul>
          <li>{t('apex.overview.innovations_ping')}</li>
          <li>{t('apex.overview.innovations_respawn')}</li>
          <li>{t('apex.overview.innovations_team')}</li>
        </ul>
      </section>
      <section id="overview-arena">
        <h2 className="apex-section-title">{t('apex.overview.arena_title')}</h2>
        <img src="/assets/apex-legends-mode.jpg" alt="Apex Legends game modes" style={{width: '100%', borderRadius: '18px', margin: '24px 0'}} />
        <p>{t('apex.overview.arena_intro')}</p>
        <ul>
          <li>{t('apex.overview.arena_br')}</li>
          <li>{t('apex.overview.arena_ranked')}</li>
          <li>{t('apex.overview.arena_arenas')}</li>
          <li>{t('apex.overview.arena_mixtape')}</li>
          <li>{t('apex.overview.arena_training')}</li>
        </ul>
      </section>
      <section id="overview-competitive">
        <h2 className="apex-section-title">{t('apex.overview.competitive_title')}</h2>
        <img src="/assets/algs1.jpg" alt="Apex Legends Global Series" style={{width: '100%', borderRadius: '18px', margin: '24px 0'}} />
        <p>{t('apex.overview.competitive_intro')}</p>
      </section>
      <section id="overview-why-return">
        <h2 className="apex-section-title">{t('apex.overview.why_return_title')}</h2>
        <p>{t('apex.overview.why_return_intro')}</p>
      </section>
      <section id="overview-headache" className="apex-headache-section">
        <h2 className="apex-section-title">{t('apex.overview.headache_title')}</h2>
        <img src="/assets/ash-apex-legends.jpg" alt="Apex Legends - Ash" style={{width: '100%', borderRadius: '18px', margin: '24px 0'}} />
        {t('apex.overview.headache_intro').split('\n').map((p, i) => <p key={i}>{p}</p>)}
      </section>
    </div>
  );
}

function GuidesTab() {
  return (
    <div className="apex-tab-content-new fade-in">
      <section>
        <h2>Guides & Tips</h2>
        <div className="apex-guides-search">
          {/* TODO: Add search and filter UI here */}
        </div>
        <div className="apex-guides-grid">
          {/* Example guide cards */}
          <div className="apex-guide-card">
            <div className="apex-guide-title-wrap">
              <h4>Beginner’s Guide</h4>
            </div>
            <p>Learn the basics of movement, shooting, and teamwork in Apex Legends.</p>
            <Link to="/guides/beginners" className="guide-btn">Read Guide</Link>
          </div>
          <div className="apex-guide-card">
            <div className="apex-guide-title-wrap">
              <h4>Legend Abilities Explained</h4>
            </div>
            <p>Deep dive into each Legend’s unique skills and how to use them effectively.</p>
            <button className="guide-btn">Read Guide</button>
          </div>
          <div className="apex-guide-card">
            <div className="apex-guide-title-wrap">
              <h4>Weapon Tier List</h4>
            </div>
            <p>Find out which weapons dominate the current meta and why.</p>
            <button className="guide-btn">Read Guide</button>
          </div>
        </div>
      </section>
      {/* Popular Guides section removed */}
      <section>
        <h3>Submit Your Guide</h3>
        <p>Want to share your knowledge? <a href="#">Submit your own guide here.</a></p>
      </section>
    </div>
  );
}

function CustomizationTab() {
  return (
    <div className="apex-tab-content-new fade-in">
      <section>
        <h2>Skins & Cosmetics</h2>
        {/* TODO: Add skins gallery here */}
      </section>
      <section>
        <h3>Builds & Loadouts</h3>
        <ul>
          <li><b>Top Mirage Loadouts:</b> R-301 + Volt SMG, Digital Threat Scope, Purple Armor</li>
          <li><b>Best Attachments for R-99:</b> Extended Mag, Barrel Stabilizer, Digital Threat</li>
        </ul>
      </section>
      <section>
        <h3>Settings & Optimization</h3>
        <ul>
          <li>Recommended mouse sensitivity: 1.8–2.5</li>
          <li>Keybinds: Customize for comfort and speed</li>
          <li>Pro tips: Lower graphics for higher FPS, use wired connection</li>
        </ul>
      </section>
    </div>
  );
}

function CommunityTab() {
  return (
    <div className="apex-tab-content-new fade-in">
      <section>
        <h2>Join our Discord Server!</h2>
        <p>Find teammates, chat, and share your best moments with the Apex community.</p>
        <a href="#" className="apex-discord-btn-new">Join Discord</a>
        {/* TODO: Add Discord widget or server info here */}
      </section>
      <section>
        <h3>Find Teammates</h3>
        <p>Looking for a squad? Join our Discord channel for party finding.</p>
      </section>
      <section>
        <h3>Fan Art & Creativity</h3>
        {/* TODO: Add fan art gallery here */}
        <p>Share your art, memes, and cosplay with the community!</p>
      </section>
      <section>
        <h3>Streamers & Content Creators</h3>
        <div className="apex-streamers-list">
          <div>
            <b>English:</b> <a href="#">ShivFPS</a>, <a href="#">iiTzTimmy</a>
          </div>
          <div>
            <b>Ukrainian:</b> <a href="#">UAPlayer</a>
          </div>
          <div>
            <b>German:</b> <a href="#">GermanApex</a>
          </div>
        </div>
        <p>Suggest your favorite streamer! <a href="#">Submit here</a></p>
      </section>
      <section>
        <h3>Tournaments & Events</h3>
        <ul>
          <li><a href="#">ALGS Official Tournaments</a></li>
          <li><a href="#">Community Events</a></li>
        </ul>
      </section>
    </div>
  );
}

export default function ApexZone() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div className="apexzone-root-new">
      <HeroSection />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'guides' && <GuidesTab />}
        {activeTab === 'customization' && <CustomizationTab />}
        {activeTab === 'community' && <CommunityTab />}
      </main>
      <BackToTopButton />
    </div>
  );
}