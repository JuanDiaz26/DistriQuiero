import React from "react";

function ContentSections() {
  return (
    <>
      {/* ===== NOSOTROS ===== */}
      <section className="nosotros-section" id="nosotros">
        <div className="container-lg">
          <div className="section-header" data-aos="fade-up">
            <span className="section-label light">Quiénes Somos</span>
            <h2 className="section-title">
              DistriQuiero
            </h2>
            <p className="section-subtitle nosotros-tagline">
              Distribuidora de Artículos de Consumo Masivo
            </p>
            <p className="section-subtitle">
              ¡El mejor socio para tu negocio!
            </p>
          </div>

          <div className="stats-row" data-aos="fade-up">
            <div className="stat-card">
              <div className="stat-number">500<span>+</span></div>
              <div className="stat-label">Clientes Activos</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10<span>+</span></div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">48<span>hs</span></div>
              <div className="stat-label">Entrega Garantizada</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Categorías Premium</div>
            </div>
          </div>

          <div className="benefits-grid" data-aos="fade-up">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="bi bi-tags-fill"></i>
              </div>
              <div className="benefit-text">
                <h5>Precios Mayoristas Competitivos</h5>
                <p>
                  Precios directos de distribuidora sin intermediarios innecesarios.
                  Mejor margen de ganancia para tu negocio.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="bi bi-boxes"></i>
              </div>
              <div className="benefit-text">
                <h5>Stock Garantizado</h5>
                <p>
                  Disponibilidad constante de los productos que tu negocio necesita.
                  Nunca más preocuparte por quedarte sin mercadería.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="bi bi-truck"></i>
              </div>
              <div className="benefit-text">
                <h5>Entrega Rápida</h5>
                <p>
                  Despachos en 24 a 48 horas para que tu negocio siempre
                  esté abastecido a tiempo.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="bi bi-headset"></i>
              </div>
              <div className="benefit-text">
                <h5>Atención Personalizada</h5>
                <p>
                  Un equipo dedicado a resolver tus consultas y pedidos en
                  tiempo real, todos los días hábiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACTO ===== */}
      <section className="contacto-section" id="contacto">
        <div className="container-lg">
          <div className="section-header" data-aos="fade-up">
            <span className="section-label light">Estamos Aquí</span>
            <h2 className="section-title light-title">¿Necesitás Ayuda?</h2>
            <p className="section-subtitle light-subtitle">
              Nuestro equipo está listo para ayudarte con cotizaciones, disponibilidad
              y todo lo que necesites. Respondemos en menos de 30 minutos.
            </p>
          </div>

          <div className="contact-cards-grid" data-aos="fade-up">
            <div className="contact-info-card">
              <div className="contact-info-icon whatsapp-icon">
                <i className="bi bi-whatsapp"></i>
              </div>
              <h4>WhatsApp</h4>
              <p className="contact-info-main">+54 381 558-3177</p>
              <span className="contact-info-sub">Respuesta inmediata</span>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon email-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <h4>Email</h4>
              <p className="contact-info-main">info@distriquiero.com</p>
              <span className="contact-info-sub">Respuesta en el día</span>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon location-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h4>Ubicación</h4>
              <p className="contact-info-main">Tucumán, Argentina</p>
              <span className="contact-info-sub">Envíos a todo el país</span>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon clock-icon">
                <i className="bi bi-clock-fill"></i>
              </div>
              <h4>Horario</h4>
              <p className="contact-info-main">Lun–Vie 8:00–18:00</p>
              <span className="contact-info-sub">Sáb: 8:00–13:00</span>
            </div>
          </div>

          <div className="contacto-cta" data-aos="fade-up">
            <a
              href="https://wa.me/543815583177"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-big"
            >
              <i className="bi bi-whatsapp"></i>
              Escribinos por WhatsApp
            </a>
            <p className="contacto-cta-sub">
              Hacé tu consulta ahora y recibí atención personalizada
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentSections;
