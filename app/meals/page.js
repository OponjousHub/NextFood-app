import Link from "next/link";
import MealGrid from "../../components/meals/mealgrid";
import { getMeals } from "@/lib/meals";
import classes from "./meal_page.module.css";

async function meals() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.header_text}>
          Delicious meals, created <span>by you</span>
        </h1>
        <div className={classes.cta_text}>
          <p>
            Choose your favourite recipe and cook it your self. It is easy and
            fun!
          </p>
          <Link href="/meals/shear" className={classes.cta}>
            Shear Your Favorite Recipe
          </Link>
        </div>
      </header>
      <main className={classes.meal_section}>
        <MealGrid meals={meals} />
      </main>
    </>
  );
}

export default meals;
