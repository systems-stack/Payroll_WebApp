import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              Rohit KC Jain & Co.
            </Link>
            <p className="footer-text">
              Your Trusted Financial & Taxation Partner. Empowering businesses with accurate consultancy, compliance, and growth-focused strategies since establishment.
            </p>
            <div className="flex gap-4 mt-4 text-xs font-semibold">
              <a href="#" style={{color: 'var(--secondary)', marginRight: '1rem'}}>LINKEDIN</a>
              <a href="#" style={{color: 'var(--secondary)', marginRight: '1rem'}}>FACEBOOK</a>
              <a href="#" style={{color: 'var(--secondary)'}}>TWITTER</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/insights">Insights & Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">GST Consultancy</Link></li>
              <li><Link to="/services">Income Tax Filing</Link></li>
              <li><Link to="/services">Audit & Assurance</Link></li>
              <li><Link to="/services">Business Registration</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-contact-item">
              <MapPin className="footer-icon" size={18} />
              <span>Suite No. 11A-11B, Tolstoy marg, Connaught Place, New Delhi, 110001</span>
            </div>
            <div className="footer-contact-item">
              <Phone className="footer-icon" size={18} />
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <Mail className="footer-icon" size={18} />
              <span>info@rohitkcjain.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rohit KC Jain & Company, Chartered Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;