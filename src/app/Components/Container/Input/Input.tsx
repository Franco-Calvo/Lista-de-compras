import React from "react";
import styles from "./Input.module.css";

type InputProps = { value: string; label: string; width?: string };

const Input = ({ value, label, width = "100%" }: InputProps) => {
  return (
    <div className={styles.inputContainer} style={{ width }}>
      <label>{label}</label>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Busca un producto"
        value={value}
      />
    </div>
  );
};

export default Input;
