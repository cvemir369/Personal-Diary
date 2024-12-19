import "./DeleteModal.css";

export default function ModalDelete({ onClose }) {
  return (
    <div className="deleteModal">
      <h2 className="del-modal-h2">Are you sure?</h2>
      <p>This will permanently delete this entry.</p>
      <div className="del-modal-bnt-container">
        <button className="btn-ced">Delete</button>
        <button className="btn-ced" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
