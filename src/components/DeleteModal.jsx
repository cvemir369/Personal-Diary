import "./DeleteModal.css";

export default function ModalDelete({ onClose }) {
  return (
    <div className="deleteModal">
      <h2 className="text-2xl font-bold">Are you sure?</h2>
      <p>This will permanently delete this entry.</p>
      <div className="flex gap-4 justify-center mt-2">
        <button>Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
