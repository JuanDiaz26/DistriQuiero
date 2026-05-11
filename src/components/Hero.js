import React from "react";
import bannerImage from "../assets/Portada.png";

function Hero() {
  const scrollToProducts = () => {
    const section = document.getElementById("productos");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="inicio">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-ctas">
          <button className="btn-primary-hero" onClick={scrollToProducts}>
            <i className="bi bi-grid-3x3-gap-fill"></i>
            Ver Catálogo
          </button>
          <a
            href="https://wa.me/543815583177"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-hero"
          >
            <i className="bi bi-whatsapp"></i>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
