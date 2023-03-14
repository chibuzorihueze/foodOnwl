import React from "react";
import { AiFillStar } from "react-icons/ai";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const rating = [
  {
    id: 1,
    title: "Philip Bassey",
    date: "| 29/11/22",
    comments: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const Review = () => {
  return (
    <div className="w-full">
      <div className="border-t mt-6 space-y-2 mb-6">
        <h3 className="font-bold text-2xl mt-6">User Reviews</h3>
        <div className="flex items-center">
          <AiFillStar />
          <p>4.5 (300+ ratings)</p>
        </div>
      </div>
      <Glider
        draggable
        hasArrows
        slidesToShow={3}
        slidesToScroll={2}
        itemWidth={300}
      >
        {[1, 2, 3, 4, 5, 6, 7].map(({ id, title, date, comments }) => (
          <div className="border mr-5 px-4 py-3 space-y-2">
            <div>
              <h3 className="font-semibold">Philip Bassey</h3>
              <p className="flex items-center">
                {[1, 2, 3, 4, 5].map(() => (
                  <AiFillStar />
                ))}
                | 29/11/22
              </p>
            </div>
            <div>
              <p class="whitespace-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                veritatis.
              </p>
            </div>
          </div>
        ))}
      </Glider>
    </div>
  );
};

export default Review;
