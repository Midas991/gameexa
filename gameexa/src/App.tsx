import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';

import Home from './pages/Home';
import ApexZone from './pages/ApexZone';
import CS2Zone from './pages/CS2Zone';
import FortZone from './pages/FortZone';
import GTA5Zone from './pages/GTA5Zone';
import OverZone from './pages/OverZone';
import PUBGZone from './pages/PUBGZone';
import RLZone from './pages/RLZone';

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
      <StarryBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apex" element={<ApexZone />} />
        <Route path="/cs2" element={<CS2Zone />} />
        <Route path="/fortnite" element={<FortZone />} />
        <Route path="/gta5" element={<GTA5Zone />} />
        <Route path="/overwatch" element={<OverZone />} />
        <Route path="/pubg" element={<PUBGZone />} />
        <Route path="/rocketleague" element={<RLZone />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;