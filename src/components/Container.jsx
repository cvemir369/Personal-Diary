import AddCardButton from "./AddCardButton";
import SmallCard from "./SmallCard";
import EditModal from "./editModal";

function Container({ storedItems, onAdd }) {
 

  return (
    <>
      <AddCardButton />
      <SmallCard />
      <EditModal />
    </>
  );
}

export default Container;
