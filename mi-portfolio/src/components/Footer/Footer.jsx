// Footer.jsx
import "./Footer.css";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            <div className="logo-icon">S</div>
            Santiago Stroppiana
          </a>
          <span className="copyright">
            © 2025 Santiago Stroppiana
          </span>
        </div>

        <div className="footer-right">
          
          <div className="social-links">
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
          </div>
        </div>
      </div>
    </footer>
  );
}