import React from "react";
import { Sandwich } from "../assets/images";

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
];

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2 className="card-title font-bold text-[18px]">{title}</h2>
      <div className="grid grid-cols-3 gap-x-4">
        {foodCard.map(({ id, title, imgSrc }) => (
          <div
            className=" h-[340px] w-30 flex cursor-pointer text-sm flex-col justify-center items-center gap-y-2"
            key={id}
          >
            <img src={imgSrc} alt={title} />
            <div>
              <div className="text-[16px]">Tasty Hot Chicken Cuisine</div>

              <div className="flex items-center w-full">
                <div className=" w-1/2">
                  <p>Paragraph 1</p>
                </div>
                <div className=" w-1/2">
                  <p>Paragraph 2</p>
                </div>
              </div>
              <div className="flex items-center  w-full ">
                <div className="w-1/2">
                  <p>Paragraph 3</p>
                </div>
                <div className=" w-1/2">
                  <p>Paragraph 4</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
