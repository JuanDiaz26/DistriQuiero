import React from "react";
import smartImg from "../assets/smart-sorteo.png";
import seleccionImg from "../assets/seleccion-mundial.jpg";

function SorteoSection() {
  return (
    <section className="sorteo-section">
      <div className="sorteo-bg-flag" />

      <div className="container-lg sorteo-container">
        <div className="sorteo-badge" data-aos="fade-down">
          🏆 SORTEO ESPECIAL — MUNDIAL 2026
        </div>

        <div className="sorteo-grid">
          {/* LEFT: info */}
          <div className="sorteo-center" data-aos="fade-right">
            <h2 className="sorteo-title">
              Se viene el{" "}
              <span className="sorteo-title-highlight">Mundial</span>
              <br />
              y DistriQuiero{" "}
              <span className="sorteo-title-se-la-juega">¡se la juega!</span>
            </h2>

            <div className="sorteo-prize">
              <div className="sorteo-prize-label">Gran Premio</div>
              <div className="sorteo-prize-text">Smart TV 43"</div>
              <div className="sorteo-prize-sub">
                Full HD · Android TV · Wi-Fi
              </div>
            </div>

            <div className="sorteo-rules">
              <div className="sorteo-rule">
                <div className="sorteo-rule-icon">💰</div>
                <div>
                  <strong>Compra mínima $100.000</strong>
                  <span>Más comprás, más chances de ganar</span>
                </div>
              </div>
              <div className="sorteo-rule">
                <div className="sorteo-rule-icon">📱</div>
                <div>
                  <strong>Seguí @distriquiero en Instagram</strong>
                  <span>Condición obligatoria para participar</span>
                </div>
              </div>
              <div className="sorteo-rule">
                <div className="sorteo-rule-icon">📅</div>
                <div>
                  <strong>Participás hasta el 30 de mayo</strong>
                  <span>Sorteo en vivo el 1 de junio de 2026</span>
                </div>
              </div>
            </div>

            <div className="sorteo-ctas">
              <a
                href="https://wa.me/543815583177?text=Hola!%20Quiero%20participar%20del%20sorteo%20de%20DistriQuiero%20🏆"
                target="_blank"
                rel="noreferrer"
                className="btn-sorteo-primary"
              >
                <i className="bi bi-whatsapp"></i>
                ¡Quiero participar!
              </a>
              <a
                href="https://www.instagram.com/distriquiero"
                target="_blank"
                rel="noreferrer"
                className="btn-sorteo-secondary"
              >
                <i className="bi bi-instagram"></i>
                Seguir en Instagram
              </a>
            </div>
          </div>

          {/* RIGHT: TV grande + selección como acento */}
          <div className="sorteo-right" data-aos="fade-left">
            <div className="sorteo-tv-wrapper">
              <div className="sorteo-tv-glow" />
              <img
                src={smartImg}
                alt="Smart TV 43 pulgadas"
                className="sorteo-tv-img"
              />
              <div className="sorteo-tv-badge">
                <span>¡GANALA!</span>
              </div>
              <img
                src={seleccionImg}
                alt="Selección Argentina"
                className="sorteo-seleccion-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SorteoSection;
