"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ name, label }) {
  const [clickImagePick, setClickImagePick] = useState();
  const imageRef = useRef();

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleSelectImage = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setClickImagePick(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setClickImagePick(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      {/* <label htmlFor={name}>Label</label> */}
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!clickImagePick && <p>No image selected</p>}
          {clickImagePick && (
            <Image src={clickImagePick} alt="image picked by the user" fill />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpg"
          name={name}
          className={classes.input}
          ref={imageRef}
          onChange={handleSelectImage}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleImageClick}
        >
          Select an image
        </button>
      </div>
    </div>
  );
}
