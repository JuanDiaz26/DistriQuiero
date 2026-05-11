import React from "react";

function Features() {
  const features = [
    {
      icon: "bi-truck",
      title: "Envío Exprés",
      description: "Llegamos rápido a tu negocio con entregas mayoristas confiables.",
    },
    {
      icon: "bi-percent",
      title: "Precios Competitivos",
      description: "Promociones y descuentos especiales para compras al por mayor.",
    },
    {
      icon: "bi-headset",
      title: "Atención Personalizada",
      description: "Soporte dedicado para ayudarte a elegir los mejores productos.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`bi ${feature.icon}`}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
