/* eslint-disable react/prop-types */
import { useContext } from "react";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";
import { CartContext } from "../../../store/cart-context";

export function MealItem({ id, name, description, price }) {
  const { addItem } = useContext(CartContext);
  const value = `$${price?.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });

    console.log(amount);
  };
  return (
    <li key={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{value}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
