import React, { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="product-card">
      <div className="product-card-img">
        {product.imagen && !imgFailed ? (
          <img
            src={product.imagen}
            alt={product.nombre}
            className="product-card-photo"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="product-emoji">{product.emoji}</span>
        )}
        <span className="product-categoria-badge">{product.categoria}</span>
        {product.marca && (
          <span className="product-marca-badge">{product.marca}</span>
        )}
      </div>
      <div className="product-card-body">
        <h4 className="product-card-name">{product.nombre}</h4>
        <div className="product-pricing">
          <span className="price-original">
            ${product.precio.toLocaleString("es-AR")}
          </span>
          <div className="price-offer-row">
            <span className="price-offer">
              ${product.precioOferta.toLocaleString("es-AR")}
            </span>
            <span className="price-mayorista-badge">Mayorista</span>
          </div>
        </div>
        <p className="product-min">
          <i className="bi bi-box-seam"></i> Compra mín: 12 unidades
        </p>
        <button
          className="btn-add-cart"
          onClick={() => addToCart(product)}
        >
          <i className="bi bi-cart-plus"></i>
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
