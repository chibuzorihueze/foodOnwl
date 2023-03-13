import React from "react";
import { ChikenRep, Menuhero } from "../../../assets/images/home/Menu_img";
import { TopNav } from "../../../components/blocks";
import { Review, SubMenu } from "./sections";

const Menu = () => {
  return (
    <>
      <div>
        <TopNav hasSearch />
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-[70%] ml-4 sm:ml-0">
            <div className="mx-auto my-auto relative w-full">
              <img
                className="w-full sm:w-[810px] h-[200px]"
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
            <div className="w-full flex flex-col sm:flex-row ">
              <div className="space-y-2">
                <h1 className="text-[32px] font-bold mb-[10px]">
                  Chiken Republic
                </h1>
                <p>Chiken Republic |</p>
                <p>4.5 (300+) | 2.2km</p>
                <p>
                  <span className="text-[#229900] font-bold">Open Now</span> |
                  All day
                </p>
                <div className="w-full flex mt-4">
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
              <div className="w-full sm:w-auto sm:flex-row flex-col space-y-4">
                <div className="bg-[#ff9900] rounded text-[#fff] w-[138px] h-[34px] flex justify-center items-center">
                  Group Order
                </div>
                <div className="bg-[#f2f2f2] rounded text-[#000] w-[138px] h-[34px] flex justify-center items-center">
                  More information
                </div>

              </div>
            </div>
            <Review />
            <SubMenu />
          </div>
          <div className="hidden sm:block w-[30%] border-l">
            <div className="flex-row justify-center item-center space-y-4">
              <h3 className="flex justify-center item-center">
                Your cart is empty
              </h3>
              <p className="flex justify-center item-center">
                Add items to get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
