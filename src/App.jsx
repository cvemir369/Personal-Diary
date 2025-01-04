import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import EditModal from "./components/EditModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopupForm from "./components/PopupForm";
import "./App.css";

function App() {
  const [isEditVisible, setEditlVisible] = useState(false);
  const [isAddVisible, setaddVisible] = useState(false);
  const [storedItems, setStoredItems] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const [card, setCard] = useState({});
  const [theme, setTheme] = useState("theme-light");
  const [userName, setUserName] = useState("");
  const [showPopup, setShowPopup] = useState(true);

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
    localStorage.setItem("cards", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
  };

  const handleSave = (newItem) => {
    if (storedItems.length == 0) {
      newItem.id = 1;
    }

    if (!newItem.id) {
      const maxId = Math.max(...storedItems.map((item) => item.id));
      newItem.id = maxId + 1;
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
    console.log(updatedItems);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cards")) || [];
    setStoredItems(items);
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(storedItems));
  }, [storedItems]);

  const handlePopupStart = ({ name, theme }) => {
    setUserName(name);
    setTheme(theme);
    setShowPopup(false);
    localStorage.setItem("userName", name);
    localStorage.setItem("theme", theme);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div>
      {showPopup && <PopupForm onStart={handlePopupStart} />}
      {!showPopup && (
        <div className="flex flex-col h-screen">
          <Header
            setTheme={setTheme}
            userName={userName}
            openPopup={openPopup}
          />
          <div className={`appContainer ${theme}`}>
            <Container
              storedItems={storedItems}
              onAdd={handleAdd}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onClose={handleClose}
            />
            {isEditVisible && (
              <EditModal
                item={card}
                onClose={handleClose}
                onSave={handleSave}
                storedItems={storedItems}
                buttonName={"Save Changes"}
              />
            )}
            {isAddVisible && (
              <EditModal
                onClose={handleClose}
                onSave={handleSave}
                storedItems={storedItems}
                buttonName={"Add Entry"}
              />
            )}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
