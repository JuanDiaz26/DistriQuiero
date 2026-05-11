import React from "react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/543815583177"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float whatsapp-pulse"
      title="Contáctanos por WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
