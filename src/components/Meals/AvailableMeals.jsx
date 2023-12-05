import { DUMMY_MEALS } from "../../dummy-meals";
import { Card } from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import { MealItem } from "./MealItem/MealItem";

export function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} id={meal.id} {...meal} />
          ))}
        </Card>
      </ul>
    </section>
  );
}
