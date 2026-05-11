import React from "react";
import ProductCard from "./ProductCard";

function SearchAndShowcase({ products, addToCart }) {
  const featured = products.filter((p) => p.destacado);

  return (
    <section className="featured-section" id="destacados">
      <div className="container-lg">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Lo Mejor en Mayorista</span>
          <h2 className="section-title">Productos Destacados</h2>
          <p className="section-subtitle">
            Selección especial con los mejores precios mayoristas para tu
            negocio.
          </p>
        </div>

        <div className="featured-grid">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchAndShowcase;
