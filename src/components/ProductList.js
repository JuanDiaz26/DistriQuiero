import React, { useState } from "react";
import ProductCard from "./ProductCard";

const CATEGORIES = ["Todos", "Almacén", "Limpieza", "Bebidas"];

function ProductList({ products, addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filtered = products.filter(
    (p) =>
      (category === "Todos" || p.categoria === category) &&
      (p.nombre.toLowerCase().includes(search.toLowerCase()) ||
        (p.marca && p.marca.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <section className="catalog-section" id="productos">
      <div className="container-lg">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Nuestro Catálogo</span>
          <h2 className="section-title">Todos los Productos</h2>
          <p className="section-subtitle">
            Explorá nuestra oferta completa de productos de las mejores marcas.
          </p>
        </div>

        <div className="catalog-controls" data-aos="fade-up">
          <div className="search-bar">
            <i className="bi bi-search search-icon"></i>
            <input
              type="text"
              placeholder="Buscar productos o marcas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Limpiar búsqueda"
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </div>

          <div className="category-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat === "Todos" && <i className="bi bi-grid-3x3-gap"></i>}
                {cat === "Almacén" && <i className="bi bi-shop"></i>}
                {cat === "Limpieza" && <i className="bi bi-stars"></i>}
                {cat === "Bebidas" && <i className="bi bi-cup-straw"></i>}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state" data-aos="fade-up">
            <i className="bi bi-inbox"></i>
            <h5>Sin resultados</h5>
            <p>
              No hay productos que coincidan. Probá otro término o categoría.
            </p>
            <button
              className="filter-btn active"
              onClick={() => {
                setSearch("");
                setCategory("Todos");
              }}
            >
              Ver todos los productos
            </button>
          </div>
        ) : (
          <>
            <p className="results-count" data-aos="fade-up">
              {filtered.length} producto
              {filtered.length !== 1 ? "s" : ""} encontrado
              {filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="products-grid" data-aos="fade-up">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ProductList;
