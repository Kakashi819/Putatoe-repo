import React from "react";
import './SimpleCard.css'


function SimpleCard({card}) {
  return (
    <div className="simple-cards-cover">
      <img src={card.src} className="simple-image" alt={card.title} />
    </div>
  );
}

export default SimpleCard;
