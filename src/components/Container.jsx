import AddCardButton from "./AddCardButton";
import SmallCard from "./SmallCard";

function Container({ storedItems, onAdd }) {
 

  return (
    <>
    <AddCardButton />
    <SmallCard />
    </>
  )
}

export default Container;