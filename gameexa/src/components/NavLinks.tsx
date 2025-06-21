import { Link } from 'react-router-dom';
import './Header.css';

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const zones = [
    { path: '/apexzone', label: 'Apex Legends' },
    { path: '/cs2zone', label: 'CS2' },
    { path: '/fortzone', label: 'Fortnite' },
    { path: '/gta5zone', label: 'GTA V' },
    { path: '/overzone', label: 'Overwatch' },
    { path: '/pubgzone', label: 'PUBG' },
    { path: '/rlzone', label: 'Rocket League' },
  ];

  return (
    <>
      {zones.map(({ path, label }) => (
        <Link key={path} to={path} onClick={onClick} className="nav-link">
          {label}
        </Link>
      ))}
    </>
  );
}