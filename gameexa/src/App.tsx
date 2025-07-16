import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;