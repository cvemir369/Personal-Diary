import "./App.css";
import React, { useState, useEffect } from "react";
import initializeFakeData from "./fakeData";
import Container from "./components/Container";
import EditModal from "./components/EditModal";

function App() {
  initializeFakeData();
  const [isEditVisible, setEditlVisible] = useState(false);
  const [isAddVisible, setaddVisible] = useState(false);
  const [storedItems, setStoredItems] = useState(
    JSON.parse(localStorage.getItem("myFakeData")) || []
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

    localStorage.setItem("myFakeData", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
    handleclick();
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("myFakeData")) || [];
    setStoredItems(items);
  }, []);

  useEffect(() => {
    localStorage.setItem("myFakeData", JSON.stringify(storedItems));
  }, [storedItems]);

  // console.log(storedItems);

  return (
    <div className="bg-[#E8E1D3] h-screen text-[#333] flex flex-col items-center">
      <header className="pt-24 font-serif text-4xl mb-12">
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
