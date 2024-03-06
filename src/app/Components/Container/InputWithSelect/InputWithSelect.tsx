import React from "react";
import styles from "./InputWithSelect.module.css";

type InputProps = {
  value: string;
};

const InputWithSelect = ({ value }: InputProps) => {
  return (
    <div className={styles.input}>
      <label>Cantidad</label>
      <div className={styles.inputContainer}>
        <input
          className={styles.textInput}
          type="number"
          placeholder="1"
        />
        <span>UN.</span>
      </div>
    </div>
  );
};

export default InputWithSelect;
