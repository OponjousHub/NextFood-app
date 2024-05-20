import classes from "./image-picker.module.css";

export default function ImagePicker({ name, label }) {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <input
          type="file"
          id={name}
          accept="image/jpg, image/png"
          name={name}
        />
      </div>
    </div>
  );
}
