import React from "react";
import { ChikenRep, Menuhero } from "../../../assets/images/home/Menu_img";
import Navbar from "./../../../components/nav2";
import { Star } from "./../../../assets/images/";
import { Review, SubMenu } from "./sections";

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-[75%] mb-[20px]">
        <div className="mx-auto my-auto relative">
          <img className="w-[810px] h-[200px]" src={Menuhero} alt="hero img" />
          <img
            style={{ position: "absolute", top: "90px", left: "50px" }}
            src={ChikenRep}
            alt="food-logo"
          />
        </div>
      </div>

      <div className="ml-[12%]  w-[75%]">
        <h1 className="text-[32px] font-bold mb-[10px]">Chiken Republic</h1>
        <div className="flex">
          <p>Chiken Republic |</p>
          <img className="w-[16px] h-[16px] mt-[2px]" src={Star} alt="" />
          <p>4.5 (300+) | 2.2km</p>
        </div>

        <div className="flex mt-[12px]">
          <p className="flex flex-1">
            <span className="text-[#229900] font-bold">Open Now</span> | All day
          </p>
          <div className=" rounded w-[169px] h-[34px] bg-[#f2f2f2] flex justify-center items-center mb-[-50px]">
            More Information
          </div>
        </div>

        <div className="flex mt-[30px]">
          <div className="h-[70px] border w-[160px] flex flex-col justify-center items-center">
            <h3 className="text-center">$0.00</h3>
            <p className="text-center">Delivery fee</p>
          </div>
          <div className="flex justify-between">
            <div className="h-[70px] border w-[160px] flex flex-col justify-center">
              <h3 className="text-center">15 - 24mins</h3>
              <p className="text-center">Delivery time</p>
            </div>
            <div className="bg-[#ff9900] rounded text-[#fff] w-[138px] h-[34px] flex justify-center items-center ml-[700px]">
              Group Order
            </div>
          </div>
        </div>
        <Review />
        <SubMenu />
      </div>
    </>
  );
};

export default Menu;
