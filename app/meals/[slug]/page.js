import { getMeal } from "@/lib/meals";
import meals from "../page";
import classes from "./slugPage.module.css";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) notFound();

  return {
    title: meal.title,
    description: meal.summary,
  };
}

function DisplayMealPage({ params }) {
  const slug = params.slug;
  const meal = getMeal(slug);

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://oponjous-nest-image-bucket.s3.eu-north-1.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.header_text}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            By <a href={`mailto:${"EMAIL"}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default DisplayMealPage;
