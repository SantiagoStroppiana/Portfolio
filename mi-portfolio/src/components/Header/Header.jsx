import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation("header");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hiddern";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

  return(
<header className="header">
    <div className="header-container">
      <div className="logo">
        <img className="logo-icon"/>
        <span className="logo-text">Santiago Stroppiana</span>
      </div>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <Link className="nav-link" to="/" onClick={handleLinkClick}>{t("nav.home")}</Link>
        <Link className="nav-link" to="/" onClick={handleLinkClick}>{t("nav.about")}</Link>
        <Link className="nav-link" to="/" onClick={handleLinkClick}>{t("nav.projects")}</Link>
        <Link className="nav-link" to="/" onClick={handleLinkClick}>{t("nav.contact")}</Link>
      </nav>
      <div style={{ marginLeft: "1rem" }}>
        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>
      {isMenuOpen && (
          <div 
            className="nav-overlay" 
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
    </div>
  </header>
  );
  
}
