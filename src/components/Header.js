import React from "react";

const LOGO_URL = "https://distriquiero.com/assets/logo.png";

function Header({ cartCount, onCartOpen }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-lg">
        <a className="navbar-brand" href="#inicio">
          <img
            src={LOGO_URL}
            alt="DistriQuiero"
            className="navbar-logo-img"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <span className="navbar-logo-fallback">
            <i className="bi bi-check-circle-fill"></i>
            DistriQuiero
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <span className="nav-divider">|</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#productos">Catálogo</a>
            </li>
            <li className="nav-item">
              <span className="nav-divider">|</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <span className="nav-divider">|</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/distriquiero"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="social-btn"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              className="social-btn"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <button
              className="cart-btn"
              onClick={onCartOpen}
              title="Ver carrito"
            >
              <i className="bi bi-bag"></i>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
