import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export function Header({ onShowCart, onHideCart }) {
  return (
    <>
      <header className={classes.header}>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={onShowCart} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
}
