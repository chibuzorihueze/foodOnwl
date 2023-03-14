import React from "react";
import {
  Leaf,
  Tea,
  Donuts,
  Coffee,
  ChickenThigh,
  HotDog,
  Bread,
} from "../../../../assets/images";

const foodCategories = [
  { id: 0, title: "Fast Food", imgSrc: Coffee },
  { id: 1, title: "Breakfast", imgSrc: Bread },
  { id: 2, title: "Natives", imgSrc: Leaf },
  { id: 3, title: "Steaks", imgSrc: ChickenThigh },
  { id: 4, title: "Pastries", imgSrc: HotDog },
  { id: 5, title: "Donuts", imgSrc: Donuts },
  { id: 6, title: "Tea", imgSrc: Tea },
  { id: 7, title: "Bakery", imgSrc: Bread },
];

const Categories = () => (
  <section className="categories on_container py-20 sm:py-10">
    <h3 className="font-semibold text-lg">Categories</h3>
    <div className="categories__list grid grid-cols-8 gap-x-24 sm:gap-x-6 my-4 border-b border-[#e0e0e0] sm:pb-12 overflow-x-scroll lg:overflow-hidden px-5">
      {foodCategories.map(({ id, title, imgSrc }) => (
        <div
          className="w-30 h-[100px] rounded flex--col-center cursor-pointer text-sm gap-y-2 bg-[#f6f6f6] border "
          key={id}
        >
          <div>
            <img src={imgSrc} alt={title} />
          </div>
          <p className="text-xs sm:text-sm">{title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Categories;
