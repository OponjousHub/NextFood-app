import MealItem from "./mealItem";
import classes from "./mealgrid.module.css";

export default function MealGrid({ meals }) {
  return (
    <ul className={classes.meal_grid}>
      {meals.map((meal) => (
        <li key={meal.id} className={classes.meal_grid}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
