import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import GithubIcon from './GithubIcon';
import './Hero.css';

const Hero = () => {
  const words = ['React Developer', 'Front-End Developer', 'Node.js & Postgres Explorer', 'Problem Solver'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      {/* Decorative Orbs */}
      <div className="bg-glow-container">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">Available for Work</span>
          </div>
          
          <h1 className="hero-greeting">Hi, I'm</h1>
          <h2 className="hero-name gradient-text glow-text">AJAY KANNA L</h2>
          
          <h3 className="hero-title">
            I'm a <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </h3>
          
          <p className="hero-description">
            Entry-level developer specializing in building pixel-perfect, responsive web applications with React.js, and developing backend workflows with Node.js, PostgreSQL, RESTful APIs, GitHub, and Postman.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk <Mail size={16} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ajaykanna28" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="mailto:ajaykanna2528@gmail.com" className="social-icon-btn" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="#contact" className="social-icon-btn" aria-label="Contact Details">
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
