import React from "react";
import { Star } from "../../../../assets/images";

const Review = () => {
  return (
    <>
      <div className="mt-[60px] border-t-2">
        <h3 className="font-bold text-[18px] mt-[60px] mb-[20px]">User Reviews</h3>
        <div className="flex">
          <img className="w-[16px] h-[16px] mt-[2px]" src={Star} alt="" />
          <p>4.5 (300+ ratings)</p>
        </div>
      </div>
    </>
  );
};

export default Review;
