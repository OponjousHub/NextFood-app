"use client";

import { useFormState } from "react-dom";
import ImagePicker from "@/components/meals/image-picker";
import { GetMealData } from "@/components/meals/action";
import { FormSubmitButton } from "@/components/meals/form-submit-button";
import classes from "./page.module.css";

function Meals() {
  const [state, formAction] = useFormState(GetMealData, { message: null });
  return (
    <div className={classes.form_container}>
      <header className={classes.header}>
        <h1>
          Shear your <span>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs shearing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={`${classes.rows}, ${classes.name_email}`}>
            <p>
              <label htmlFor="name">your name</label>
              <input type="text" id="name" name="names" />
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
              name="instructions"
              rows={7}
            ></textarea>
          </p>
          <div className={classes.picker}>
            <ImagePicker name="image" label="Pick Your Image" />
            {state.message && <p>{state.message}</p>}
          </div>
          <FormSubmitButton />
        </form>
      </main>
    </div>
  );
}

export default Meals;
