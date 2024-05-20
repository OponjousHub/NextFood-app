import Link from "next/link";
import classes from "./page.module.css";

function Mealss() {
  return (
    <div className={classes.form_container}>
      <header className={classes.header}>
        <h1>
          Shear your <span>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs shearing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={`${classes.rows}, ${classes.name_email}`}>
            <p>
              <label htmlFor="name">your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p className={classes.rows}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p className={classes.rows}>
            <label htmlFor="summary">Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p className={classes.rows}>
            <label htmlFor="instuction">instructions</label>
            <textarea
              type="text"
              id="instuction"
              name="instuction"
              rows={7}
            ></textarea>
          </p>
          <p className={classes.picker}>Image Picker</p>
          <button className={classes.shear}>Shear meal</button>
        </form>
      </main>
    </div>
  );
}

export default Mealss;
