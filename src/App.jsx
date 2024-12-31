import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import EditModal from "./components/EditModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopupForm from "./components/PopupForm";
import "./App.css";

function App() {
  const [isEditVisible, setEditVisible] = useState(false);
  const [isAddVisible, setAddVisible] = useState(false);
  const [storedItems, setStoredItems] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const [card, setCard] = useState({});
  const [theme, setTheme] = useState("theme-light");
  const [userName, setUserName] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  // Load theme and userName from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme-light";
    const savedName = localStorage.getItem("userName") || "";
    setTheme(savedTheme);
    setUserName(savedName);
    document.body.className = savedTheme; // Apply theme class to body
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  // Save userName to localStorage whenever it changes
  useEffect(() => {
    if (userName) {
      localStorage.setItem("userName", userName);
    }
  }, [userName]);

  const handleClose = () => {
    setEditVisible(false);
    setAddVisible(false);
  };

  const handleAdd = () => {
    setAddVisible(true);
  };

  const handleEdit = (item) => {
    setEditVisible(true);
    setCard(item);
  };

  const handleDelete = (itemDel) => {
    const updatedItems = storedItems.filter((item) => item.id !== itemDel.id);
    localStorage.setItem("cards", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
  };

  const handleSave = (newItem) => {
    if (!newItem.id) {
      const maxId = storedItems.length
        ? Math.max(...storedItems.map((item) => item.id))
        : 0;
      newItem.id = maxId + 1;
    }

    const updatedItems = storedItems.map((existingItem) =>
      existingItem.id === newItem.id
        ? { ...existingItem, ...newItem }
        : existingItem
    );

    if (!storedItems.find((item) => item.id === newItem.id)) {
      updatedItems.push(newItem);
    }

    localStorage.setItem("cards", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
  };

  const handlePopupStart = ({ name, theme }) => {
    setUserName(name);
    setTheme(theme);
    setShowPopup(false);
    localStorage.setItem("userName", name);
    localStorage.setItem("theme", theme);
  };
  // Open the popup again
  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <div>
      {showPopup && <PopupForm onStart={handlePopupStart} />}
      {!showPopup && (
        <>
          <Header
            setTheme={setTheme}
            userName={userName}
            // Pass openPopup function
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
        </>
      )}
    </div>
  );
}

export default App;
