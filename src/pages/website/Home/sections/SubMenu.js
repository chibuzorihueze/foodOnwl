import React from "react";
import { Food1, Food2 } from "../../../../assets/images/home/Menu_img";

const SubMenu = () => {
  return (
    <div className="w-full">
      <div className=" sm:flex-row flex justify-between items-center pt-8 mb-8 ">
        <h4 className="mr-8 text-[18px] font-bold">Menu</h4>
        <input
          type="text"
          placeholder="Search menu..."
          className="w-[364px] h-[40px] bg-[#f6f6f6] px-4 rounded"
        />
      </div>
      {/* sub nav */}
      <div>
        <div className="w-full">
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
        <div className="order-3 sm:order-none flex justify-between items-center w-full sm:w-[56px] h-[46px] rounded-full border px-8 mt-4 sm:mt-0">
          <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900]">
            -
          </button>
          <p>2</p>
          <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900]">
            +
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row">
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
        <div className="order-3 sm:order-none flex justify-between items-center w-full sm:w-[56px] h-[46px] rounded-full border px-8 mt-4 sm:mt-0">
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
