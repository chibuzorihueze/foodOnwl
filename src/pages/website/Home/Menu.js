import React from "react";
import { ChikenRep, Menuhero } from "../../../assets/images/home/Menu_img";
import { TopNav } from "../../../components/blocks";
import { Star } from "./../../../assets/images/";
import { Review, SubMenu } from "./sections";

const Menu = () => {
  return (
    <>
      <div>
        <TopNav hasSearch />
        <div className="w-[100%] flex">
          <div className="w-[70%]">
            <div className="mx-auto my-auto relative w-[100%]">
              <img
                className="w-[810px] h-[200px]"
                src={Menuhero}
                alt="hero img"
              />
              <img
                className="absolute bottom-0 left-0 w-16 md:w-20 lg:w-24 xl:w-28"
                src={ChikenRep}
                alt="food-logo"
              />
            </div>

            {/* image title */}
            <div className="w-[100%] flex flex-col sm:flex-row ">
              <div>
                <h1 className="text-[32px] font-bold mb-[10px]">
                  Chiken Republic
                </h1>
                <p>Chiken Republic |</p>
                <p>4.5 (300+) | 2.2km</p>
                <p>
                  <span className="text-[#229900] font-bold">Open Now</span> |
                  All day
                </p>
                <div className="w-[100%] flex">
                  <div className="h-[70px] border w-[160px] flex flex-col justify-center items-center">
                    <h3 className="text-center">$0.00</h3>
                    <p className="text-center">Delivery fee</p>
                  </div>
                  <div className="h-[70px] border w-[160px] flex flex-col justify-center items-center">
                    <h3 className="text-center">$0.00</h3>
                    <p className="text-center">Delivery fee</p>
                  </div>
                </div>
              </div>
              <div class="w-full sm:flex-row flex-col ">
                <div class="bg-[#ff9900] rounded text-[#fff] w-[138px] h-[34px] flex justify-center items-center">
                  Group Order
                </div>
                <div class="bg-[#f2f2f2] rounded text-[#000] w-[138px] h-[34px] flex justify-center items-center">
                  More information
                </div>
              </div>
            </div>
            <Review />
            <SubMenu/>
          </div>
          <div className="w-[30%] bg-blue-800">hello</div>
        </div>
      </div>
    </>
  );
};
export default Menu;
