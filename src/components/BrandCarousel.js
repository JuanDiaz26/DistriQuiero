import React from "react";

const BASE = "https://distriquiero.com/assets/";

const brands = [
  { src: `${BASE}marca1.png`, alt: "Marca 1" },
  { src: `${BASE}marca2.png`, alt: "Marca 2" },
  { src: `${BASE}marca3.png`, alt: "Marca 3" },
  { src: `${BASE}marca4.png`, alt: "Marca 4" },
  { src: `${BASE}marca5.png`, alt: "Marca 5" },
  { src: `${BASE}marca6.png`, alt: "Marca 6" },
  { src: `${BASE}marca7.png`, alt: "Marca 7" },
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
