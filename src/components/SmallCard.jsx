import "./SmallCard.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import DetailModal from "./DetailModal";

function SmallCard() {
  const cards = JSON.parse(localStorage.getItem("myFakeData") || "[]");
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleButtonClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <button
          key={card.id}
          onClick={() => handleButtonClick(card)}
          className="card-btn"
        >
          <img className="card-img" src={card.img} alt="" />
          <h2 className="card-title">{card.title}</h2>
          <p className="card-date">{card.date}</p>
        </button>
      ))}
      {showModal &&
        createPortal(
          <DetailModal
            card={selectedCard}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </div>
  );
}

export default SmallCard;
