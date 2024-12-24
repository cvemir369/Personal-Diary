import AddCardButton from "./AddCardButton";
import SmallCard from "./SmallCard";

function Container({ storedItems, onAdd, onEdit, onClose }) {
  return (
    <div className="grid grid-cols-4 justify-between gap-5">
      <AddCardButton onAdd={onAdd} onClose={onClose} />
      {storedItems.map((item) => (
        <SmallCard key={item.id} card={item} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default Container;
