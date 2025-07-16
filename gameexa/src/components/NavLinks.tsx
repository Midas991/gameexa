import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const location = useLocation();

  const zones = [
    { path: '/apex', label: 'Apex Legends' },
    { path: '/cs2', label: 'CS2' },
    { path: '/fortnite', label: 'Fortnite' },
    { path: '/gta5', label: 'GTA V' },
    { path: '/overwatch', label: 'Overwatch' },
    { path: '/pubg', label: 'PUBG' },
    { path: '/rocketleague', label: 'Rocket League' },
  ];

  return (
    <>
      {zones.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          onClick={onClick}
          className={`nav-link${location.pathname === path ? ' active' : ''}`}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
