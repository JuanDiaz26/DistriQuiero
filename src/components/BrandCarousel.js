import React from "react";

const BASE = "https://distriquiero.com/assets/";

const brands = [
  { src: `${BASE}marolio.png`, alt: "Marolio" },
  { src: `${BASE}la-serenisima.png`, alt: "La Serenísima" },
  { src: `${BASE}arcor.png`, alt: "Arcor" },
  { src: `${BASE}coca-cola.png`, alt: "Coca-Cola" },
  { src: `${BASE}quilmes.png`, alt: "Quilmes" },
  { src: `${BASE}unilever.png`, alt: "Unilever" },
  { src: `${BASE}ayudin.png`, alt: "Ayudín" },
];

function BrandCarousel() {
  const doubled = [...brands, ...brands];

  return (
    <section className="brands-section">
      <div className="brands-header" data-aos="fade-up">
        <p className="brands-label">Trabajamos con las mejores marcas</p>
      </div>

      <div className="brands-track-wrapper">
        <div className="brands-track">
          {doubled.map((brand, i) => (
            <div className="brand-item" key={i}>
              <img src={brand.src} alt={brand.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandCarousel;
