import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import './Layout.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Bar - hidden on mobile */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="info-item"><Mail size={14} /> info@rohitkcjain.com</span>
            <span className="info-item"><Phone size={14} /> +91 98765 43210</span>
          </div>
          <div className="top-bar-right">
            <span className="info-item"><MapPin size={14} /> New Delhi, India</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar container">
        <Link to="/" className="logo">
          <img src={logo} alt="RKJ Logo" className="logo-img" />
          <div className="logo-text-wrapper">
            <span className="logo-text" style={{ color: '#1473B9' }}>
              Rohit KC Jain <span className="logo-amp">& Co.</span>
            </span>
            <span className="logo-sub" style={{ color: '#8AC141' }}>
              Chartered Accountants
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Our Team</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Insights</NavLink>
          <Link to="/contact" className="btn btn-primary ml-4">Get Consultation</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu fade-in">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="mobile-link">Home</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="mobile-link">About Us</NavLink>
          <NavLink to="/team" onClick={() => setIsMenuOpen(false)} className="mobile-link">Our Team</NavLink>
          <NavLink to="/services" onClick={() => setIsMenuOpen(false)} className="mobile-link">Services</NavLink>
          <NavLink to="/insights" onClick={() => setIsMenuOpen(false)} className="mobile-link">Insights</NavLink>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary mt-4">Get Consultation</Link>
        </div>
      )}
    </header>
  );
};

export default Header;