import "./DetailModal.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalDelete from "./DeleteModal";

export default function Modal({ onClose }) {
  const [showDelModal, setShowDelModal] = useState(false);
  return (
    <div className="detailModal">
      <img
        className="mb-2 object-cover rounded-2xl w-full max-h-96"
        src="https://imgs.search.brave.com/B3kA1v35Xi-mQ9xBzT-9ZMbQrmNWRiE22cv76PZf5GY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEx/NzgyNjAwL3Bob3Rv/L3BhcmlzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1yeVB5/LVgyaEkxRFBYZWJi/bUJwTHdxMDEzU0lq/THMzUjh5QWp0VVdf/X1FBPQ"
        alt=""
      />
      <h2 className="text-2xl font-bold">Title</h2>
      <p className="text-sm">12.12.2012</p>
      <p className="text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nobis
        ipsam cum architecto consequatur, sapiente neque itaque delectus dolore
        quo.
      </p>
      <div className="flex gap-4 justify-between mt-2">
        <button //check if DeleteModal is open and disable closing lower DetailModal
          onClick={() => {
            showDelModal ? null : onClose();
          }}
        >
          Close
        </button>
        <div className="flex gap-4 text-sm">
          <button>Edit</button>
          <button onClick={() => setShowDelModal(true)}>Delete</button>
        </div>
      </div>
      {showDelModal &&
        createPortal(
          <ModalDelete onClose={() => setShowDelModal(false)} />,
          document.body
        )}
    </div>
  );
}
