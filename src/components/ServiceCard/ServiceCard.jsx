import React from "react";
import "./ServiceCard.css";

function ServiceCard({ card }) {
  return (
    <div className="service-card">
      <div className="service-cards-cover">
        <img src={card.src} className="card-image" alt={card.title} />
      </div>
      <div className="card-title">{card.name}</div>
    </div>
  );
}

export default ServiceCard;
