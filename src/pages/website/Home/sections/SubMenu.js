import React from "react";
import { Food1, Food2 } from "../../../../assets/images/home/Menu_img";

const SubMenu = () => {
  return (
    <>
      <div className="border-t-2 border-b-2 pb-2">
        <div className="flex justify-between items-center pt-8 mb-8">
          <h4 className="mr-8 text-[18px] font-bold">Menu</h4>
          <input
            type="text"
            placeholder="Search menu..."
            className="w-[364px] h-[40px] bg-[#f6f6f6] px-4 rounded"
          />
        </div>

        <ul className="flex space-x-4 ">
          <li>WHAT'S NEW</li>
          <li>SCOOPS</li>
          <li>WRAPS</li>
          <li>AFFORDABLE</li>
          <li>TASTY SIDES</li>
          <li>DRINKS</li>
        </ul>
      </div>

      {/* what's new section */}

      <div className="pt-14">
        <h1 className="mb-2 text-[24px] font-bold">What's new</h1>
        <p className="text-[16px] text-[#828282]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className="flex flex-col space-y-6 mt-4 ">
          <div className="border flex w-[810px] h-[135px] space-x-8 justify-between items-center px-4  rounded">
            <div>
              <img src={Food1} alt="foodImage" />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-[16px] font-bold">EggStar Meal</p>
              <p className="text-[14px] text-[#828282]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="font-bold"><span className="text-[#229900] text-[12px] font-bold">from</span> $120.00</p>
            </div>
            <div className="flex justify-between items-center w-[158px] h-[56px] rounded-full border px-8">
              <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900]">
                -
              </button>
              <p>2</p>
              <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900]">
                +
              </button>
            </div>
          </div>

          <div className="border flex w-[810px] h-[135px] space-x-8 justify-between items-center px-4">
            <div>
              <img src={Food2} alt="foodImage" />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-[16px] font-bold">EggStar Meal</p>
              <p className="text-[14px] text-[#828282]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="font-bold"> <span className="text-[#229900] text-[12px] font-bold">from</span> $120.00</p>
            </div>
            <div className="flex justify-between items-center w-[158px] h-[56px] rounded-full border px-4">
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
      </div>
    </>
  );
};

export default SubMenu;
