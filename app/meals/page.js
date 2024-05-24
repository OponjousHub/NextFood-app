import Link from "next/link";
import MealGrid from "../../components/meals/mealgrid";
import { getMeals } from "@/lib/meals";
import classes from "./meal_page.module.css";
import { Suspense } from "react";

export const metadata = {
  title: "Oponjous NextLevel Food",
  description: "Delicious meal, Delivered to your to door.",
};

async function FetchingMeals() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}

async function meals() {
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
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <FetchingMeals />
        </Suspense>
      </main>
    </>
  );
}

export default meals;
