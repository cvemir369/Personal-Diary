import "./DetailModal.css";
import { useState } from "react";
import ModalDelete from "./DeleteModal";

export default function DetailModal({ onClose, card, onEdit, onDelete }) {
  const [showDelModal, setShowDelModal] = useState(false);

  return (
    <div className="detailModal">
      <div className="detailModalInner">
        <img className="detail-img" src={card.img} alt="" />
        <h2 className="detail-title">{card.title}</h2>
        <p className="detail-date">{card.date}</p>
        <p className="detail-desc">{card.desc}</p>
        <div className="detail-btn-container">
          <button
            className="btn-ced"
            onClick={() => {
              showDelModal ? null : onClose();
            }}
          >
            Close
          </button>
          <div className="bnt-ed-container">
            <button
              className="btn-ced"
              onClick={() => {
                onEdit(card);
                onClose();
              }}
            >
              Edit
            </button>
            <button className="btn-ced" onClick={() => setShowDelModal(true)}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {showDelModal && (
        <ModalDelete
          card={card}
          onClose={() => setShowDelModal(false)}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}
