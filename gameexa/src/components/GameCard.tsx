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
    <div className={`game-card ${disabled ? 'disabled shimmer' : ''}`}>
  <img src={image} alt={title} />
  <div className="overlay">
    <h3>{title}</h3>
    {disabled && <span className="soon">Coming Soon</span>}
  </div>
</div>
  );

  return disabled ? content : <Link to={path}>{content}</Link>;
}