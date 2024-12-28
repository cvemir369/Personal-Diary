import "./App.css";
import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import EditModal from "./components/EditModal";

function App() {
  const [isEditVisible, setEditlVisible] = useState(false);
  const [isAddVisible, setaddVisible] = useState(false);
  const [storedItems, setStoredItems] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const [card, setCard] = useState({});
  

  const handleClose = () => {
    setEditlVisible(false);
    setaddVisible(false);
  };

  const handleAdd = () => {
    setaddVisible(true);
  };

  const handleEdit = (item) => {
    setEditlVisible(true);
    setCard(item);
  };

  const handleDelete = (itemDel) => {
    const updatedItems = storedItems.filter((item) => item.id !== itemDel.id);
    localStorage.setItem("myFakeData", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
  };

  const handleSave = (newItem) => {
    if (!newItem.id) {
      newItem.id = storedItems.length + 1;
    }

    const isIdExist =
      storedItems.findIndex((existingItem) => existingItem.id === newItem.id) >=
      0;

    let updatedItems;
    if (isIdExist) {
      updatedItems = storedItems.map((existingItem) =>
        existingItem.id === newItem.id
          ? { ...existingItem, ...newItem }
          : existingItem
      );
    } else {
      updatedItems = [...storedItems, newItem];
    }

    localStorage.setItem("cards", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
    console.log(updatedItems)
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cards")) || [];
    setStoredItems(items);
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(storedItems));
  }, [storedItems]);

  return (
    <div className="appContainer">
      <header className="homeHeader">
        My Personal Diary
      </header>
      <Container
        storedItems={storedItems}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onClose={handleClose}
      />
      {isEditVisible && (
        <EditModal item={card} onClose={handleClose} onSave={handleSave} />
      )}
      {isAddVisible && <EditModal onClose={handleClose} onSave={handleSave} />}
    </div>
  );
}

export default App;
