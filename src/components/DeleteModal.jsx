import "./DeleteModal.css";

export default function ModalDelete({ card, onClose, onDelete }) {
  return (
    <div className="deleteModal">
      <div className="deleteModalInner">
        <h2 className="del-modal-h2">Are you sure?</h2>
        <p>This will permanently delete this entry.</p>
        <div className="del-modal-bnt-container">
          <button className="btn-ced" onClick={() => onDelete(card)}>
            Delete
          </button>
          <button className="btn-ced" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
