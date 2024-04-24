import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const MultiSelectDropdown = ({ options, onSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    onSelect(updatedOptions);
  };

  return (
    <div className="relative">
      <div className="max-h-40 overflow-y-auto border rounded-md border-gray-300 p-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2 cursor-pointer p-2">
            <input
              type="checkbox"
              id={option.id}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionToggle(option)}
              className="cursor-pointer"
            />
            <label htmlFor={option.id} className="flex items-center">
              <FaCheck className="mr-2" />
              {option.name}
            </label>
            <img src={option.profileImage} alt={option.name} className="w-6 h-6 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
