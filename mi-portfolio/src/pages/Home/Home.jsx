import "./Home.css";
import { Stack } from "../AboutMe/Stack";
import { Contact } from "../Contact/Contact";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Home() {
  return (
    <div className="home">
      <section className="aboutMe">
        <div className="aboutMe-container">
          <div className="aboutMe-content">
            {/* Columna izquierda: texto */}
            <div className="aboutMe-left" data-aos="fade-up">
              <h1 className="aboutMe-title">Hola, soy Santiago Stroppiana</h1>
              <p className="aboutMe-descripcion">
                Analista de Sistemas recientemente graduado, con experiencia en
                desarrollo de aplicaciones de escritorio (JavaFX) y web (React),
                backend con Java y Javalin, y gestión de bases de datos MySQL.
                Coautor del proyecto SIAJ Inventarios, sistema integral de
                gestión de stock y punto de venta. Apasionado por resolver
                problemas y optimizar procesos mediante soluciones tecnológicas.
              </p>
              <div className="aboutMe-boton">
                <button className="btn-primary">Contacto</button>
                <button className="btn-secondary">Proyectos</button>
                <a
                  href="https://github.com/SantiagoStroppiana"
                  className="social-link github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/santiago-stroppiana/"
                  className="social-link linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                  LinkedIn
                </a>

                {/* <a
                   href="/doc/SantiagoStroppiana.pdf" download className="btn-tertiary"
                >
                CV
                </a> */}

                <a class="download-button"  href="/doc/SantiagoStroppiana.pdf" download >
                  <div class="docs">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    CV
                  </div>
                  <div class="download">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Columna derecha: imagen */}
            <div className="aboutMe-right" data-aos="fade-up">
              <div className="profile-image-container">
                <img
                  src="/img/foto-perfil.png"
                  alt="imagen de perfil"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stack />

      <Contact />
    </div>
  );
}
