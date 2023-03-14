import React from "react";
import { Food1, Food2 } from "../../../../assets/images/home/Menu_img";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

const meals = [
  {
    id: 1,
    img: Food1,
    title: "EggStar Meal",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: "$120.00",
  },
  {
    id: 2,
    img: Food2,
    title: "EggStar Meal",
    review: "Lorem ipsum dolor sit amet consectetur.",
    price: "$120.00",
  },
];

const mealsMenu = [
  {
    id: 1,
    title: "WHAT'S NEW",
  },
  {
    id: 2,
    title: "SCOOPS",
  },
  {
    id: 3,
    title: "WRAPS",
  },
  {
    id: 4,
    title: "AFFORDABLE",
  },
  {
    id: 5,
    title: "TASTY SIDES",
  },
  {
    id: 6,
    title: "DRINKS",
  },
];

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
            {mealsMenu.map(({ id, title }) => (
              <li
                key={id}
                className="cursor-pointer hover:text-[#ff9922] hover:border-b-4 hover:border-[#ff9922] font-semibold text-[#828282]"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6">
        {meals.map(({ id, img, title, review, price }) => (
          <div
            key={id}
            className="flex flex-col justify-between sm:flex-row border rounded-lg p-2"
          >
            <div className="flex space-x-2 ">
              <div className="">
                <img src={img} alt="foodImage" className="h-full" />
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-base font-bold">{title}</p>
                <p className="text-sm text-[#828282]">{review}</p>
                <p className="font-bold">
                  <span className="text-[#229900] text-[12px] font-bold">
                    from
                  </span>{" "}
                  {price}
                </p>
              </div>
            </div>
            <div className="flex items-center border h-fit self-end w-2/12 justify-between p-1 rounded-full font-semibold">
              <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900] flex items-center justify-center text-white">
                <CgMathMinus />
              </button>
              <p>2</p>
              <button className="w-[32px] h-[32px] rounded-full bg-[#ff9900] flex items-center justify-center text-white">
                <CgMathPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
