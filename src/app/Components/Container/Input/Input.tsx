"use client";
import React, { useState } from "react";
import styles from "./Input.module.css";

type InputProps = {
  value: string;
  label: string;
  width?: string;
  categories: string[];
  onChange: (value: string) => void;
};

const Input = ({
  value,
  label,
  width = "100%",
  categories,
  onChange,
}: InputProps) => {
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    if (!inputValue) {
      setFilteredCategories([]);
      setShowSuggestions(false);
    } else {
      setFilteredCategories(
        categories.filter((category) =>
          category.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
      setShowSuggestions(true);
    }
  };

  return (
    <div className={styles.inputContainer} style={{ width }}>
      <label>{label}</label>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Busca un producto"
        value={value}
        onChange={handleInputChange}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        onFocus={() => value && setFilteredCategories(categories)}
      />
      {showSuggestions && (
        <ul className={styles.suggestions}>
          {filteredCategories.map((category, index) => (
            <li key={index} onMouseDown={() => onChange(category)}>
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
