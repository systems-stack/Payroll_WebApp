import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Insights from './pages/Insights';
import Team from './pages/Team';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="insights" element={<Insights />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter basename="/rkcj-website">
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;