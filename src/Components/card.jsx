import React from "react";
import { Sandwich,Star } from "../assets/images";

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
      <div className="w-[80%] mx-auto">
        <h2 className="card-title font-bold text-[18px]">{title}</h2>
        <div className="grid grid-cols-3 gap-x-12">
          {foodCard.map(({ id, title, imgSrc }) => (
            <div
              className="w-[389px] h-[188px]flex cursor-pointer text-sm flex-col"
              key={id}
            >
              <img src={imgSrc} alt={title} />
              <div>
                <div className="text-[16px] mt-3 font-bold">Tasty Hot Chicken Cuisine</div>
  
                <div className="flex items-center w-full mt-3 font-medium">
                  <div className=" flex-1">
                    <p>Paragraph 1</p>
                  </div>
                  <div>
                    <p>Paragraph 2</p>
                  </div>
                </div>
                <div className="flex items-center  w-full mt-3 font-medium">

                  <div className="flex flex-1">
                    <img className="w-[16px] h-[16px]" src={Star} alt="start icon" />
                    <p>Paragraph 3</p>
                  </div>
                  <div>
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
