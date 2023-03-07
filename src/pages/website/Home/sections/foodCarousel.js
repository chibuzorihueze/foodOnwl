import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Sandwich } from "../../../../assets/images";
import { Splide1, Splide2 } from "../../../../assets/images/home/Splideimg";

const foodItems = [
  {
    id: 1,
    title: "Cuisine 1",
    imgSrc: Splide1,
  },
  {
    id: 2,
    title: "Cuisine 2",
    imgSrc: Splide2,
  },
  {
    id: 3,
    title: "Cuisine 3",
    imgSrc: Sandwich,
  },
  {
    id: 4,
    title: "Cuisine 4",
    imgSrc: Splide1,
  },
  {
    id: 5,
    title: "Cuisine 5",
    imgSrc: Splide2,
  },
];

const FoodCarousel = () => {
  const options = {
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    autoplay: true,
    pauseOnHover: true,
    breakpoints: {
      768: {
        perPage: 2,
      },
      576: {
        perPage: 1,
      },
    },
  };

  return (
    <Splide options={options}>
      {foodItems.map((foodItem) => (
        <SplideSlide key={foodItem.id}>
          <div className="w-[379px] h-[175px] flex justify-center items-center ml-4">
            <img
              src={foodItem.imgSrc}
              alt={foodItem.title}
              className="w-full h-auto"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default FoodCarousel;
