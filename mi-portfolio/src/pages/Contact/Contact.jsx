import "./Contact.css";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.email ||
      !formData.asunto ||
      !formData.mensaje
    ) {
      alert("Por favor, complete todos los campos obligatorios");
      return;
    }

    setIsLoading(true);

    const apiUrl = "${import.meta.env.VITE_API_URL}/mail/enviar-email";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const contentType = response.headers.get("content-type");

      if (!contentType || !contentType.includes("applicaction/json")) {
        // const textResponse = await response.text();
        alert("Error de servidor");
        return;
      }

      // const data = await response.json();

      if (!response.ok) {
        alert("Error desconocido");
        return;
      }

      alert("¡Correo enviado correctamente! Gracias por ponerte en contacto.");

      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      alert("Error al enviar el mensaje " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" data-aos="fade-up">
      <div className="contact-container">
        <div className="contact-hedaer">
          <h2 className="contact-title">Ponete en contacto</h2>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-form-section">
          <h3 className="form-subtitle">Formulario</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Ingrese su nombre"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Ingrese su email"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Asunto</label>
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleInputChange}
                placeholder="Ingrese el asunto"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Tu mensaje..."
                className="form-textarea"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
