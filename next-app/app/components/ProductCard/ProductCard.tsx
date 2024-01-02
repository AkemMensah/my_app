import React from "react";
// import styles from "./ProductCard.module.css";
import AddToCart from "../AddToCart";

const ProductCard = () => {
  return (
    <div 
    // className={styles.card}
    className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600"
    >
      <AddToCart />
    </div>
  );
};

export default ProductCard;
