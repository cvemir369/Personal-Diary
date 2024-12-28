import AddCardButton from "./AddCardButton";
import SmallCard from "./SmallCard";
import './Container.css'

function Container({ storedItems, onAdd, onEdit, onDelete, onClose }) {
  return (
    <div className="mx-auto">
      <div className="listItems">
      <AddCardButton onAdd={onAdd} onClose={onClose} />
      {storedItems.map((item) => (
        <SmallCard
          key={item.id}
          card={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
    </div>
  );
}

export default Container;
