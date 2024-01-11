import React, { useState } from "react";
import { Options } from "../type-props";

interface DropdownProps {
  options: Options[];
  onSelect: (option: string) => void;
  value: string;
}

const Dropdown = ({ options, onSelect, value }: DropdownProps) => {
  const handleSelect = (option: string) => {
    onSelect(option);
  };

  return (
    <div className="flexbox">
      <select
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
        className="input-box"
      >
        <option value={0} className="input-box">
          Population
        </option>
        {options.map((option: Options) => (
          <option
            key={option?.value}
            value={option?.value}
            className="input-box"
          >
            {option?.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
