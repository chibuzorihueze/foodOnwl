import React, { useRef } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Sandwich } from "../../../../assets/images";
import { Splide1, Splide2 } from "../../../../assets/images/home/Splideimg";
import Slider from "react-slick";

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        position: "absolute",
        left: 50,
        top: 220,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        position: "absolute",
        left: 10,
        top: 220,
        zIndex: 30,
      }}
      onClick={onClick}
    />
  );
}

const FoodCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings} className="border">
        {foodItems.map(({ id, imgSrc, title }) => (
          <div className="w-[379px] h-[200px] flex justify-center items-center ml-4d">
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FoodCarousel;
