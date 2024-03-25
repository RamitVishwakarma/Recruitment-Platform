import React, { useState } from "react";

const Dropdown = ({ options, onChangeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className={`dropdown-toggle ${isOpen ? "rotate-icon" : ""}`}
        onClick={toggleDropdown}>
        {selectedOption || "Select an option"}
        <span className={`dropdown-icon ${isOpen ? "rotate" : ""}`}>
          &#9660;
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={onChangeHandler}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
