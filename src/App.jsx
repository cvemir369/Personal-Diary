import "./App.css";
import React, { useState, useEffect } from 'react';
import initializeFakeData from "./fakeData";
import Container from "./components/Container";
import EditModal from "./components/editModal";
import ViewModal from "./components/ViewModal";

function App() {
  initializeFakeData();
  const [isEditVisible, setEditlVisible] = useState(false);
  const [isAddVisible, setaddVisible] = useState(false)
  const [storedItems, setStoredItems] = useState(JSON.parse(localStorage.getItem("myFakeData")) || []);
  const [card, setCard] = useState({});

  const handleclick = () => {
    setEditlVisible(!isEditVisible);
  };

  const handleAdd = () => {
    setaddVisible(true)
  }

  const handleEdit = (item) => {
    setEditlVisible(true);
    setCard(item);
  }

  const handleSave = (newItem) => {

    if (!newItem.id) {
      newItem.id = storedItems.length + 1;
    }

    const isIdExist =
      storedItems.findIndex((existingItem) => existingItem.id === newItem.id) >= 0;

    let updatedItems;
    if (isIdExist) {
      updatedItems = storedItems.map((existingItem) =>
        existingItem.id === newItem.id ? { ...existingItem, ...newItem } : existingItem
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


  console.log(storedItems)

  return (
    <>
      <Container storedItems={storedItems} onAdd={handleAdd} />
      {isEditVisible && <EditModal item={card} onClose={handleclick} onSave={handleSave}/>}
      {isAddVisible && <EditModal onClose={handleclick} onSave={handleSave}/>}
      <ViewModal onEdit={handleEdit} />
    </>
  );
}

export default App;
