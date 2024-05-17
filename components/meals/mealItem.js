import Link from "next/link";
import classes from "./mealItem.module.css";

export default function MealItem({ slug, summery, title, image, creator }) {
  return (
    <article>
      <header className={classes.header}>
        <Image src={image} alt={title} fill />
        <div className={classes.header_text}>
          <h2>{title}</h2>
          <p> By {creator}</p>
        </div>
        <div className={classes.content}>
          <p className={classes.summery}>{summery}</p>
          <Link href={`/meals${slug}`} className={classes.slug_action}></Link>
        </div>
      </header>
    </article>
  );
}
