import React from "react";
import { AiFillClockCircle, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { RiErrorWarningFill, RiUserAddFill } from "react-icons/ri";
import { ChikenRep, Menuhero } from "../../../assets/images/home/Menu_img";
import { TopNav } from "../../../components/blocks";
import { Review, SubMenu } from "./sections";

const delivery = [
  {
    id: 1,
    price: "$0.00",
    title: "Delivery fee",
  },
  {
    id: 2,
    price: "15 - 24mins",
    title: "delivery time",
  },
];

const Menu = () => {
  return (
    <>
      <div>
        <TopNav hasSearch />
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-[70%] px-10 lg:px-20">
            <div className="mx-auto">
              <div className="flex items-center justify-center w-full h-[100px] md:h-[150px] lg:h-[200px] relative">
                <img
                  className="w-full sm:w-[810px] h-full absolute"
                  src={Menuhero}
                  alt="hero img"
                />
                <img
                  className="absolute -bottom-1 left-10 z-0 w-16 md:w-20 lg:w-24 xl:w-28"
                  src={ChikenRep}
                  alt="food-logo"
                />
              </div>
              <div className="sm:px-6 my-4 px-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-3xl">Chicken Republic</h3>
                    <div className="flex items-center space-x-2 text-xs my-1">
                      <p className="flex items-center">Chicken Republic |</p>
                      <p className="font-semibold flex items-center justify-center space-x-2">
                        <AiFillStar /> <span>4.5(300+)</span>
                      </p>
                      <p>| 2.2km</p>
                    </div>
                  </div>
                  <div>
                    <AiOutlineHeart size={25} />
                  </div>
                </div>
                <div className="flex justify-between items-start flex-col sm:flex-row">
                  <div className="my-1 sm:my-0">
                    <div>
                      <p className="flex items-center space-x-2 ">
                        <AiFillClockCircle />
                        <span>Open now | All day</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 sm:flex items-center justify-between sm:flex-col hidden">
                    <div className="flex tems-center space-x-2 border p-2 rounded-full">
                      <RiErrorWarningFill size={15} />
                      <span className="text-xs">More information</span>
                    </div>
                    <div className="flex tems-center space-x-2  p-2 rounded-full bg-[#ff9900] text-[#fff] self-end">
                      <RiUserAddFill size={15} />
                      <span className="text-xs">Group Order</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  {delivery.map(({ id, title, price }) => (
                    <div
                      className="h-[70px] border w-[160px] flex flex-col justify-center items-center"
                      key={id}
                    >
                      <h3 className="text-center">{price}</h3>
                      <p className="text-center">{title}</p>
                    </div>
                  ))}
                </div>
                <div className="w-10/12 flex items-center justify-between sm:flex-col sm:hidden my-2">
                  <div className="flex tems-center space-x-2 border p-2 rounded-full">
                    <RiErrorWarningFill size={15} />
                    <span className="text-xs">More information</span>
                  </div>
                  <div className="flex tems-center space-x-2 border p-2 rounded-full bg-[#ff9900] text-[#fff]">
                    <RiUserAddFill size={15} />
                    <span className="text-xs">Group Order</span>
                  </div>
                </div>
              </div>
              <Review />
              <SubMenu />
            </div>
            {/* <div className="mx-auto my-auto relative w-full">
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
            </div> */}

            {/* image title */}
            {/* <div className="w-full flex flex-col sm:flex-row">
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
            </div> */}
            {/* <Review />
            <SubMenu /> */}
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
