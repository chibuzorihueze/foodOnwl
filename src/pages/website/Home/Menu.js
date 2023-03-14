import React from "react";
import { AiFillClockCircle, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { RiErrorWarningFill, RiUserAddFill } from "react-icons/ri";
import {
  Cart,
  ChikenRep,
  Menuhero,
} from "../../../assets/images/home/Menu_img";
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
    title: "Delivery time",
  },
];

const Menu = () => {
  return (
    <>
      <div>
        <TopNav hasSearch />
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-[75%] px-10 lg:px-28">
            <div className="mx-auto">
              <div className="flex items-center justify-center w-full h-[100px] md:h-[150px] lg:h-[200px] relative">
                <img
                  className="w-full h-full absolute"
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
                      <p className="flex items-center text-[#828282] font-semi-bold">
                        Chicken Republic |
                      </p>
                      <p className="font-semibold flex items-center justify-center space-x-2">
                        <AiFillStar color="#ff9900" size={[15]} />
                        <span className="font-semibold">
                          4.5<span className="text-[#828282]">(300+)</span>
                        </span>
                      </p>
                      <p className="font-semibold text-[#828282]">| 2.2km</p>
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
                        <AiFillClockCircle color="#828282" />
                        <span className="text-sm text-[#828282] font-semibold">
                          <span className="text-[#229900]"> Open now</span> |
                          All day
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 sm:flex items-center justify-between sm:flex-col hidden">
                    <div className="flex tems-center space-x-2 border-transparent shadow-sm cursor-pointer p-2 rounded-full bg-[#f2f2f2] text-[#333333] font-semibold">
                      <RiErrorWarningFill color="#333333" size={15} />
                      <span className="text-xs">More information</span>
                    </div>
                    <div className="flex tems-center space-x-2  p-2 rounded-full bg-[#ff9900] border-transparent shadow-sm cursor-pointer text-[#fff] self-end">
                      <RiUserAddFill size={15} />
                      <span className="text-xs font-semibold">Group Order</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  {delivery.map(({ id, title, price }) => (
                    <div
                      className="h-[70px] border-transparent shadow-sm  w-[160px] flex flex-col justify-center items-center"
                      key={id}
                    >
                      <h3 className="text-center font-semibold">{price}</h3>
                      <p className="text-center text-[#828282]">{title}</p>
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
          </div>
          <div className="hidden sm:block w-[25%] border-l-2">
            <div className=" flex flex-col justify-center items-center space-y-4 h-[30%]">
              <div className="text-center space-y-3">
                <h3 className="font-semibold">Your cart is empty</h3>
                <p className="text-xs">Add items to get started</p>
              </div>
              <div>
                <img
                  src={Cart}
                  alt="cartman"
                  className="w-[180px] h-[180px] text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
