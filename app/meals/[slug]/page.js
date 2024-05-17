import classes from "./mealSlug.module.css";
import Image from "next/image";

function DisplayMealPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
          <div className={classes.header_text}>
            <h1>Title</h1>
            <p className={classes.creator}>
              By <a href={`mailto:${"EMAIL"}`}>NAME</a>
            </p>
            <p>SUMMARY</p>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}

export default DisplayMealPage;
