import "./SmallCard.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import DetailModal from "./DetailModal";

function SmallCard({ card, onEdit }) {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (card) => {
    setShowModal(true);
  };

  return (
    <div className="cards-container">
        <button
          key={card.id}
          onClick={() => handleButtonClick(card)}
          className="card-btn"
        >
          <img className="card-img" src={card.img} alt="" />
          <h2 className="card-title">{card.title}</h2>
          <p className="card-date">{card.date}</p>
        </button>
      {showModal &&
        createPortal(
          <DetailModal
            card={card}
            onClose={() => setShowModal(false)}
            onEdit={onEdit}
          />,
          document.body
        )}
    </div>
  );
}

export default SmallCard;
