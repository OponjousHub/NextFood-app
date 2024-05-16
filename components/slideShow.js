import Image from "next/image";
import burger from "@/assets/burger.jpg";
import curry from "@/assets/curry.jpg";
import dumplings from "@/assets/dumplings.jpg";
import pizza from "@/assets/pizza.jpg";
import macncheese from "@/assets/macncheese.jpg";
import schnitzel from "@/assets/schnitzel.jpg";
import tomato_salad from "@/assets/tomato_salad.jpg";

const images = [
  { image: burger, alt: "burger recipe" },
  { image: curry, alt: "burger curry" },
  { image: dumplings, alt: "dumplings recipe" },
  { image: pizza, alt: "pizza recipe" },
  { image: macncheese, alt: "macncheese recipe" },
  { image: schnitzel, alt: "schnitzel recipe" },
  { image: tomato_salad, alt: "tomato_salad recipe" },
];

function SlideShow() {
  console.log(images);
  return (
    <div>
      <ul>
        {images.map((image, index) => (
          <Image key={index} src={images.image} alt={images.alt} />
        ))}
      </ul>
    </div>
  );
}

export default SlideShow;
