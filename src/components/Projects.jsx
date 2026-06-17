import React from 'react';
import { ExternalLink, ShoppingBag, Map, CheckSquare, Star } from 'lucide-react';
import GithubIcon from './GithubIcon';
import './Projects.css';

const Projects = () => {
  const projectsList = [
    {
      title: 'Amazon Clone',
      category: 'E-Commerce Web Application',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      description: [
        'Developed a fully responsive e-commerce frontend inspired by Amazon with pixel-perfect UI design.',
        'Implemented a dynamic image carousel/slider using vanilla JavaScript, improving user interaction.',
        'Designed reusable and modular product card components, enhancing code maintainability.',
        'Built horizontal scrolling sections with custom wheel event handling, improving UX.'
      ],
      githubLink: 'https://github.com/ajaykanna28',
      demoLink: 'https://amazon-clone-amazon-clone.netlify.app/',
      illustration: (
        <div className="project-illus amazon-illus">
          <div className="illus-header">
            <span className="illus-logo">amazon<span className="logo-accent">.in</span></span>
            <div className="illus-search"></div>
          </div>
          <div className="illus-cards">
            <div className="illus-card">
              <ShoppingBag size={14} className="illus-icon" />
              <div className="illus-line-sm"></div>
              <div className="illus-stars">
                <Star size={8} fill="#f59e0b" color="#f59e0b" />
                <Star size={8} fill="#f59e0b" color="#f59e0b" />
                <Star size={8} fill="#f59e0b" color="#f59e0b" />
              </div>
            </div>
            <div className="illus-card">
              <div className="illus-line-lg"></div>
              <div className="illus-line-md"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Staybnb',
      category: 'Travel Booking Platform',
      technologies: ['HTML5', 'CSS3', 'Flexbox & CSS Grid', 'Mobile-First UI'],
      description: [
        'Designed and developed a multi-page responsive travel booking interface.',
        'Implemented modular navigation bars, search filters, and listing cards.',
        'Utilized CSS Grid and Flexbox for advanced responsive layout structuring.',
        'Focused on UI/UX consistency, mobile-first responsiveness, and accessibility.'
      ],
      githubLink: 'https://github.com/ajaykanna28',
      demoLink: 'https://stay-bnb-stay-bnb.netlify.app/',
      illustration: (
        <div className="project-illus staybnb-illus">
          <div className="illus-header">
            <div className="illus-bar-circle"></div>
            <div className="illus-bar-line"></div>
          </div>
          <div className="illus-hero">
            <Map size={18} className="illus-icon-map" />
            <div className="illus-search-bar"></div>
          </div>
          <div className="illus-grid">
            <div className="illus-grid-item"></div>
            <div className="illus-grid-item"></div>
          </div>
        </div>
      )
    },
    {
      title: 'To-Do List',
      category: 'Task Management Web App',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage API'],
      description: [
        'Built a task management application with full CRUD (Create, Read, Update, Delete) functionality.',
        'Integrated Local Storage API for persistent client-side data storage.',
        'Implemented event-driven architecture for real-time UI updates.',
        'Optimized state handling for efficient UI rendering and minimal reflow.'
      ],
      githubLink: 'https://github.com/ajaykanna28',
      demoLink: 'https://too-do-listtt.netlify.app/',
      illustration: (
        <div className="project-illus todo-illus">
          <div className="illus-header">
            <div className="illus-header-title">My Tasks</div>
            <span className="illus-badge">3 / 5</span>
          </div>
          <div className="illus-todo-list">
            <div className="illus-todo-item checked">
              <CheckSquare size={12} className="illus-check" />
              <div className="illus-line-strikethrough"></div>
            </div>
            <div className="illus-todo-item">
              <div className="illus-checkbox"></div>
              <div className="illus-line-normal"></div>
            </div>
            <div className="illus-todo-item checked">
              <CheckSquare size={12} className="illus-check" />
              <div className="illus-line-strikethrough"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <div className="title-bar"></div>
          <p className="section-subtitle">A collection of frontend web applications I have built</p>
        </div>

        <div className="projects-grid">
          {projectsList.map((project, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-image-container">
                {project.illustration}
                <div className="project-overlay">
                  <div className="overlay-actions">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="overlay-btn" aria-label="GitHub Code">
                      <GithubIcon size={20} />
                    </a>
                    <a href={project.demoLink} className="overlay-btn" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <span className="project-cat">{project.category}</span>
                <h3 className="project-title-text">{project.title}</h3>
                
                <div className="project-tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <ul className="project-bullets">
                  {project.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="bullet-item">{bullet}</li>
                  ))}
                </ul>

                <div className="project-card-actions">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm"
                  >
                    <GithubIcon size={14} /> Repository
                  </a>
                  <a 
                    href={project.demoLink} 
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
