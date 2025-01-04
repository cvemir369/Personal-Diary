import React, { useState } from "react";

const Footer = ({ theme }) => {
  const [quote, setQuote] = useState(
    "A good diary is a story that only you know and can tell."
  );

  const handleQuoteChange = () => {
    const quotes = [
      "A diary is a conversation between you and yourself.",
      "Write today, for the memories of tomorrow.",
      "Every day is a new story to be written.",
      "The beauty of a diary lies in its honesty.",
      "Life is a journey, and a diary is the map.",
      "In the pages of my diary, I find solace and strength.",
      "A diary is a window to the soul.",
      "The past is a foreign country, but my diary is its passport.",
      "Writing in my diary is like talking to my best friend.",
      "A diary is a time capsule of my thoughts and feelings.",
      "In my diary, I can be truly myself.",
      "The pages of my diary hold the secrets of my heart.",
      "A diary is a treasure trove of memories.",
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className={theme}>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="flex flex-col items-center justify-between h-full w-full">
          <nav className="flex justify-center items-center space-x-4 mb-4 w-full">
            <button
              className="btn btn-ghost btn-sm rounded-btn text-indigo-600"
              onClick={handleQuoteChange}
            >
              Inspire Me
            </button>
            <a className="btn btn-ghost btn-sm rounded-btn">Help & Support</a>
            <a className="btn btn-ghost btn-sm rounded-btn">About Us</a>
          </nav>
          <p className="font-medium text-center my-4 max-w-md">"{quote}"</p>
          <aside>
            <p className="text-xs opacity-50 mt-4">
              Created with ❤️ {new Date().getFullYear()} - All rights reserved.
            </p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
