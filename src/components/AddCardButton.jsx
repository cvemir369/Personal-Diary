import { useState } from "react";
import { createPortal } from "react-dom";
import EditModal from "./EditModal";
import "./SmallCard.css";

function AddCardButton() {
  const [showModal, setShowModal] = useState(false);

  const getTodayDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };

  return (
    <div className="cards-container">
      <button onClick={() => setShowModal(true)} className="card-btn">
        <div className="card-content">
          <h2 className="card-title">Add Diary Entry</h2>
          <p className="card-date">{getTodayDate()}</p>
        </div>
      </button>
      {showModal &&
        createPortal(
          <EditModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}

export default AddCardButton;
