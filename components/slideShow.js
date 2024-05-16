"use client";

import Image from "next/image";
import burger from "@/assets/burger.jpg";
import curry from "@/assets/curry.jpg";
import dumplings from "@/assets/dumplings.jpg";
import pizza from "@/assets/pizza.jpg";
import macncheese from "@/assets/macncheese.jpg";
import schnitzel from "@/assets/schnitzel.jpg";
import tomato_salad from "@/assets/tomato_salad.jpg";
import { useEffect, useState } from "react";
import classes from "./slideShow.module.css";
const images = [
  { image: burger, alt: "A delicious, juicy burger" },
  { image: curry, alt: "A delicious, spicy curry" },
  { image: dumplings, alt: "Steamed dumplings" },
  { image: pizza, alt: "A delicious pizz" },
  { image: macncheese, alt: "Mac and cheese" },
  { image: schnitzel, alt: "A delicious schnitzel" },
  { image: tomato_salad, alt: "A delicious tomato salad" },
];

function SlideShow() {
  const [displayedImgIndex, setDisplayedImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedImgIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slide}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={index === displayedImgIndex ? classes.active : ""}
        />
      ))}
    </div>
  );
}

export default SlideShow;
