import React from 'react';
import './Stack.css';

export function Stack() {
  const techStacks = [
    {
      category: 'Backend',
      icon: '<>',
      technologies: [
        { name: 'Java', logo: "/icons/java.png" },
        { name: 'PHP', logo: "/icons/php.png" },
        { name: 'Hibernate', logo: "/icons/hibernate.png" },
        { name: 'MySQL', logo: "/icons/mysql.png" },
        { name: 'Python', logo: "/icons/python.png" },
      ],
    },
    {
      category: 'Frontend',
      icon: '🌐',
      technologies: [
        { name: 'HTML', logo: "/icons/html.png" },
        { name: 'CSS', logo: "/icons/css.png" },
        { name: 'JavaScript', logo: "/icons/javascript.png" },
        { name: 'React-Vite', logo: "/icons/react.png" },
        { name: 'JavaFX', logo: "/icons/javafx.png" },
      ],
    },
  ];

  return (
    <div className="home-skills" >
      <section className="skills">
        <div className="skills-container" data-aos="fade-up">
          <h1 className="skills-title">Stack Tecnológico</h1>
          <div className="skills-content">
            {techStacks.map((stack, index) => (
              <div key={index} className="tech-card">
                <div className="card-header">
                  <span className="card-icon">{stack.icon}</span>
                  <h3 className="card-title">{stack.category}</h3>
                </div>
                <div className="tech-grid">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-badge">
                      {tech.logo && (
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="tech-logo"
                        />
                      )}
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
