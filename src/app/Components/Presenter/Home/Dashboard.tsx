import React from "react";
import styles from "./Dashboard.module.css";
import Input from "@/app/Components/Container/Input/Input";
import InputWithSelect from "../../Container/InputWithSelect/InputWithSelect";
import ProductCard from "../../Container/ProductCard/ProductCard";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header} />
      <div className={styles.containerInputs}>
        <h1>Lista de compras</h1>
        <Input label="Producto" value="Coca Cola 3LTS" width="100%" />
        <div className={styles.bottomInputs}>
          <InputWithSelect value="1" />
          <Input label="Precio" value="$4200" width="60%" />
          <button className={styles.addToCart}>+</button>
        </div>
      </div>
      <ProductCard title="Bebidas" units="2 unidades" />
    </div>
  );
};

export default Dashboard;
