import { useContext } from "react";
import { Modal } from "../UI/Modal";
import classes from "./Cart.module.css";
import { CartContext } from "../../store/cart-context";
import CartItem from "./CartItem";

export function Cart({ onHideCart }) {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const hasItems = items.length > 0;

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };
  const onRemoveItem = (id) => {
    removeItem(id);
  };

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={() => onRemoveItem(item.id)}
      onAdd={() => cartItemAddHandler(item)}
    />
  ));
  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
