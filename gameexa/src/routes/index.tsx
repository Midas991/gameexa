import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ApexZone from '../pages/ApexZone';
import CS2Zone from '../pages/CS2Zone';
import FortZone from '../pages/FortZone';
import GTA5Zone from '../pages/GTA5Zone';
import OverZone from '../pages/OverZone';
import PUBGZone from '../pages/PUBGZone';
import RLZone from '../pages/RLZone';
import DevelopmentPlans from '../pages/DevelopmentPlans';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apex" element={<ApexZone />} />
      <Route path="/cs2" element={<CS2Zone />} />
      <Route path="/fortnite" element={<FortZone />} />
      <Route path="/gta5" element={<GTA5Zone />} />
      <Route path="/overwatch" element={<OverZone />} />
      <Route path="/pubg" element={<PUBGZone />} />
      <Route path="/rocketleague" element={<RLZone />} />
      <Route path="/development" element={<DevelopmentPlans />} />
    </Routes>
  );
}
