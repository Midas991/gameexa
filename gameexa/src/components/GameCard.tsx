import { Link } from 'react-router-dom';
import './GameCard.css';

type Props = {
  title: string;
  image: string;
  path?: string;
  disabled?: boolean;
};

export default function GameCard({ title, image, path = '#', disabled = false }: Props) {
  const content = (
    <div className={`game-card ${disabled ? 'disabled' : ''}`}>
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="image-overlay" />
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {disabled && (
            <div className="coming-soon-badge">
              <span>Coming Soon</span>
            </div>
          )}
        </div>
        
        {!disabled && (
          <div className="view-details-text">
            <span>View Details</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        )}
      </div>
      
      {disabled && <div className="shimmer-effect" />}
    </div>
  );

  return disabled ? content : <Link to={path} className="card-link">{content}</Link>;
}