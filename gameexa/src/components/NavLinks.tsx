import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  console.log('NavLinks rendering, current location:', location.pathname);

  const zones = [
    { path: '/apex', label: 'Apex Legends' },
    { path: '/cs2', label: 'CS2' },
    { path: '/fortnite', label: 'Fortnite' },
    { path: '/gta5', label: 'GTA V' },
    { path: '/overwatch', label: 'Overwatch' },
    { path: '/pubg', label: 'PUBG' },
    { path: '/rocketleague', label: 'Rocket League' },
  ];

  const handleClick = (path: string) => {
    console.log('NavLink clicked:', path);
    if (onClick) {
      onClick();
    }
    if (path === '/apex') {
      console.log('Direct navigation to Apex Legends');
      navigate(path);
    }
  };

  return (
    <>
      <Link
        to="/"
        onClick={() => handleClick('/')}
        className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
      >
        Home
      </Link>
      {zones.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          onClick={() => handleClick(path)}
          className={`nav-link${location.pathname === path ? ' active' : ''}`}
        >
          {label}
        </Link>
      ))}
    </>
  );
}