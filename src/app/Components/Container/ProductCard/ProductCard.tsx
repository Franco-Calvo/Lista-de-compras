import React from "react";
import styles from "./ProductCard.module.css";
import { Bebidas } from "../../Icons/Icons";

type ProductProps = {
  title: string;
  units: string;
};

const ProductCard = ({ title, units }: ProductProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.containerSVG}>
        <Bebidas />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.units}>{units}</p>
      </div>

      <div className={styles.options}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  );
};

export default ProductCard;
