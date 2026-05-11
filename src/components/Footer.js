import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container-lg">
          <div className="footer-grid">

            <div className="footer-brand-col">
              <div className="footer-logo">
                <i className="bi bi-check-circle-fill"></i>
                DistriQuiero
              </div>
              <p className="footer-desc">
                Tu distribuidor mayorista de confianza. Abastecemos tu negocio
                con los mejores productos de almacén, limpieza y bebidas a
                precios competitivos.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://wa.me/543815583177"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Navegación</h4>
              <ul className="footer-links">
                <li><a href="#inicio"><i className="bi bi-chevron-right"></i>Inicio</a></li>
                <li><a href="#destacados"><i className="bi bi-chevron-right"></i>Destacados</a></li>
                <li><a href="#productos"><i className="bi bi-chevron-right"></i>Catálogo</a></li>
                <li><a href="#nosotros"><i className="bi bi-chevron-right"></i>Nosotros</a></li>
                <li><a href="#contacto"><i className="bi bi-chevron-right"></i>Contacto</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Categorías</h4>
              <ul className="footer-links">
                <li>
                  <a href="#productos">
                    <i className="bi bi-chevron-right"></i>Almacén
                  </a>
                </li>
                <li>
                  <a href="#productos">
                    <i className="bi bi-chevron-right"></i>Limpieza
                  </a>
                </li>
                <li>
                  <a href="#productos">
                    <i className="bi bi-chevron-right"></i>Bebidas
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4 className="footer-col-title">Contacto</h4>
              <ul className="footer-contact-list">
                <li>
                  <i className="bi bi-whatsapp"></i>
                  <span>+54 381 558-3177</span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <span>info@distriquiero.com</span>
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Tucumán, Argentina</span>
                </li>
                <li>
                  <i className="bi bi-clock-fill"></i>
                  <span>Lun–Vie: 8:00–18:00</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-lg">
          <p>© {year} DistriQuiero. Todos los derechos reservados.</p>
          <p className="footer-tagline">Distribución Mayorista de Confianza — Tucumán, Argentina</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
