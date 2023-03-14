import React from "react";
import { Food1, Food2 } from "../../../../assets/images/home/Menu_img";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

const SubMenu = () => {
  return (
    <div className="">
      <div className=" sm:flex-row flex justify-between items-center pt-8 mb-8 ">
        <h4 className="text-xl font-bold">Menu</h4>
        <input
          type="text"
          placeholder="Search Menu..."
          className="w-8/12 sm:w-6/12 h-[40px] bg-[#f6f6f6] text-black text-sm placeholder:text-sm px-4 rounded"
        />
      </div>
      {/* sub nav */}
      <div>
        <div className="w-full mb-8">
          <ul className="flex space-x-6 whitespace-nowrap overflow-x-auto">
            <li>WHAT'S NEW</li>
            <li>SCOOPS</li>
            <li>WRAPS</li>
            <li>AFFORDABLE</li>
            <li>TASTY SIDES</li>
            <li>DRINKS</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row">
        <div className="w-full flex space-x-2 ">
          <div className="order-1 sm:order-none flex-shrink-0">
            <img src={Food1} alt="foodImage" className="h-full" />
          </div>
          <div className="order-2 sm:order-none sm:ml-4 flex flex-col space-y-2">
            <p className="text-[16px] font-bold">EggStar Meal</p>
            <p className="text-[14px] text-[#828282]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="font-bold">
              <span className="text-[#229900] text-[12px] font-bold">from</span>{" "}
              $120.00
            </p>
          </div>
        </div>
        <div className="flex items-center border h-fit self-end w-3/12 justify-between p-1 rounded-full font-semibold">
          <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900] flex items-center justify-center text-white">
            <CgMathMinus />
          </button>
          <p>2</p>
          <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900] flex items-center justify-center text-white">
            <CgMathPlus />
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row mt-4">
        <div className="w-full flex space-x-2 ">
          <div className="order-1 sm:order-none flex-shrink-0">
            <img src={Food2} alt="foodImage" className="h-full" />
          </div>
          <div className="order-2 sm:order-none sm:ml-4 flex flex-col space-y-2">
            <p className="text-[16px] font-bold">EggStar Meal</p>
            <p className="text-[14px] text-[#828282]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="font-bold">
              <span className="text-[#229900] text-[12px] font-bold">from</span>{" "}
              $120.00
            </p>
          </div>
        </div>
        <div className="order-3 sm:order-none flex justify-between items-center w-full sm:w-[156px] h-[46px] rounded-full border px-8 mt-4 sm:mt-0">
          <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900]">
            -
          </button>
          <p>2</p>
          <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900]">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
