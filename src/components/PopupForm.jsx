import React, { useState } from "react";

const PopupForm = ({ onStart, onClose }) => {
  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "theme-light"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ name, theme });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Personal Diary Setup
          </h2>
          <button onClick={onClose} className="text-3xl self-start">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onClick={(e) => e.target.select()}
              className="input-style text-black"
              placeholder={name ? name : "Enter your name"}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Theme:
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="input-style text-black"
            >
              <option value="theme-light">Light</option>
              <option value="theme-dark">Dark</option>
              <option value="theme-colorful">Colorful</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 font-medium"
          >
            Start
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
