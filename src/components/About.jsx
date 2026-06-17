import React from 'react';
import { Award, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="title-bar"></div>
          <p className="section-subtitle">Combining engineering logic with frontend creativity</p>
        </div>

        <div className="about-content">
          {/* Bio Column */}
          <div className="about-bio glass-card">
            <h3 className="bio-title">My Journey</h3>
            <p className="bio-text">
              I am a graduate in <strong>Electrical and Electronics Engineering</strong> (2024) with a strong foundation in analytical thinking and problem-solving. During my academic journey, I found myself drawn towards the creative and interactive aspects of technology, which led me to dive deep into frontend web development.
            </p>
            <p className="bio-text">
              What started as curiosity quickly turned into a passion. I enjoy bridging the gap between design and technology, transforming complex logic into simple, intuitive, and accessible user interfaces. I love writing clean, modular code and am constantly exploring the latest tools in the React ecosystem.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <GraduationCap className="stat-icon" size={24} />
                <h4 className="stat-value">8.11</h4>
                <p className="stat-label">Engineering CGPA</p>
              </div>
              <div className="stat-card">
                <Briefcase className="stat-icon" size={24} />
                <h4 className="stat-value">3+</h4>
                <p className="stat-label">React Projects</p>
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="about-timeline glass-card">
            <h3 className="timeline-title">Education & Trainee Experience</h3>
            <div className="timeline">
              {/* Experience Item */}
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Briefcase size={16} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-date">
                    <Calendar size={12} /> Mar 2024 - Apr 2024
                  </div>
                  <h4 className="timeline-role">Electrical Maintenance Trainee</h4>
                  <p className="timeline-org">Aquasub Engineering, Coimbatore</p>
                  <p className="timeline-details">
                    Assisted in the maintenance, calibration, and troubleshooting of electrical systems. Gained hands-on experience in analytical diagnostics, safety protocols, and teamwork in an industrial setting.
                  </p>
                </div>
              </div>

              {/* Education Item */}
              <div className="timeline-item">
                <div className="timeline-marker">
                  <GraduationCap size={16} />
                </div>
                <div className="timeline-content">
                  <div className="timeline-date">
                    <Calendar size={12} /> 2020 - 2024
                  </div>
                  <h4 className="timeline-role">B.E. Electrical & Electronics Engineering</h4>
                  <p className="timeline-org">Sri Ramakrishna Engineering College</p>
                  <p className="timeline-details">
                    Completed a Bachelor of Engineering with a CGPA of 8.11. Built core foundations in logical computing, electronics design, mathematical analysis, and structured problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
