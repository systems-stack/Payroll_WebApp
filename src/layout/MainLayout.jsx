import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const MainLayout = () => {
  return (
    // app-container is defined in App.css — it anchors the flex column
    // so Header stays top, Footer stays bottom, and <main> fills remaining height
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;