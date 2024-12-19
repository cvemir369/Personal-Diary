import AddCardButton from "./AddCardButton";
import SmallCard from "./SmallCard";

function Container({ storedItems, onAdd, onEdit }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6 p-4">
      <AddCardButton />
      {storedItems.map((item) => (
        <SmallCard key={item.id} card={item} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default Container;
