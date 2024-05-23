import Link from "next/link";
import Image from "next/image";
import classes from "./mealItem.module.css";

export default function MealItem({ slug, summary, title, image, creator }) {
  return (
    <article className={classes.meal_item}>
      <header>
        <div className={classes.image}>
          <Image
            src={`https://oponjous-nest-image-bucket.s3.eu-north-1.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={classes.header_text}>
          <h2>{title}</h2>
          <p> By {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          {" "}
          <Link href={`/meals/${slug}`} className={classes.slug_action}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
