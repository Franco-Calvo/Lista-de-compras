"use client";
import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import Input from "@/app/Components/Container/Input/Input";
import InputWithSelect from "../../Container/InputWithSelect/InputWithSelect";
import ProductCard from "../../Container/ProductCard/ProductCard";

const categories = [
  "Vinos",
  "Aperitivos/Amargos",
  "Licores",
  "Espumantes",
  "Fernet",
  "Jugos en polvo",
  "Jugos concentrados",
  "Jugos listos para beber",
  "Isotónicas",
  "Energizantes",
  "Gaseosas",
  "Agua Mineral",
  "Agua saborizada",
  "Soda",
  "Cervezas",
  "Aderezos",
  "Aceitunas",
  "Atún",
  "Sardinas",
  "Arvejas",
  "Choclo",
  "Lentejas",
  "Maíz",
  "Salsas",
  "Conservas de tomate",
  "Arroz",
  "Pastas Secas",
  "Snacks",
  "Caldos",
  "Sopas",
  "Puré instantáneo",
  "Sal",
  "Especias",
  "Aceite",
  "Vinagre",
  "Aceto",
  "Harina",
  "Premezclas",
  "Maizena",
  "Polenta",
  "Sémola",
  "Azúcar",
  "Galletitas",
  "Vainillas",
  "Pionono",
  "Bizcochuelo",
  "Esencia de vainilla",
  "Coco rallado",
  "Chocolate cobertura",
  "Cereales",
  "Mermeladas",
  "Dulce de leche",
  "Flan en polvo",
  "Postre en polvo",
  "Gelatina en polvo",
  "Frutas enlatadas",
  "Pan lactal",
  "Cacao",
  "Café",
  "Té",
  "Yerba",
  "Mate cocido",
  "Hamburguesas",
  "Prefritos de pollo",
  "Prefritos de pescado",
  "Milanesas de soja",
  "Pizza",
  "Vegetales congelados",
  "Papas fritas",
  "Helado",
  "Huevos",
  "Crema de leche",
  "Queso rallado",
  "Fiambres",
  "Quesos en trozos",
  "Salchichas",
  "Quesos untables",
  "Levadura",
  "Pastas frescas",
  "Yogur",
  "Postres",
  "Gelatinas",
  "Manteca",
  "Margarina",
  "Tapas para empanadas",
  "Tapas pascualina",
  "Leche",
];

const Dashboard = () => {
  const [product, setProduct] = useState("Bebidas");

  return (
    <div className={styles.container}>
      <div className={styles.header} />
      <div className={styles.containerInputs}>
        <h1>Lista de compras</h1>
        <Input
          label="Producto"
          value={product}
          width="100%"
          categories={categories}
          onChange={(value) => setProduct(value)}
        />
        <div className={styles.bottomInputs}>
          <InputWithSelect value="1" />
          <Input
            label="Precio"
            value="$4200"
            width="60%"
            categories={[]}
            onChange={() => {}}
          />
          <button className={styles.addToCart}>+</button>
        </div>
      </div>
      <ProductCard title={product} units="2 unidades" />
    </div>
  );
};

export default Dashboard;
