import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sandwich } from "../../../assets/images";

const foodCard = [
  {
    id: 0,
    title: "Cusine",
    imgSrc: Sandwich,
  },
  {
    id: 1,
    title: "Cusine",
    imgSrc: Sandwich,
  },
  {
    id: 2,
    title: "Cusine",
    imgSrc: Sandwich,
  },
  {
    id: 3,
    title: "Cusine",
    imgSrc: Sandwich,
  },
  {
    id: 4,
    title: "Cusine",
    imgSrc: Sandwich,
  },
  {
    id: 5,
    title: "Cusine",
    imgSrc: Sandwich,
  },
];

const ResturantCard = ({ title }) => {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="card-title font-bold text-[18px] mb-8">{title}</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
        {foodCard.map(({ id, title, imgSrc }) => (
          <Link to="/menu">
            <div
              className="h-[350px] flex cursor-pointer border flex-col justify-between"
              key={id}
            >
              <div className="h-[70%] border relative w-full">
                <img
                  className="h-full w-full absolute object-fill"
                  src={imgSrc}
                  alt={title}
                />
              </div>
              <div className="h-[30%] border flex flex-col justify-evenly">
                <div className="text-lg font-semibold">
                  Tasty Hot Chicken Cuisine
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p>Paragraph 1</p>
                  </div>
                  <div>
                    <p>Paragraph 2</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <AiFillStar color="orange" size={14} />
                    <p>Paragraph 3</p>
                  </div>
                  <div>
                    <p>Paragraph 4</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResturantCard;
