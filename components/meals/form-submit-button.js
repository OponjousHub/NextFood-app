"use client";

import { useFormStatus } from "react-dom";
import classes from "./form-submit-button.module.css";

export function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className={classes.shear} disabled={pending}>
      {pending ? "Submitting..." : "Shear meal"}
    </button>
  );
}
