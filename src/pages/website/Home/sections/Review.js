import React from "react";
import { Star } from "../../../../assets/images";

const Review = () => {
  return (
    <>
      <div className="mt-[60px] border-t-2 mb-8">
        <h3 className="font-bold text-[18px] mt-[60px] mb-[20px]">
          User Reviews
        </h3>
        <div className="flex">
          <img className="w-[16px] h-[16px] mt-[2px]" src={Star} alt="" />
          <p>4.5 (300+ ratings)</p>
        </div>

        <div className="flex space-x-4">
          <div className="mt-[60px] w-[258px] h-[167px] border-4 ">
            <h1 className="mb-[6px] mt-[4px]">Philip Bassey</h1>
            <div className="flex">
              <div className="flex items-center">
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
              </div>
              <p className="ml-2 text-center">| 29/11/22</p>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda quisquam voluptas iure provident totam sapiente.
            </p>
          </div>

          <div className="mt-[60px] w-[258px] h-[167px] border-4 ">
            <h1 className="mb-[6px] mt-[4px]">Philip Bassey</h1>
            <div className="flex">
              <div className="flex items-center">
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
              </div>
              <p className="ml-2 text-center">| 29/11/22</p>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda quisquam voluptas iure provident totam sapiente.
            </p>
          </div>

          <div className="mt-[60px] w-[258px] h-[167px] border-4 ">
            <h1 className="mb-[6px] mt-[4px]">Philip Bassey</h1>
            <div className="flex">
              <div className="flex items-center">
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
                <img className="w-[16px] h-[16px]" src={Star} alt="" />
              </div>
              <p className="ml-2 text-center">| 29/11/22</p>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda quisquam voluptas iure provident totam sapiente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
