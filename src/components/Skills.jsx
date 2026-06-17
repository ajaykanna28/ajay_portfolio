import React from 'react';
import { Code2, Globe, Layers, Settings } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layers size={24} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Code2 size={24} />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'RESTful APIs', level: 80 }
      ]
    },
    {
      title: 'Frontend Concepts',
      icon: <Globe size={24} />,
      skills: [
        { name: 'Responsive Design', level: 95 },
        { name: 'Flexbox & CSS Grid', level: 90 },
        { name: 'DOM Manipulation', level: 85 }
      ]
    },
    {
      title: 'Tools & Workflows',
      icon: <Settings size={24} />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Postman', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <div className="title-bar"></div>
          <p className="section-subtitle">The technologies and tools I use to build responsive interfaces</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
