import "./SmallCard.css";
import { useState } from "react";
import DetailModal from "./DetailModal";

function SmallCard({ card, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        key={card.id}
        onClick={() => setShowModal(true)}
        className="card-btn"
      >
        <img className="card-img" src={card.img} alt="" />
        <h2 className="card-title">{card.title}</h2>
        <p className="card-date">{card.date}</p>
      </button>
      {showModal && (
        <DetailModal
          card={card}
          onClose={() => setShowModal(false)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </>
  );
}

export default SmallCard;
