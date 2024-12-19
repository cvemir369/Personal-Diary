import { useState } from "react";
import { createPortal } from "react-dom";
import DetailModal from "./DetailModal";

export default function ViewModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-gray-800 text-white rounded-lg px-5 py-2"
        onClick={() => setShowModal(true)}
      >
        Show ViewModal
      </button>
      {showModal &&
        createPortal(
          <DetailModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
