import React from "react";
import { HiLocationMarker, HiOutlineSearch } from "react-icons/hi";
import Navbar from "../../components/nav";
import ChangeLocationImg from "../../assets/images/home/change_location.png";
import {
  Leaf,
  Tea,
  Donuts,
  Coffee,
  ChickenThigh,
  HotDog,
  Bread,
} from "../../assets/images";

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

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero__container">
        <div className="hero__left">
          <div className="w-8/12 space-y-2">
            <div className="heading flex items-center justify-between">
              <div className="flex items-center">
                <HiLocationMarker size={30} />
                <p className="font-semibold text-xl">Adewunmi Adeleke, Ajah</p>
              </div>
              <img
                src={ChangeLocationImg}
                alt="change_location"
                className="cursor-pointer"
              />
            </div>
            <form className="hero_input relative flex items-center border h-10 rounded">
              <input
                type="search"
                className="w-11/12 bg-transparent border-none focus:border-none outline-none text-white placeholder:text-zinc-200 pl-2 h-full font-semibold"
                placeholder="Search Location"
              />
              <div className="bg-[#FF9900] rounded-tr rounded-br flex h-full items-center justify-center py-1 w-1/12 cursor-pointer">
                <HiOutlineSearch />
              </div>
            </form>
          </div>
        </div>
        <div>Col 2</div>
      </div>
      <section className="categories on_container py-10">
        <h3 className="font-semibold text-lg">Categories</h3>
        <div className="categories__list grid grid-cols-8 gap-x-8 my-4">
          {foodCategories.map(({ id, title, imgSrc }) => (
            <div
              className="border h-[100px] rounded w-30 flex--col-center cursor-pointer text-sm gap-y-2"
              key={id}
            >
              <img src={imgSrc} alt={title} />
              {title}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
