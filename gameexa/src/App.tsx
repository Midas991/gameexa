import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

import Header from './components/Header';
import Footer from './components/Footer';

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
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apexzone" element={<ApexZone />} />
        <Route path="/cs2zone" element={<CS2Zone />} />
        <Route path="/fortzone" element={<FortZone />} />
        <Route path="/gta5zone" element={<GTA5Zone />} />
        <Route path="/overzone" element={<OverZone />} />
        <Route path="/pubgzone" element={<PUBGZone />} />
        <Route path="/rlzone" element={<RLZone />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;