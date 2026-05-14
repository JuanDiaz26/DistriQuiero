import React, { useEffect } from "react";

function Cart({ cart, updateQuantity, removeItem, isOpen, onClose }) {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.precioOferta * item.quantity,
    0
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const sendWhatsApp = () => {
    const lines = cart
      .map(
        (item) =>
          `• ${item.nombre} × ${item.quantity} = $${(
            item.precioOferta * item.quantity
          ).toLocaleString("es-AR")}`
      )
      .join("\n");

    const text = `📦 *Pedido DistriQuiero*\n\n${lines}\n\n💰 *Total: $${subtotal.toLocaleString(
      "es-AR"
    )}*\n\n¡Hola! ¿Me pueden confirmar disponibilidad?`;

    window.open(
      `https://wa.me/543815583177?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      {isOpen && (
        <div className="cart-backdrop" onClick={onClose} />
      )}

      <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-drawer-header">
          <div>
            <h5 className="cart-drawer-title">
              <i className="bi bi-bag"></i> Mi Carrito
            </h5>
            {cart.length > 0 && (
              <small className="cart-drawer-count">
                {cart.reduce((a, i) => a + i.quantity, 0)} producto
                {cart.reduce((a, i) => a + i.quantity, 0) !== 1 ? "s" : ""}
              </small>
            )}
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Cerrar carrito">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <i className="bi bi-bag"></i>
              <p style={{ fontWeight: "600", marginBottom: "0.4rem" }}>
                Tu carrito está vacío
              </p>
              <p style={{ fontSize: "0.85rem" }}>
                Añadí productos para comenzar tu pedido.
              </p>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-emoji">{item.emoji}</div>
                    <div className="cart-item-info">
                      <p className="cart-item-name">{item.nombre}</p>
                      <p className="cart-item-price">
                        ${item.precioOferta.toLocaleString("es-AR")} c/u
                      </p>
                    </div>
                    <div className="cart-item-controls">
                      <button
                        className="cart-qty-btn"
                        onClick={() =>
                          item.quantity > 1
                            ? updateQuantity(item.id, item.quantity - 1)
                            : removeItem(item.id)
                        }
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <span className="cart-qty-value">{item.quantity}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeItem(item.id)}
                      aria-label="Eliminar"
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-subtotal">
                <span>Subtotal mayorista</span>
                <span className="cart-subtotal-value">
                  ${subtotal.toLocaleString("es-AR")}
                </span>
              </div>

              <button className="btn-checkout" onClick={sendWhatsApp}>
                <i className="bi bi-whatsapp"></i>
                Finalizar por WhatsApp
              </button>

              <button className="btn-seguir-comprando" onClick={onClose}>
                <i className="bi bi-arrow-left"></i>
                Seguir comprando
              </button>
            </>
          )}
        </div>

        <div className="cart-drawer-footer"></div>
      </div>
    </>
  );
}

export default Cart;
