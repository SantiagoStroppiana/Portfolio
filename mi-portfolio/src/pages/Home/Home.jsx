import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <section className="aboutMe">
        <div className="aboutMe-container">
          <div className="aboutMe-content">
            {/* Columna izquierda: texto */}
            <div className="aboutMe-left">
              <h1 className="aboutMe-title">Hola, soy Santiago Stroppiana</h1>
              <p className="aboutMe-descripcion">
                Analista de Sistemas recientemente graduado, con experiencia en
                desarrollo de aplicaciones de escritorio (JavaFX) y web (React),
                backend con Java y Javalin, y gestión de bases de datos MySQL.
                Coautor del proyecto SIAJ Inventarios, sistema integral de gestión
                de stock y punto de venta. Apasionado por resolver problemas y
                optimizar procesos mediante soluciones tecnológicas.
              </p>
              <div className="aboutMe-boton">
                <button className="btn-primary">Contacto</button>
              </div>
            </div>

            {/* Columna derecha: imagen */}
            <div className="aboutMe-right">
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
    </div>
  );
}
