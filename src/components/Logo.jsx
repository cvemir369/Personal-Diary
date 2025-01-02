import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <h1 className="logo-text">
        <span className="logo-word">
          {"Personal".split("").map((letter, index) => (
            <span key={index} className="animate-letter">
              {letter}
            </span>
          ))}
        </span>
        <span className="logo-word">
          {"Diary".split("").map((letter, index) => (
            <span key={index} className="animate-letter">
              {letter}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
};

export default Logo;
