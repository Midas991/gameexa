import { useParams, useNavigate } from 'react-router-dom';
import guidesData, { type Guide } from '../data/guidesData';
import './GuidePage.css';

export default function GuidePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = guidesData.find((g: Guide) => g.id === id);

  if (!guide) return <div style={{color: '#fff', padding: '2rem'}}>Guide not found.</div>;

  return (
    <div className="guidepage-root">
      <div className="guidepage-card">
        <button className="guidepage-back" onClick={() => navigate(-1)}>
          ← Back to Guides
        </button>
        <h1 className="guidepage-title">{guide.title}</h1>
        {guide.subtitle && <h2 className="guidepage-subtitle">{guide.subtitle}</h2>}
        <div className="guidepage-meta">
          <span>By {guide.author}</span>
          <span>•</span>
          <span>{guide.date}</span>
        </div>
        <div className="guidepage-content">
          {typeof guide.content === 'string' ? <p>{guide.content}</p> : guide.content}
        </div>
      </div>
    </div>
  );
} 