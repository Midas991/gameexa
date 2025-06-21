import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gameexa. All rights reserved.</p>
      <p>Made with ❤️ for the gaming community.</p>
    </footer>
  );
}