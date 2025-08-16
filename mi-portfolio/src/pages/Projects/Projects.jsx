import "./Projects.css";
import React, { useState } from "react";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const toggleExpanded = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const nextImage = (projectId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const renderTechStack = (technologies, maxVisible = 4) => {
    const visibleTech = technologies.slice(0, maxVisible);
    const hiddenCount = technologies.length - maxVisible;

    return (
      <div className="tech-stack">
        {visibleTech.map((tech, index) => (
          <span key={index} className={`tech-tag ${tech.class}`}>
            {tech.name}
          </span>
        ))}
        {hiddenCount > 0 && (
          <span className="tech-tag more">+{hiddenCount} más</span>
        )}
      </div>
    );
  };

  const projects = [
    {
      id: "siaj",
      title: "SIAJ-Inventarios",
      description:
        "Sistema de gestión de inventarios para pequeños comercios, diseñado para optimizar el control de stock, registrar entradas y salidas de productos, y facilitar las operaciones diarias.",
      images: [
        "/img/siaj.png",
        "/path/to/erp-image2.jpg",
        "/path/to/erp-image3.jpg",
      ],
      technologies: [
        { name: "Java", class: "java" },
        { name: "JavaFX", class: "javafx" },
        { name: "CSS", class: "css" },
        { name: "MySQL", class: "mysql" },
        { name: "RailWay", class: "hibernate" },
        { name: "Hibernate", class: "hibernate" },
        { name: "Git", class: "git" },
      ],
      allTechnologies: [
        { name: "Java", class: "java" },
        { name: "JavaFX", class: "javafx" },
        { name: "CSS", class: "css" },
        { name: "MySQL", class: "mysql" },
        { name: "Hibernate", class: "hibernate" },
        { name: "RailWay", class: "hibernate" },
        { name: "Git", class: "git" },
      ],
      documentationUrl:
        "https://discovered-lily-1f1.notion.site/SIAJ-INVENTARIOS-185f54b074308038bf10ceedcf8582f0",
      repositoryUrl:
        "https://github.com/SantiagoStroppiana/SIAJ-Inventarios.git",
    },
    {
      id: "siaj-web",
      title: "SIAJ-Inventarios Landing Page",
      description: "Landing page informativa sobre el sistema SIAJ-Inventarios, cuenta con implementacion de MercadoPago Checkout Pro.",
      images: [
        "/path/to/analytics-image1.jpg",
        "/path/to/analytics-image2.jpg",
      ],
      technologies: [
        { name: "React", class: "react" },
        { name: "HTML", class: "html" },
        { name: "CSS", class: "css" },
        { name: "MercadoPago", class: "css" },
        { name: "NodeMailer", class: "css" },
        { name: "Vercel", class: "hibernate" },
        { name: "Git", class: "git" },
      ],
      allTechnologies: [
        { name: "React", class: "react" },
        { name: "HTML", class: "html" },
        { name: "CSS", class: "css" },
        { name: "MercadoPago", class: "css" },
        { name: "NodeMailer", class: "css" },
        { name: "Vercel", class: "hibernate" },
        { name: "Git", class: "git" },
      ],
      documentationUrl: "https://tu-documentacion-analytics.com",
      repositoryUrl: "https://github.com/tu-usuario/analytics-platform",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Proyectos Realizados</h2>

        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-main">
              <div className="project-image">
                <div className="image-carousel">
                  <div className="carousel-container">
                    <img
                      src={project.images[currentImageIndex[project.id] || 0]}
                      alt={`${project.title} screenshot ${
                        (currentImageIndex[project.id] || 0) + 1
                      }`}
                      className="carousel-image"
                      onError={(e) => {
                        // Fallback si la imagen no carga
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div
                      className="image-placeholder"
                      style={{ display: "none" }}
                    >
                      <div className="placeholder-content">
                        <h4>{project.title}</h4>
                        <p>
                          Screenshot {(currentImageIndex[project.id] || 0) + 1}
                        </p>
                      </div>
                    </div>
                  </div>

                  {project.images.length > 1 && (
                    <>
                      <button
                        className="carousel-btn prev"
                        onClick={() =>
                          prevImage(project.id, project.images.length)
                        }
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        className="carousel-btn next"
                        onClick={() =>
                          nextImage(project.id, project.images.length)
                        }
                      >
                        <ChevronRight size={20} />
                      </button>

                      <div className="carousel-indicators">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            className={`indicator ${
                              (currentImageIndex[project.id] || 0) === index
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [project.id]: index,
                              }))
                            }
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {renderTechStack(project.technologies)}

                <div className="project-links">
                  <a
                    href={project.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    <ExternalLink size={16} />
                    Documentación
                  </a>
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    <Github size={16} />
                    Repositorio
                  </a>
                </div>

                <button
                  className="see-more-btn"
                  onClick={() => toggleExpanded(project.id)}
                >
                  Ver más detalles
                  <ChevronDown
                    size={16}
                    className={`chevron ${
                      expandedProject === project.id ? "rotated" : ""
                    }`}
                  />
                </button>

                {expandedProject === project.id && (
                  <div className="expanded-content">
                    <div className="project-details">
                      <div className="detail-section">
                        <h4>Listado completo tecnológias</h4>
                        <div className="tech-stack expanded">
                          {project.allTechnologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`tech-tag ${tech.class}`}
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
