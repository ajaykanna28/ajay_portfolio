import React from 'react';
import { Mail, Phone, ChevronUp } from 'lucide-react';
import GithubIcon from './GithubIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span>AJAY<span className="logo-dot">.DEV</span></span>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/ajaykanna28" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="mailto:ajaykanna2528@gmail.com" className="footer-social-btn" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="tel:+919597293244" className="footer-social-btn" aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>

          <a href="#home" className="back-to-top-btn" aria-label="Scroll to top">
            <ChevronUp size={20} />
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Ajay Kanna L. All rights reserved.</p>
          <p className="footer-built">Built with React.js &amp; CSS Grid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
